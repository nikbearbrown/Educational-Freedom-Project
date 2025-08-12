import type { Metadata } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";

const MathJax = dynamic(() => import("better-react-mathjax").then(m => m.MathJax), { ssr: false });

export const metadata: Metadata = {
  title: "Keyword CTR Bounds & Confidence Intervals",
  description: "Interactive explanation and tool for deciding when to remove low-performing keywords.",
};

export default function KeywordBoundsPage() {
  const [clicks, setClicks] = useState(30);
  const [impressions, setImpressions] = useState(900);
  const [target, setTarget] = useState(0.05);
  const alpha = 0.05;

  const phat = clicks / impressions;
  const upperHoeffding = phat + Math.sqrt(Math.log(1 / alpha) / (2 * impressions));
  const z = 1.6448536269514722; // ~ one-sided 95%
  const z2 = z * z;
  const denom = 1 + z2 / impressions;
  const center = phat + z2 / (2 * impressions);
  const rad = z * Math.sqrt((phat * (1 - phat)) / impressions + z2 / (4 * impressions * impressions));
  const upperWilson = (center + rad) / denom;
  const ucb = phat + Math.sqrt((2 * Math.log(impressions)) / impressions);

  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO SECTION ===== */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bounds & Confidence Intervals for Keyword Removal</h1>
          <p className="text-xl text-muted-foreground mb-8">
            How do you know when a keyword is truly underperforming — and not just unlucky? 
            We can use probability math to avoid cutting good keywords too early.
          </p>
        </div>

        {/* ===== EXPLANATION ===== */}
        <section>
          <h2 className="text-3xl font-bold mb-6">1. Explaining the Idea (High School Level)</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Imagine flipping a coin. If you flip only 3 times and get 0 heads, you wouldn’t immediately assume it’s a “bad” coin — maybe you just got unlucky.
              The same is true for keywords: with few impressions, a low click rate might just be randomness.
            </p>
            <p>
              A <strong>confidence interval</strong> gives a range where we believe the true CTR (click-through rate) probably is. 
              If even the top of that range is below your target CTR, it’s safe to say the keyword is weak.
            </p>
            <MathJax>{"\\( \\text{Hoeffding: } U = \\hat{p} + \\sqrt{\\frac{\\ln(1/\\alpha)}{2n}} \\)"}</MathJax>
            <MathJax>{"\\( \\text{Wilson: } U = \\frac{\\hat{p} + z^2/(2n) + z\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n} + z^2/(4n^2)}}{1 + z^2/n} \\)"}</MathJax>
          </div>
        </section>

        {/* ===== INTERACTIVE TOOL ===== */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">2. Try It Yourself</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <input
              type="number"
              value={clicks}
              onChange={e => setClicks(Number(e.target.value))}
              className="border p-2 rounded"
              placeholder="Clicks"
            />
            <input
              type="number"
              value={impressions}
              onChange={e => setImpressions(Number(e.target.value))}
              className="border p-2 rounded"
              placeholder="Impressions"
            />
            <input
              type="number"
              step="0.01"
              value={target}
              onChange={e => setTarget(Number(e.target.value))}
              className="border p-2 rounded"
              placeholder="Target CTR"
            />
          </div>

          <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Method</th>
                <th className="border border-gray-400 px-4 py-2">Upper Bound CTR</th>
                <th className="border border-gray-400 px-4 py-2">Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Hoeffding</td>
                <td className="border px-4 py-2">{upperHoeffding.toFixed(4)}</td>
                <td className="border px-4 py-2">{upperHoeffding < target ? "Remove" : "Keep"}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Wilson</td>
                <td className="border px-4 py-2">{upperWilson.toFixed(4)}</td>
                <td className="border px-4 py-2">{upperWilson < target ? "Remove" : "Keep"}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">UCB (Bandit)</td>
                <td className="border px-4 py-2">{ucb.toFixed(4)}</td>
                <td className="border px-4 py-2">{ucb < target ? "Remove" : "Keep"}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ===== PROS & CONS ===== */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">3. Pros & Cons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h3 className="font-bold">Hoeffding</h3>
              <ul>
                <li>✅ Simple and distribution-free</li>
                <li>✅ Conservative (low false removals)</li>
                <li>❌ Can be too slow to remove bad keywords</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-bold">Wilson</h3>
              <ul>
                <li>✅ Well-calibrated for binomial CTR data</li>
                <li>✅ Works well for small sample sizes</li>
                <li>❌ Slightly more complex math</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-bold">UCB</h3>
              <ul>
                <li>✅ Great for ongoing exploration & exploitation</li>
                <li>✅ Adapts as more data arrives</li>
                <li>❌ Not purely about “removal” — focuses on trying under-tested keywords</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
