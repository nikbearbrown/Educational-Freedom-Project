"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

// Load MathJax on the client only
const MathJaxContext = dynamic(
  () => import("better-react-mathjax").then(m => m.MathJaxContext),
  { ssr: false }
);
const MathJax = dynamic(
  () => import("better-react-mathjax").then(m => m.MathJax),
  { ssr: false }
);

const mjConfig = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
  },
};

// ---------- math helpers ----------
const clamp = (x: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, x));
const pct = (x: number) => (isFinite(x) ? (100 * x).toFixed(2) + "%" : "—");

function upperHoeffding(clicks: number, impressions: number, alpha: number) {
  if (impressions <= 0) return 1;
  const phat = clicks / impressions;
  const eps = Math.sqrt(Math.log(1 / alpha) / (2 * impressions));
  return phat + eps; // one-sided upper bound
}

function upperWilson(clicks: number, impressions: number, alpha: number) {
  if (impressions <= 0) return 1;
  const phat = clicks / impressions;
  // one-sided 95% -> z ≈ 1.645 when alpha = 0.05; in general:
  const z = inverseNormalCdf(1 - alpha); // simple approx below
  const z2 = z * z;
  const denom = 1 + z2 / impressions;
  const center = phat + z2 / (2 * impressions);
  const rad = z * Math.sqrt((phat * (1 - phat)) / impressions + z2 / (4 * impressions * impressions));
  return (center + rad) / denom;
}

