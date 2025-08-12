"use client";

import { useMemo, useState } from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";

// MathJax (page-scoped)
const mjConfig = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
  },
};

// ---------- helpers ----------
const clamp = (x: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, x));
const pct = (x: number) => (isFinite(x) ? (100 * x).toFixed(2) + "%" : "—");

// One-sided Hoeffding upper bound for Bernoulli mean
function upperHoeffding(clicks: number, impressions: number, alpha: number) {
  if (impressions <= 0) return 1;
  const phat = clicks / impressions;
  const eps = Math.sqrt(Math.log(1 / alpha) / (2 * impressions));
  return phat + eps;
}

// Robust inverse normal CDF via inverse error function (Winitzki approx)
function inverseNormalCdf(p: number) {
  const pp = Math.max(1e-12, Math.min(1 - 1e-12, p));
  function erfinv(x: number) {
    const a = 0.147;
    const s = Math.sign(x);
    const ln = Math.log(1 - x * x);
    const t1 = 2 / (Math.PI * a) + ln / 2;
    const inside = t1 * t1 - ln / a;
    return s * Math.sqrt(Math.sqrt(inside) - t1);
  }
  // Φ^{-1}(p) = √2 * erf^{-1}(2p - 1)
  return Math.SQRT2 * erfinv(2 * pp - 1);
}

// One-sided Wilson upper bound
function upperWilson(clicks: number, impressions: number, alpha: number) {
  if (impressions <= 0) return 1;
  const phat = clicks / impressions;
  const z = inverseNormalCdf(1 - alpha);
  const z2 = z * z;
  const denom = 1 + z2 / impressions;
  const center = phat + z2 / (2 * impressions);
  const rad = z * Math.sqrt((phat * (1 - phat)) / impressions + z2 / (4 * impressions * impressions));
  return (center + rad) / denom;
}

// UCB-style bonus
function ucbBonus(n_k: number, t: number, c: number) {
  const n = Math.max(1, n_k);
  const tt = Math.max(n + 1, t);
  return c * Math.sqrt(Math.log(tt) / n);
}

