// app/option-calculator/page.tsx
import OptionRoiCalculator from "@/components/calculators/OptionRoiCalculator";

export const metadata = {
  title: "Option ROI Calculator - Humanitarians AI",
  description: "Find the best strike price for your target price prediction with our Options ROI Calculator.",
};

export default function OptionCalculatorPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Option ROI Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Find the best strike price for your target price prediction
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert mb-12 max-w-3xl mx-auto">
          <p>
            This calculator helps investors find the most efficient options for a specific price target. Just paste your option chain data, enter your target price, and see which options offer the best ROI.
          </p>
          <p>
            Ideal for:
          </p>
          <ul>
            <li>Comparing multiple strike prices</li>
            <li>Finding capital-efficient trading opportunities</li>
            <li>Identifying the best risk/reward options</li>
          </ul>
        </div>

        {/* Calculator Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Calculator</h2>
          <OptionRoiCalculator />
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">What does ROI mean in options trading?</h3>
              <p className="text-muted-foreground">
                ROI (Return on Investment) represents the percentage gain or loss on your initial investment. It's calculated by dividing the profit by the option cost, then multiplying by 100.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">How does the calculator determine the best option?</h3>
              <p className="text-muted-foreground">
                The calculator ranks options by their potential ROI based on your target price. The highest ROI option (highlighted in green) represents the most efficient use of capital.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">Does this calculator consider the Greeks?</h3>
              <p className="text-muted-foreground">
                No, this calculator performs a simple intrinsic value calculation based on your target price. It doesn't account for time value, implied volatility, or other factors.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">Where can I find option chain data?</h3>
              <p className="text-muted-foreground">
                Option chain data can be obtained from brokerage platforms like Robinhood, E*TRADE, or TD Ameritrade. Copy the data in the format shown in the Help tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
