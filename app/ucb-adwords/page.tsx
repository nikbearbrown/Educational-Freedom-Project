import type { Metadata } from "next";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";

export const metadata: Metadata = {
  title: "The Application of Optimistic Bandit Algorithms (UCB) to Google Ads Keyword Removal",
  description: "A data-driven approach to keyword management and Quality Score optimization for Google Ads",
};

export default function UCBPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO SECTION ===== */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Application of Optimistic Bandit Algorithms (UCB) to Google Ads Keyword Removal
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A data-driven approach to keyword management and Quality Score optimization, particularly valuable for
            nonprofits using Google Ad Grants where maintaining a 5% account-wide CTR is necessary for compliance.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?si=caS7A9UMCFewuuRB&amp;list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid gap-12">
          {/* ===== INTRODUCTION SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Digital marketers and PPC specialists face a perpetual challenge in Google Ads management: determining
                which keywords to keep and which to remove. This decision is particularly critical for nonprofits
                operating under Google Ad Grants, where maintaining a 5% account-wide CTR is necessary for compliance.
              </p>

              <p>
                Traditional approaches often rely on arbitrary thresholds or gut feelings: "Remove keywords with less
                than 2% CTR after 100 impressions" or "Give new keywords two weeks to prove themselves." While simple,
                these methods ignore the statistical uncertainty inherent in small sample sizes.
              </p>

              <p>
                This article introduces a more sophisticated approach by applying the Upper Confidence Bound (UCB)
                algorithm—a cornerstone of multi-armed bandit problems in reinforcement learning—to keyword management
                in Google Ads.
              </p>
            </div>
          </section>

          {/* ===== UCB ALGORITHM SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Understanding the Upper Confidence Bound (UCB) Algorithm</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The UCB algorithm addresses the classic exploration-exploitation dilemma: do we exploit keywords we know
                perform well, or explore new keywords that might perform even better?
              </p>

              <p>
                At its core, the UCB algorithm is based on "optimism in the face of uncertainty." It constructs a
                confidence interval around each observed value and uses the upper bound of this interval for
                decision-making.
              </p>

              <p>The standard UCB formula is:</p>

              <div className="bg-muted/50 p-4 rounded-lg text-center my-6">
                <p className="font-mono">A_t = argmax_a [ Q_t(a) + c√(ln t / N_t(a)) ]</p>
              </div>

              <p>Where:</p>
              <ul>
                <li>A_t is the action selected at time t</li>
                <li>Q_t(a) is the estimated value of action a</li>
                <li>N_t(a) is the number of times action a has been selected</li>
                <li>c is a parameter controlling the width of the confidence interval</li>
                <li>√(ln t / N_t(a)) represents the uncertainty in our estimate</li>
              </ul>

              <p>
                The beauty of this approach is that it naturally balances exploration and exploitation. Actions with
                fewer observations have wider confidence intervals, giving them a chance to prove themselves. As more
                data accumulates, the confidence interval shrinks, and decisions become increasingly driven by observed
                performance.
              </p>
            </div>
          </section>

          {/* ===== APPLYING UCB SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Applying UCB to Google Ads Keyword Management</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>We can adapt the UCB algorithm for keyword management in Google Ads by treating:</p>
              <ul>
                <li>Each keyword as an "action"</li>
                <li>Click-through rate (CTR) as the "reward"</li>
                <li>Impressions as "trials"</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">The UCB Keyword Removal Formula</h3>

              <p>
                Instead of using UCB to select keywords (as in the traditional bandit problem), we'll use it to
                identify keywords that can be confidently removed. Specifically, we'll remove a keyword when:
              </p>

              <div className="bg-muted/50 p-4 rounded-lg text-center my-6">
                <p className="font-mono">
                  Observed CTR + c√(ln(total impressions)/keyword impressions) &lt; Target CTR
                </p>
              </div>

              <p>For Google Ad Grants, where maintaining a 5% account-wide CTR is critical, our formula becomes:</p>

              <div className="bg-muted/50 p-4 rounded-lg text-center my-6">
                <p className="font-mono">Observed CTR + c√(ln(total impressions)/keyword impressions) &lt; 5%</p>
              </div>

              <p>
                This approach ensures we only remove keywords when we can be statistically confident they won't meet our
                performance targets, even when giving them the benefit of the doubt.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Choosing the Right Confidence Parameter</h3>

              <p>The parameter c controls the width of our confidence interval:</p>
              <ul>
                <li>
                  Higher values of c (e.g., 2 or 3) create wider intervals, giving keywords more opportunity to prove
                  themselves
                </li>
                <li>
                  Lower values of c (e.g., 1) create narrower intervals, removing underperforming keywords more
                  aggressively
                </li>
              </ul>

              <p>For approximately 95% confidence (a standard in statistical testing), c ≈ 2 is a reasonable choice.</p>
            </div>
          </section>

          {/* ===== IMPLEMENTATION SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Practical Implementation: A Step-by-Step Guide</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Let's walk through implementing this approach in your Google Ads account:</p>

              <h3 className="text-xl font-bold mt-6 mb-4">1. Data Collection</h3>

              <p>First, export your keyword performance data from Google Ads, including:</p>
              <ul>
                <li>Keyword text</li>
                <li>Impressions</li>
                <li>Clicks</li>
                <li>CTR</li>
                <li>Quality Score (for additional analysis)</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-4">2. Calculate the Confidence Intervals</h3>

              <p>For each keyword, calculate the upper bound CTR using the UCB formula:</p>

              <div className="bg-muted/50 p-4 rounded-lg text-center my-6">
                <p className="font-mono">Upper Bound CTR = Observed CTR + c√(ln(total impressions)/keyword impressions)</p>
              </div>

              <p>In Excel or Google Sheets, this could be implemented as:</p>

              <div className="bg-muted p-4 rounded-lg my-4">
                <code>=CTR + 2*SQRT(LN(total_impressions)/keyword_impressions)</code>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4">3. Identify Keywords for Removal</h3>

              <p>Flag all keywords where the Upper Bound CTR falls below your target threshold (5% for Google Ad Grants):</p>

              <div className="bg-muted p-4 rounded-lg my-4">
                <code>=IF(Upper_Bound_CTR &lt; 0.05, "Remove", "Keep")</code>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4">4. Implement and Monitor</h3>

              <p>Create a schedule for regularly applying this analysis:</p>
              <ol>
                <li>Remove the flagged keywords</li>
                <li>Implement new keywords to test</li>
                <li>Monitor account-wide CTR to ensure compliance</li>
                <li>Re-run the analysis as new data accumulates</li>
              </ol>
            </div>
          </section>

          {/* ===== CASE STUDY 1 SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Case Study 1: UCB for Multiple Keywords</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                To illustrate the effectiveness of this approach, consider the following example from a nonprofit using
                Google Ad Grants:
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Keyword A</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>Observed CTR: 2.5%</li>
                    <li>Impressions: 50</li>
                    <li>Total account impressions: 10,000</li>
                    <li>Upper Bound CTR (c=2): 2.5% + 2×√(ln(10,000)/50) = 2.5% + 2×0.43 = 3.36%</li>
                    <li className="font-bold">Decision: Remove (3.36% &lt; 5%)</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Keyword B</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>Observed CTR: 3.8%</li>
                    <li>Impressions: 20</li>
                    <li>Total account impressions: 10,000</li>
                    <li>Upper Bound CTR (c=2): 3.8% + 2×√(ln(10,000)/20) = 3.8% + 2×0.68 = 5.16%</li>
                    <li className="font-bold">Decision: Keep (5.16% &gt; 5%)</li>
                  </ul>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Keyword C</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>Observed CTR: 4.0%</li>
                    <li>Impressions: 500</li>
                    <li>Total account impressions: 10,000</li>
                    <li>Upper Bound CTR (c=2): 4.0% + 2×√(ln(10,000)/500) = 4.0% + 2×0.14 = 4.28%</li>
                    <li className="font-bold">Decision: Remove (4.28% &lt; 5%)</li>
                  </ul>
                </div>
              </div>

              <p>
                Notice how Keyword B, despite having a lower observed CTR than Keyword C, is kept due to its limited
                data. This illustrates the algorithm's ability to balance exploration and exploitation, giving promising
                but data-limited keywords a chance to prove themselves.
              </p>
            </div>
          </section>

          {/* ===== CASE STUDY 2 SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Case Study 2: Keyword Evolution Over Time</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                This second case study follows a single keyword over time, showing how the UCB approach allows a keyword
                to prove itself as more data is collected.
              </p>

              <div className="flex flex-col md:flex-row mt-8 mb-6 gap-8">
                <div className="flex-1 border-t-4 border-primary pt-2">
                  <h3 className="text-xl font-bold mb-4">Day 1: Initial Assessment</h3>
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <ul className="text-muted-foreground space-y-2">
                      <li>Observed CTR: 3.0%</li>
                      <li>Impressions: 30</li>
                      <li>Total account impressions: 5,000</li>
                      <li>Upper Bound CTR (c=2): 3.0% + 2×√(ln(5,000)/30) = 3.0% + 2×0.63 = 4.26%</li>
                      <li className="font-bold">Decision: Keep temporarily (Below target but wide CI)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div className="flex-1 border-t-4 border-primary pt-2">
                  <h3 className="text-xl font-bold mb-4">Day 7: Progress Check</h3>
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <ul className="text-muted-foreground space-y-2">
                      <li>Observed CTR: 3.5%</li>
                      <li>Impressions: 120</li>
                      <li>Total account impressions: 8,000</li>
                      <li>Upper Bound CTR (c=2): 3.5% + 2×√(ln(8,000)/120) = 3.5% + 2×0.32 = 4.14%</li>
                      <li className="font-bold">Decision: Still below target, but improving with narrower CI</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div className="flex-1 border-t-4 border-green-500 pt-2">
                  <h3 className="text-xl font-bold mb-4">Day 14: Final Assessment</h3>
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <ul className="text-muted-foreground space-y-2">
                      <li>Observed CTR: 4.8%</li>
                      <li>Impressions: 300</li>
                      <li>Total account impressions: 12,000</li>
                      <li>Upper Bound CTR (c=2): 4.8% + 2×√(ln(12,000)/300) = 4.8% + 2×0.20 = 5.20%</li>
                      <li className="font-bold text-green-500">Decision: KEEP (5.20% &gt; 5%)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Key Insights from Keyword Evolution:</h3>
                <ul className="space-y-2">
                  <li>The keyword started with a CTR of just 3.0%, well below the 5% target</li>
                  <li>
                    Despite underperforming initially, the wide confidence interval (due to limited data) prevented
                    premature removal
                  </li>
                  <li>As more impressions accumulated, the confidence interval naturally narrowed</li>
                  <li>
                    The keyword's performance improved over time, eventually exceeding the 5% threshold when including
                    the confidence bound
                  </li>
                  <li>
                    Traditional methods using fixed thresholds would have removed this keyword early, missing out on its
                    eventual success
                  </li>
                </ul>
              </div>

              <p>
                This case study demonstrates how the UCB approach allows potentially valuable keywords to prove
                themselves over time, rather than being judged too harshly on initial performance with limited data. The
                confidence interval narrows naturally as more data is collected, creating a fair evaluation system that
                balances patience with performance standards.
              </p>
            </div>
          </section>

          {/* ===== CASE STUDY 3 SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Case Study 3: When Promising Keywords Fail to Deliver</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Not all keywords with initial promise will succeed. This third case study demonstrates how the UCB
                approach also effectively identifies keywords that should be removed despite early positive signals.
              </p>

              <div className="flex flex-col md:flex-row mt-8 mb-6 gap-8">
                <div className="flex-1 border-t-4 border-green-500 pt-2">
                  <h3 className="text-xl font-bold mb-4">Day 1: Initial Assessment</h3>
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <ul className="text-muted-foreground space-y-2">
                      <li>Observed CTR: 6.2%</li>
                      <li>Impressions: 32</li>
                      <li>Total account impressions: 5,000</li>
                      <li>Upper Bound CTR (c=2): 6.2% + 2×√(ln(5,000)/32) = 6.2% + 2×0.61 = 7.42%</li>
                      <li className="font-bold text-green-500">Decision: KEEP (7.42% &gt; 5%)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div className="flex-1 border-t-4 border-green-500 pt-2">
                  <h3 className="text-xl font-bold mb-4">Day 7: Progress Check</h3>
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <ul className="text-muted-foreground space-y-2">
                      <li>Observed CTR: 5.1%</li>
                      <li>Impressions: 140</li>
                      <li>Total account impressions: 8,000</li>
                      <li>Upper Bound CTR (c=2): 5.1% + 2×√(ln(8,000)/140) = 5.1% + 2×0.30 = 5.70%</li>
                      <li className="font-bold text-green-500">Decision: KEEP (5.70% &gt; 5%)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>

                <div className="flex-1 border-t-4 border-red-500 pt-2">
                  <h3 className="text-xl font-bold mb-4">Day 14: Final Assessment</h3>
                  <div className="p-6 bg-muted/50 rounded-lg">
                    <ul className="text-muted-foreground space-y-2">
                      <li>Observed CTR: 4.2%</li>
                      <li>Impressions: 380</li>
                      <li>Total account impressions: 12,000</li>
                      <li>Upper Bound CTR (c=2): 4.2% + 2×√(ln(12,000)/380) = 4.2% + 2×0.18 = 4.56%</li>
                      <li className="font-bold text-red-500">Decision: REMOVE (4.56% &lt; 5%)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Key Insights from Keyword Decline:</h3>
                <ul className="space-y-2">
                  <li>The keyword started strong with a 6.2% CTR, well above the 5% target</li>
                  <li>By day 7, performance had declined but was still above threshold when including the confidence bound</li>
                  <li>As more impressions accumulated, the confidence interval narrowed significantly</li>
                  <li>
                    The continuing performance decline coupled with the narrower confidence interval led to a final
                    decision to remove
                  </li>
                  <li>
                    This demonstrates how the UCB approach protects against maintaining keywords that show initial
                    promise but fail to maintain performance at scale
                  </li>
                </ul>
              </div>

              <p>
                This case study illustrates another key benefit of the UCB approach: it prevents overcommitment to
                keywords that show early promise but cannot sustain performance over time. As more data is collected and
                the confidence interval narrows, statistical evidence reveals the keyword's true performance level. A
                purely performance-based approach might have kept this keyword indefinitely based on its early success,
                while an approach using arbitrary thresholds might have removed it prematurely or kept it too long.
              </p>
            </div>
          </section>

          {/* ===== ADVANTAGES SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Advantages Over Traditional Methods</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Statistical Soundness</h3>
                <p className="text-muted-foreground">
                  Decisions are based on confidence intervals rather than arbitrary thresholds, providing a
                  mathematically rigorous approach to keyword management.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Sample Size Sensitivity</h3>
                <p className="text-muted-foreground">
                  Keywords with fewer impressions aren't unfairly penalized or prematurely removed, giving promising
                  keywords a chance to prove themselves.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Adaptive Thresholds</h3>
                <p className="text-muted-foreground">
                  As data accumulates, the algorithm naturally becomes more demanding, automatically adjusting
                  expectations based on the volume of data.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Alignment with Quality Score</h3>
                <p className="text-muted-foreground">
                  Google's Quality Score likely uses similar statistical approaches, making this method more aligned
                  with Google's internal algorithms.
                </p>
              </div>

              <div className="p-6 border rounded-lg md:col-span-2">
                <h3 className="text-xl font-bold mb-3">Optimization for Google Ad Grants</h3>
                <p className="text-muted-foreground">
                  By systematically removing keywords that statistically cannot meet the 5% CTR requirement, nonprofits
                  can maintain grant compliance while giving new keywords a fair chance.
                </p>
              </div>
            </div>
          </section>

          {/* ===== QUALITY SCORE SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Connection to Google's Quality Score</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                While Google doesn't disclose the exact algorithm behind Quality Score, it's widely believed to
                incorporate similar statistical techniques to handle uncertainty in CTR estimates.
              </p>

              <p>
                The "expected CTR" component of Quality Score must account for statistical variance, especially for
                keywords with limited data. By applying UCB principles to your keyword management, you're likely aligning
                your optimization efforts with Google's internal evaluation methods.
              </p>
            </div>
          </section>

          {/* ===== ADVANCED SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Advanced Considerations</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold mb-2">Dynamic Confidence Parameters</h3>
                <p className="text-sm text-muted-foreground">
                  Rather than using a fixed value of c for all keywords, consider varying it based on keyword
                  competitiveness, conversion value, and strategic importance.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="font-bold mb-2">Incorporating Other Metrics</h3>
                <p className="text-sm text-muted-foreground">
                  The UCB approach can be extended beyond CTR to incorporate conversion rates, cost per conversion, and
                  return on ad spend (ROAS).
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="font-bold mb-2">Automated Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  For large accounts, consider implementing this approach programmatically using the Google Ads API to
                  automate keyword management.
                </p>
              </div>
            </div>
          </section>

          {/* ===== ADDENDUM SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">
              Addendum: Why UCB Principles Are Appropriate for Keyword Management
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                While the Upper Confidence Bound (UCB) algorithm was originally designed for selecting the best action
                in multi-armed bandit problems, its application to keyword removal decisions in Google Ads represents a
                thoughtful adaptation of its core statistical principles.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">The Traditional UCB vs. Our Adaptation</h3>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-bold mb-4">Traditional UCB Application:</h4>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium">Goal:</span> Select the best action to maximize rewards
                    </li>
                    <li>
                      <span className="font-medium">Formula:</span> A_t = argmax_a [ Q_t(a) + c√(ln t / N_t(a)) ]
                    </li>
                    <li>
                      <span className="font-medium">Use case:</span> Deciding which arm to pull next in a multi-armed
                      bandit
                    </li>
                    <li>
                      <span className="font-medium">Optimization:</span> Maximizing cumulative reward
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-bold mb-4">Our Keyword Management Adaptation:</h4>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium">Goal:</span> Determine if keywords meet a minimum threshold
                    </li>
                    <li>
                      <span className="font-medium">Formula:</span>{" "}
                      <code>Remove if: CTR + c√(ln(total)/impressions) &lt; 5%</code>
                    </li>
                    <li>
                      <span className="font-medium">Use case:</span> Binary decision-making (keep or remove)
                    </li>
                    <li>
                      <span className="font-medium">Optimization:</span> Resource allocation within constraints
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Why This Adaptation Makes Sense</h3>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="p-6 border rounded-lg">
                  <h4 className="font-bold mb-3">Efficient Resource Allocation</h4>
                  <p className="text-muted-foreground">
                    By removing keywords that statistically cannot meet the threshold, we redirect impressions to
                    keywords that have a chance of meeting or exceeding the required 5% CTR, maximizing the
                    effectiveness of limited ad grant resources.
                  </p>
                </div>

                <div className="p-6 border rounded-lg">
                  <h4 className="font-bold mb-3">Statistical Rigor in Decision-Making</h4>
                  <p className="text-muted-foreground">
                    The confidence interval approach provides mathematical justification for keyword decisions, replacing
                    arbitrary thresholds with statistically sound methods that account for sample size variance.
                  </p>
                </div>

                <div className="p-6 border rounded-lg">
                  <h4 className="font-bold mb-3">Compliance with Grant Requirements</h4>
                  <p className="text-muted-foreground">
                    For Google Ad Grants recipients, maintaining the 5% account-wide CTR is not optional—it's required
                    for continued access to the $10,000 monthly grant, making threshold-based decisions essential.
                  </p>
                </div>
              </div>

              <p>
                While we've adapted the UCB formula for a different purpose than its original intent, the core
                statistical principle remains the same: using confidence intervals that appropriately account for sample
                size when making decisions under uncertainty.
              </p>

              <p>
                In traditional UCB, the confidence interval represents "optimism in the face of uncertainty" to
                encourage exploration of under-sampled actions. In our adaptation, we're using this same statistical
                framework to determine whether we can be confident that a keyword cannot meet our threshold, even when
                giving it the benefit of the doubt.
              </p>

              <p>This approach strikes an appropriate balance between:</p>

              <ul>
                <li>
                  Giving new or low-impression keywords a chance to prove themselves (avoiding false negatives)
                </li>
                <li>
                  Confidently removing keywords that statistically cannot meet requirements (avoiding false positives)
                </li>
                <li>Becoming increasingly strict as more data is collected (adaptive thresholds)</li>
              </ul>

              <p>
                By applying these principles from the UCB algorithm, we can make statistically sound keyword management
                decisions that optimize the performance of Google Ads accounts, particularly for nonprofits navigating
                the strict requirements of the Google Ad Grants program.
              </p>
            </div>
          </section>

          {/* ===== CONCLUSION SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                By applying the Upper Confidence Bound algorithm to Google Ads keyword management, marketers can make
                statistically sound decisions that balance exploration and exploitation. This approach is particularly
                valuable for Google Ad Grants recipients, where maintaining a 5% CTR is critical for compliance.
              </p>

              <p>
                The UCB method acknowledges the uncertainty inherent in digital advertising and uses that uncertainty to
                make optimistic but realistic decisions about keyword performance. By giving promising keywords enough
                opportunity to prove themselves while confidently removing statistically underperforming ones, marketers
                can achieve better results with less guesswork.
              </p>

              <p>
                In the increasingly data-driven world of digital marketing, adopting algorithms from reinforcement
                learning represents the next frontier in optimization. The UCB approach to keyword management is just
                one example of how sophisticated statistical methods can be applied to practical marketing challenges.
              </p>

              <div className="mt-8 text-sm text-muted-foreground">
                <p>
                  <em>
                    This article explores the theoretical application of UCB algorithms to Google Ads keyword
                    management. Results may vary based on industry, competition, and other factors. Always test new
                    approaches on a limited scale before full implementation.
                  </em>
                </p>
              </div>
            </div>
          </section>

          {/* ===== RESOURCES SECTION ===== */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Further Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="https://github.com/Humanitariansai">
                GitHub Repository
              </PrimaryButton>
              <SecondaryButton href="https://youtube.com/playlist?list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo&si=caS7A9UMCFewuuRB">
                YouTube Playlist
              </SecondaryButton>
              <SecondaryButton href="https://www.humanitarians.ai">Learn More</SecondaryButton>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Connect with Humanitarians AI</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a
                  href="https://music.apple.com/us/artist/humanitarians-ai/1781414009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Apple Music
                </a>
                <a
                  href="https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Spotify
                </a>
                <a
                  href="https://www.humanitarians.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Website
                </a>
                <a
                  href="https://www.youtube.com/@humanitariansai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  YouTube
                </a>
                <a
                  href="https://www.linkedin.com/company/105696953/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