// Quick rational approximation for inverse CDF (sufficient here)
function inverseNormalCdf(p: number) {
  // Abramowitz & Stegun approximation (Peter John Acklam variant)
  // domain clamp
  const pp = clamp(p, 1e-12, 1 - 1e-12);
  const a1 = -39.69683028665376, a2 = 220.9460984245205, a3 = -275.9285104469687;
  const a4 = 138.3577518672690, a5 = -30.66479806614716, a6 = 2.506628277459239;
  const b1 = -54.47609879822406, b2 = 161.5858368580409, b3 = -155.6989798598866;
  const b4 = 66.80131188771972, b5 = -13.28068155288572;
  const c1 = -0.007784894002430293, c2 = -0.3223964580411365, c3 = -2.400758277161838;
  const c4 = -2.549732539343734, c5 = 4.374664141464968, c6 = 2.938163982698783;
  const d1 = 0.007784695709041462, d2 = 0.3224671290700398, d3 = 2.445134137142996;
  const d4 = 3.754408661907416;

  const plow = 0.02425, phigh = 1 - plow;
  let q, r;
  if (pp < plow) {
    q = Math.sqrt(-2 * Math.log(pp));
    return (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
           ((((d1 * q + d2) * q + d3) * q + d4) * 1);
  } else if (pp <= phigh) {
    q = pp - 0.5; r = q * q;
    return (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q /
           (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * 1 + 1);
  } else {
    q = Math.sqrt(-2 * Math.log(1 - pp));
    return -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
            ((((d1 * q + d2) * q + d3) * q + d4) * 1);
  }
}

// Classic UCB1-style bonus; needs a "time" or "total pulls" t and per-arm pulls n_a
function ucbBonus(impressionsForKeyword: number, totalImpressionsAllKeywords: number, c: number) {
  // Avoid 0/0 and log(0)
  const n = Math.max(1, impressionsForKeyword);
  const t = Math.max(n + 1, totalImpressionsAllKeywords);
  return c * Math.sqrt(Math.log(t) / n);
}

// ---------- page component ----------
export default function CTRConfidenceClient() {
  // Defaults you can tweak freely
  const [clicks, setClicks] = useState(30);
  const [impressions, setImpressions] = useState(900);
  const [targetPct, setTargetPct] = useState(5);       // % target CTR
  const [alphaPct, setAlphaPct] = useState(5);         // % one-sided alpha (e.g., 5 for 95% upper CI)
  const [totalImpr, setTotalImpr] = useState(10000);   // total account impressions (for UCB)
  const [ucbC, setUcbC] = useState(2);                 // exploration factor for UCB (typical 1–3)

  // Sanity
  const n = Math.max(0, Math.floor(impressions));
  const c = clamp(Math.max(0, Math.floor(clicks)), 0, n);
  const alpha = clamp(alphaPct / 100, 1e-6, 0.5); // one-sided alpha, cap away from 0
  const T = clamp(targetPct / 100, 0, 1);

  const phat = n > 0 ? c / n : 0;

  const uHoeff = useMemo(() => upperHoeffding(c, n, alpha), [c, n, alpha]);
  const uWilson = useMemo(() => upperWilson(c, n, alpha), [c, n, alpha]);

  const uUCB = useMemo(() => {
    // treat "estimate" as observed CTR, then add UCB bonus
    const bonus = ucbBonus(n, Math.max(totalImpr, n + 1), ucbC);
    return phat + bonus;
  }, [phat, n, totalImpr, ucbC]);

  const decision = (upper: number) => (upper < T ? "Remove" : "Keep");

  return (
    <MathJaxContext version={3} config={mjConfig}>
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          {/* ===== HERO ===== */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              CTR Bounds & Confidence Intervals (Interactive)
            </h1>
            <p className="text-lg text-muted-foreground">
              Unsure if a low-CTR keyword is truly weak or just unlucky? Use confidence bounds to decide fairly.
            </p>
          </div>

          {/* ===== EXPLANATION (High school level) ===== */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1) What’s a “bound” and why use it?</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Think of clicks as coin flips: each impression is a flip, and a click is “heads”.
                If you flip only a few times, getting few heads might just be bad luck.
                A <strong>confidence interval</strong> gives a safe range for the true click rate.
              </p>
              <p>
                If even the <em>top</em> of that range (an <strong>upper bound</strong>) is still below your target CTR,
                it’s reasonable to remove the keyword. Otherwise, keep collecting data.
              </p>
              <div className="bg-muted/50 p-4 rounded">
                <MathJax dynamic>
                  {String.raw`Hoeffding\ (one\text{-}sided):\quad U = \hat{p} + \sqrt{\frac{\ln(1/\alpha)}{2n}}`}
                </MathJax>
                <MathJax dynamic>
                  {String.raw`
                    Wilson\ (one\text{-}sided):\quad
                    U = \frac{\hat{p} + \frac{z^2}{2n} + z\sqrt{\frac{\hat{p}(1-\hat{p})}{n} + \frac{z^2}{4n^2}}}
                              {1 + \frac{z^2}{n}}\ \ \ \text{where } z = \Phi^{-1}(1-\alpha)
                  `}
                </MathJax>
                <MathJax dynamic>
                  {String.raw`
                    UCB\ (bandit\ style):\quad
                    \text{Score} = \hat{p} + c\sqrt{\frac{\ln t}{n}}
                  `}
                </MathJax>
              </div>
            </div>
          </section>

          {/* ===== CONTROLS ===== */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2) Try it</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <label className="flex flex-col">
                <span className="text-sm mb-1">Clicks</span>
                <input
                  type="number"
                  className="border rounded p-2"
                  value={c}
                  onChange={e => setClicks(Number(e.target.value))}
                  min={0}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm mb-1">Impressions</span>
                <input
                  type="number"
                  className="border rounded p-2"
                  value={n}
                  onChange={e => setImpressions(Number(e.target.value))}
                  min={0}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm mb-1">Target CTR (%)</span>
                <input
                  type="number"
                  className="border rounded p-2"
                  value={targetPct}
                  onChange={e => setTargetPct(Number(e.target.value))}
                  step={0.1}
                  min={0}
                  max={100}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm mb-1">Alpha (%) — one-sided</span>
                <input
                  type="number"
                  className="border rounded p-2"
                  value={alphaPct}
                  onChange={e => setAlphaPct(Number(e.target.value))}
                  step={0.1}
                  min={0.01}
                  max={50}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm mb-1">UCB total impressions (t)</span>
                <input
                  type="number"
                  className="border rounded p-2"
                  value={totalImpr}
                  onChange={e => setTotalImpr(Number(e.target.value))}
                  min={1}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm mb-1">UCB exploration c</span>
                <input
                  type="number"
                  className="border rounded p-2"
                  value={ucbC}
                  onChange={e => setUcbC(Number(e.target.value))}
                  step={0.1}
                  min={0}
                  max={5}
                />
              </label>
            </div>
          </section>

          {/* ===== RESULTS ===== */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3) Results</h2>
            <div className="mb-4 text-sm text-muted-foreground">
              Current sample CTR: <strong>{pct(phat)}</strong> ({c} / {n})
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="border px-3 py-2 text-left">Method</th>
                    <th className="border px-3 py-2 text-left">Upper Bound / Score</th>
                    <th className="border px-3 py-2 text-left">Decision (vs Target)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">Hoeffding (one-sided)</td>
                    <td className="border px-3 py-2">{pct(uHoeff)}</td>
                    <td className="border px-3 py-2">
                      {decision(uHoeff)} (target {pct(T)})
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">Wilson (one-sided)</td>
                    <td className="border px-3 py-2">{pct(uWilson)}</td>
                    <td className="border px-3 py-2">
                      {decision(uWilson)} (target {pct(T)})
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">UCB (bandit score)</td>
                    <td className="border px-3 py-2">{pct(uUCB)}</td>
                    <td className="border px-3 py-2">
                      {decision(uUCB)} (target {pct(T)})
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ===== PROS & CONS ===== */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">4) Pros & Cons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border rounded">
                <h3 className="font-bold mb-2">Hoeffding</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Distribution-free, very simple</li>
                  <li>Conservative (avoids false removals)</li>
                  <li>May delay removing clearly weak keywords when n is small</li>
                </ul>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-bold mb-2">Wilson</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Well-calibrated for binomial CTR</li>
                  <li>Behaves well at small samples</li>
                  <li>Slightly more complex formula</li>
                </ul>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-bold mb-2">UCB</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Great for explore-vs-exploit while learning</li>
                  <li>Rewards under-tested keywords</li>
                  <li>Not a pure “is it below target?” CI—needs total activity $t$ and a chosen $c$</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
}
