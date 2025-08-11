import type { Metadata } from "next"
import OptionRoiCalculator from "@/components/calculators/OptionRoiCalculator"

export const metadata: Metadata = {
  title: "Option ROI Calculator - Humanitarians AI",
  description: "Find the best strike price for your target price prediction with our Options ROI Calculator.",
}

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
            Our Option ROI Calculator helps investors compare different option strike prices to find the best potential return on investment for a specific price target. Simply enter your option chain data, specify your target price, and instantly see which options offer the most efficient exposure.
          </p>
          <p>
            This tool is especially useful for:
          </p>
          <ul>
            <li>Comparing multiple strike prices across an option chain</li>
            <li>Finding the most capital-efficient way to express a directional view</li>
            <li>Identifying options with the best risk/reward profile for your price target</li>
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
                ROI (Return on Investment) in options trading represents the percentage gain or loss on your initial investment. It's calculated by dividing the profit (or loss) by the initial cost of the option, then multiplying by 100 to get a percentage.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">How does the calculator determine the best option?</h3>
              <p className="text-muted-foreground">
                The calculator ranks options by their potential ROI based on your target price. The highest ROI option (highlighted in green) represents the most efficient use of capital if the underlying asset reaches your target price before expiration.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">Does this calculator consider the Greeks or implied volatility?</h3>
              <p className="text-muted-foreground">
                No, this calculator performs a simple intrinsic value calculation based on your target price. It doesn't account for time value, implied volatility, or other factors that affect option pricing. It's designed for quick comparisons rather than detailed option pricing.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">Where can I find option chain data to use with this calculator?</h3>
              <p className="text-muted-foreground">
                Option chain data can be obtained from most brokerage platforms (like Robinhood, E*TRADE, TD Ameritrade) or financial websites (like Yahoo Finance). Copy the data in the format shown in the Help tab of the calculator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}