// ---------- component ----------
export default function CtrConfidenceClient() {
  // minimal state
  const [clicks, setClicks] = useState(30);
  const [impressions, setImpressions] = useState(100);
  const [targetPct, setTargetPct] = useState(5);
  const [alphaPct, setAlphaPct] = useState(5);       // one-sided %
  const [totalImpr, setTotalImpr] = useState(10000); // for UCB
  const [ucbC, setUcbC] = useState(2);

  const n = Math.max(0, Math.floor(impressions));
  const c = clamp(Math.max(0, Math.floor(clicks)), 0, n);
  const alpha = clamp(alphaPct / 100, 1e-6, 0.5);
  const T = clamp(targetPct / 100, 0, 1);
  const phat = n > 0 ? c / n : 0;

  const z = useMemo(() => inverseNormalCdf(1 - alpha), [alpha]);
  const uHoeff = useMemo(() => upperHoeffding(c, n, alpha), [c, n, alpha]);
  const uWilson = useMemo(() => upperWilson(c, n, alpha), [c, n, alpha]);
  const uUCB = useMemo(() => (n > 0 ? phat + ucbBonus(n, Math.max(totalImpr, n + 1), ucbC) : 1), [phat, n, totalImpr, ucbC]);

  // --- sample-size estimates so the upper bound drops below the target ---
  const nNeededWilson = useMemo(() => {
    if (phat >= T) return Infinity;                 // not a remove candidate
    const delta = Math.max(1e-9, T - phat);         // T - p̂
    const pvar  = Math.max(1e-12, phat * (1 - phat));
    return Math.ceil((z * z * pvar) / (delta * delta));
  }, [phat, T, z]);

  const nNeededHoeff = useMemo(() => {
    if (phat >= T) return Infinity;
    const delta = Math.max(1e-9, T - phat);
    return Math.ceil(Math.log(1 / alpha) / (2 * delta * delta));
  }, [phat, T, alpha]);

  const decision = (upper: number) => (upper < T ? "Remove" : "Keep");

  return (
    <MathJaxContext version={3} config={mjConfig}>
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">CTR Bounds & Confidence Intervals (Interactive)</h1>
            <p className="text-muted-foreground">
              Decide if a low-CTR keyword is truly weak or just unlucky. If the <em>upper bound</em> is still below your target CTR, remove it; otherwise, give it more time.
            </p>
          </div>

          {/* Quick “how to read this” */}
          <div className="bg-muted/30 border rounded p-4 mb-8">
            <h3 className="font-semibold mb-2">How to read the table</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>Alpha (one-sided)</strong> = tolerated false-alarm risk on the <em>high</em> side. Using an upper bound at
                level <code>α</code> means: <em>“with probability ≤ α, we might say ‘remove’ even though the true CTR meets the target.”</em>
                Typical choices: <code>α=10%</code> (z≈1.28), <code>5%</code> (z≈1.64), <code>2.5%</code> (z≈1.96). Lower <code>α</code> ⇒ higher bound ⇒ harder to remove.
              </li>
              <li>
                <strong>Upper bound (Hoeffding/Wilson)</strong> = (1−α) upper confidence limit on the true CTR — think “best-case plausible CTR today.”
                <em> Decision:</em> if this is <u>below</u> your target, it’s statistically reasonable to remove (one-sided test at level <code>α</code>).
              </li>
              <li>
                <strong>Hoeffding vs Wilson</strong>: Hoeffding is assumption-light (safer, wider; good for tiny samples/extreme CTRs).
                Wilson uses a normal approximation — tighter once <code>n ≳ 30</code>.
              </li>
              <li>
                <strong>UCB score</strong> is <em>not</em> a confidence interval. It’s a bandit score (estimate + exploration bonus) for choosing what to explore next,
                not for the remove/keep call.
              </li>
            </ul>

            <div className="mt-3 text-xs text-muted-foreground/90 bg-background/60 border rounded p-3">
              <strong>Example:</strong> Target = <code>5%</code>, sample = <code>10 clicks / 300 impressions</code> → <code>p̂ = 3.33%</code>.<br />
              • If upper bound = <code>3.8%</code> &lt; <code>5%</code> ⇒ <strong>Remove</strong> (risk of mistaken removal ≤ α).<br />
              • If upper bound = <code>8.2%</code> ≥ <code>5%</code> ⇒ <strong>Keep</strong> and collect more data.<br />
              <em>Tips:</em> Increasing impressions (<code>n</code>) shrinks the bound; decreasing <code>α</code> raises it (more cautious).
            </div>
          </div>

          {/* Formulas */}
          <div className="bg-muted/40 p-4 rounded mb-8">
            <MathJax dynamic>{String.raw`\[ U_{\text{Hoeff}} = \hat{p} + \sqrt{\frac{\ln(1/\alpha)}{2n}} \]`}</MathJax>
            <MathJax dynamic>{String.raw`
              \[
                U_{\text{Wilson}} =
                \frac{\hat{p} + \frac{z^2}{2n} + z\sqrt{\frac{\hat{p}(1-\hat{p})}{n} + \frac{z^2}{4n^2}}}
                     {1 + \frac{z^2}{n}},\quad z=\Phi^{-1}(1-\alpha)
              \]
            `}</MathJax>
            <MathJax dynamic>{String.raw`\[ \text{UCB score} = \hat{p} + c\sqrt{\frac{\ln t}{n}} \]`}</MathJax>
          </div>

          {/* Controls */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <label className="flex flex-col">
              <span className="text-sm mb-1">Clicks</span>
              <input type="number" className="border rounded p-2" value={c} onChange={e => setClicks(Number(e.target.value))} min={0} />
              <small className="text-xs text-muted-foreground mt-1">How many “heads.”</small>
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1">Impressions</span>
              <input type="number" className="border rounded p-2" value={n} onChange={e => setImpressions(Number(e.target.value))} min={0} />
              <small className="text-xs text-muted-foreground mt-1">How many “flips.”</small>
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1">Target CTR (%)</span>
              <input type="number" className="border rounded p-2" value={targetPct} onChange={e => setTargetPct(Number(e.target.value))} step={0.1} min={0} max={100} />
              <small className="text-xs text-muted-foreground mt-1">E.g., 5% for Ad Grants.</small>
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1">Alpha (%) — one-sided</span>
              <input type="number" className="border rounded p-2" value={alphaPct} onChange={e => setAlphaPct(Number(e.target.value))} step={0.1} min={0.01} max={50} />
              <small className="text-xs text-muted-foreground mt-1">
                Lower α ⇒ stricter bound. {`z ≈ ${z.toFixed(2)}`} at your α.
              </small>
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1">UCB total impressions (t)</span>
              <input type="number" className="border rounded p-2" value={totalImpr} onChange={e => setTotalImpr(Number(e.target.value))} min={1} />
              <small className="text-xs text-muted-foreground mt-1">Use total account impressions.</small>
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1">UCB exploration c</span>
              <input type="number" className="border rounded p-2" value={ucbC} onChange={e => setUcbC(Number(e.target.value))} step={0.1} min={0} max={5} />
              <small className="text-xs text-muted-foreground mt-1">Higher c ⇒ more exploration.</small>
            </label>
          </div>

          {/* Results */}
          <div className="mb-3 text-sm text-muted-foreground">
            Current sample CTR: <strong>{pct(phat)}</strong> ({c} / {n})
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="border px-3 py-2 text-left">Method</th>
                  <th className="border px-3 py-2 text-left">Upper (1−α) bound on true CTR / UCB score</th>
                  <th className="border px-3 py-2 text-left">Decision (vs Target)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">Hoeffding (one-sided)</td>
                  <td className="border px-3 py-2">{pct(uHoeff)}</td>
                  <td className="border px-3 py-2">{decision(uHoeff)} (target {pct(T)})</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Wilson (one-sided)</td>
                  <td className="border px-3 py-2">{pct(uWilson)}</td>
                  <td className="border px-3 py-2">{decision(uWilson)} (target {pct(T)})</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">UCB (bandit score)</td>
                  <td className="border px-3 py-2">{pct(uUCB)}</td>
                  <td className="border px-3 py-2">{decision(uUCB)} (target {pct(T)})</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Theory cheatsheet */}
          <div className="mt-8 bg-muted/20 border rounded p-4">
            <h3 className="font-semibold mb-2">What each method assumes</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium mb-1">Hoeffding</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>No distribution assumptions (very safe)</li>
                  <li>Wider bounds (conservative)</li>
                  <li>Great for tiny sample sizes</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Wilson</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Normal approximation to binomial</li>
                  <li>Tighter bounds than Hoeffding</li>
                  <li>Good once n ≳ 30</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">UCB (bandit)</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Not a CI; adds exploration bonus</li>
                  <li>Keeps low-data keywords alive longer</li>
                  <li>Useful when testing many keywords</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ad Grants notes, equations & practical thresholds */}
          <div className="mt-6 bg-muted/20 border rounded p-4">
            <h3 className="font-semibold mb-2">For Google Ad Grants (non-profits): target CTR = 5%</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Google Ad Grants requires an <em>account-wide</em> CTR of at least <strong>5%</strong>.
              A practical, fair rule is: <em>remove a keyword only when the one-sided (1−α) upper confidence bound is below 5%</em>.
              The formulas below give quick estimates for how many impressions you need before removing is statistically reasonable.
            </p>

            {/* Equations + quick calculators */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-background/60 border rounded p-3">
<MathJax dynamic>{String.raw`
  \[
    \textbf{Wilson (one-sided)}:\quad
    n \approx \frac{z^2\,\hat p(1-\hat p)}{\big(T-\hat p\big)^2}
  \]
`}</MathJax>

                <MathJax dynamic>{String.raw`
                  \[
                    \textbf{Hoeffding}:\quad
                    n \approx \frac{\ln(1/\alpha)}{2\,\big(T-\hat p\big)^2}
                  \]
                `}</MathJax>

                <div className="text-xs text-muted-foreground mt-2">
                  With your inputs: p̂ = <strong>{(100*phat).toFixed(2)}%</strong>,
                  α = <strong>{(100*alpha).toFixed(2)}%</strong>, target = <strong>{(100*T).toFixed(2)}%</strong>.<br/>
                  Wilson suggests about <strong>{isFinite(nNeededWilson) ? nNeededWilson : "—"}</strong> impressions;
                  Hoeffding suggests about <strong>{isFinite(nNeededHoeff) ? nNeededHoeff : "—"}</strong>. You currently have <strong>{n}</strong>.
                </div>
              </div>

              {/* Practical threshold table */}
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="border px-3 py-2 text-left">Observed CTR (p̂)</th>
                      <th className="border px-3 py-2 text-left">Impressions needed so Wilson upper &lt; 5% (α=5%)</th>
                      <th className="border px-3 py-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-2">0%</td>
                      <td className="border px-3 py-2">≈ <strong>52</strong></td>
                      <td className="border px-3 py-2">With 0 clicks, you don’t need many impressions to be confident it’s &lt;5%.</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">1%</td>
                      <td className="border px-3 py-2">≈ <strong>81</strong></td>
                      <td className="border px-3 py-2">Still well below 5%; confidence comes quickly.</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">2%</td>
                      <td className="border px-3 py-2">≈ <strong>143</strong></td>
                      <td className="border px-3 py-2">Needs a bit more data but still modest.</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">3%</td>
                      <td className="border px-3 py-2">≈ <strong>322</strong></td>
                      <td className="border px-3 py-2">Needs around “~300" for comfort.</td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">4%</td>
                      <td className="border px-3 py-2">≈ <strong>1,286</strong></td>
                      <td className="border px-3 py-2">Close to target → needs lots of impressions to be sure.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-xs text-muted-foreground">
              <p className="mb-1">
                <strong>Why these numbers?</strong> The table uses the Wilson one-sided upper bound with <code>α=5%</code> (z≈1.64),
                solving approximately for the smallest <code>n</code> where the upper bound drops below 5%.
              </p>
              <p className="mb-1">
                <strong>Hoeffding is more conservative</strong>. For the same p̂, it typically requires far more impressions
                (because it doesn’t use p̂ in its width).
              </p>
              <p>
                <strong>Tuning:</strong> Lowering <code>α</code> (e.g., 5% → 2.5%) makes removal harder; raising it makes removal easier.
                Always consider account-level CTR, not just keyword-level.
              </p>
            </div>
          </div>

        </div>
      </div>
    </MathJaxContext>
  );
}
