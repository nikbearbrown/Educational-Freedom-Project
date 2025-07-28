<div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Short Position Margin Percentage</h3>
                <p className="text-muted-foreground mb-3">Current equity percentage in short position</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Initial margin</li>
                      <li>Current price</li>
                      <li>Initial price</li>
                      <li>Number of shares</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Margin percentage</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Margin % = (Initial Margin - (Current Price - Initial Price) × Shares) / (Current Price × Shares)</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(InitialMargin-(CurrentPrice-InitialPrice)*Shares)/(CurrentPrice*Shares)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Initial margin of $15,000, initial price of $60, current price of $65, 500 shares</p>
                  <p>Margin % = ($15,000 - ($65 - $60) × 500) / ($65 × 500) = ($15,000 - $2,500) / $32,500 = $12,500 / $32,500 = 0.3846 or 38.46%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Short Sale Return</h3>
                <p className="text-muted-foreground mb-3">Return on short sale</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Initial price</li>
                      <li>Ending price</li>
                      <li>Number of shares</li>
                      <li>Initial margin</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Return percentage</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Return = ((Initial Price - Ending Price) × Shares) / Initial Margin</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =((InitialPrice-EndingPrice)*Shares)/InitialMargin</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Short sale of 500 shares, initial price of $60, ending price of $50, initial margin of $15,000</p>
                  <p>Return = (($60 - $50) × 500) / $15,000 = $5,000 / $15,000 = 0.3333 or 33.33%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Short Sale Margin Call Price</h3>
                <p className="text-muted-foreground mb-3">Price that triggers a short margin call</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Initial margin</li>
                      <li>Number of shares</li>
                      <li>Maintenance margin</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Price per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Solve for P: (Initial Margin - (P - Initial Price) × Shares) / (P × Shares) = Maintenance Margin</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> Complex formula, often easier to use solver</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Initial margin of $15,000, initial price of $60, 500 shares, maintenance margin of 30%</p>
                  <p>Using simplified formula for price increases: P = (Initial Margin + Initial Price × Shares) / [Shares × (1 + Maintenance Margin)]</p>
                  <p>P = ($15,000 + $60 × 500) / [500 × (1 + 0.30)] = ($15,000 + $30,000) / 650 = $45,000 / 650 = $69.23</p>
                </div>
              </div>
            </div>
          </section>

          {/* Options Section */}
          <section id="options">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Options</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Call Option Payoff</h3>
                <p className="text-muted-foreground mb-3">Payoff at expiration for call option</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Stock price at expiration</li>
                      <li>Strike price</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Payoff per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Payoff = Max(Stock Price - Strike Price, 0)</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =MAX(StockPrice-StrikePrice,0)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Call option with strike price of $50, stock price at expiration of $60</p>
                  <p>Payoff = Max($60 - $50, 0) = $10 per share</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Put Option Payoff</h3>
                <p className="text-muted-foreground mb-3">Payoff at expiration for put option</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Stock price at expiration</li>
                      <li>Strike price</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Payoff per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Payoff = Max(Strike Price - Stock Price, 0)</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =MAX(StrikePrice-StockPrice,0)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Put option with strike price of $50, stock price at expiration of $40</p>
                  <p>Payoff = Max($50 - $40, 0) = $10 per share</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Call Option Profit</h3>
                <p className="text-muted-foreground mb-3">Profit at expiration for call option buyer</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Stock price at expiration</li>
                      <li>Strike price</li>
                      <li>Premium paid</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Profit per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Profit = Max(Stock Price - Strike Price, 0) - Premium</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =MAX(StockPrice-StrikePrice,0)-Premium</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Call option with strike price of $50, premium of $3, stock price at expiration of $55</p>
                  <p>Profit = Max($55 - $50, 0) - $3 = $5 - $3 = $2 per share</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Put Option Profit</h3>
                <p className="text-muted-foreground mb-3">Profit at expiration for put option buyer</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Stock price at expiration</li>
                      <li>Strike price</li>
                      <li>Premium paid</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Profit per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Profit = Max(Strike Price - Stock Price, 0) - Premium</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =MAX(StrikePrice-StockPrice,0)-Premium</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Put option with strike price of $50, premium of $4, stock price at expiration of $45</p>
                  <p>Profit = Max($50 - $45, 0) - $4 = $5 - $4 = $1 per share</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Short Call Profit</h3>
                <p className="text-muted-foreground mb-3">Profit at expiration for call option seller</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Stock price at expiration</li>
                      <li>Strike price</li>
                      <li>Premium received</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Profit per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Profit = Premium - Max(Stock Price - Strike Price, 0)</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =Premium-MAX(StockPrice-StrikePrice,0)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Short call with strike price of $50, premium received of $3, stock price at expiration of $53</p>
                  <p>Profit = $3 - Max($53 - $50, 0) = $3 - $3 = $0 per share</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Short Put Profit</h3>
                <p className="text-muted-foreground mb-3">Profit at expiration for put option seller</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Stock price at expiration</li>
                      <li>Strike price</li>
                      <li>Premium received</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Profit per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Profit = Premium - Max(Strike Price - Stock Price, 0)</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =Premium-MAX(StrikePrice-StockPrice,0)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Short put with strike price of $50, premium received of $4, stock price at expiration of $48</p>
                  <p>Profit = $4 - Max($50 - $48, 0) = $4 - $2 = $2 per share</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Covered Call Profit</h3>
                <p className="text-muted-foreground mb-3">Profit for combined stock and short call position</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Initial stock price</li>
                      <li>Current stock price</li>
                      <li>Strike price</li>
                      <li>Premium received</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Total profit</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Profit = (Min(Current Stock Price, Strike Price) - Initial Stock Price) + Premium</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(MIN(StockPrice,StrikePrice)-InitialStockPrice)+Premium</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Stock purchased at $45, current price $52, sold call with strike price of $50, received premium of $2</p>
                  <p>Profit = (Min($52, $50) - $45) + $2 = ($50 - $45) + $2 = $5 + $2 = $7 per share</p>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Management Section */}
          <section id="portfolio-management">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Portfolio Management</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Portfolio Return</h3>
                <p className="text-muted-foreground mb-3">Weighted average return of portfolio components</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Individual asset returns</li>
                      <li>Portfolio weights</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Portfolio return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Rp = w₁R₁ + w₂R₂ + ... + wₙRₙ</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =SUMPRODUCT(Weights,Returns)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Portfolio with 50% in Stock A (return of 12%), 30% in Stock B (return of 8%), 20% in Bonds (return of 4%)</p>
                  <p>Rp = 0.50 × 12% + 0.30 × 8% + 0.20 × 4% = 6% + 2.4% + 0.8% = 9.2%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Portfolio Rebalancing Return</h3>
                <p className="text-muted-foreground mb-3">Return when portfolio is rebalanced to original weights</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Asset returns</li>
                      <li>Portfolio weights</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Portfolio return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Same as portfolio return, but weights are reset periodically</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =SUMPRODUCT(OriginalWeights,PeriodReturns)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Portfolio initially 50% in Stock A, 30% in Stock B, 20% in Bonds</p>
                  <p>Year 1: A returns 15%, B returns 5%, Bonds return 3%</p>
                  <p>Year 1 Return = 0.50 × 15% + 0.30 × 5% + 0.20 × 3% = 7.5% + 1.5% + 0.6% = 9.6%</p>
                  <p>Rebalance to original weights of 50/30/20 at beginning of Year 2</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Total Portfolio Return (Without Rebalancing)</h3>
                <p className="text-muted-foreground mb-3">Calculates total return when weights drift with performance</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Initial investment</li>
                      <li>Final values of each position</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Total return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Total Return = (Sum of Final Values / Initial Investment) - 1</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(SUM(FinalValues)/InitialInvestment)-1</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Initial investment of $100,000: $50,000 in Stock A, $30,000 in Stock B, $20,000 in Bonds</p>
                  <p>After 1 year: Stock A worth $57,500, Stock B worth $31,500, Bonds worth $20,600</p>
                  <p>Total Return = ($57,500 + $31,500 + $20,600) / $100,000 - 1 = $109,600 / $100,000 - 1 = 1.096 - 1 = 0.096 or 9.6%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Excel Functions Section */}
          <section id="excel-functions">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Excel Financial Functions</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Essential Excel Functions for Financial Calculations</h3>
                
                <div className="grid gap-4">
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">Present Value</p>
                    <p className="font-mono text-sm">=PV(rate, nper, pmt, [fv], [type])</p>
                    <p className="text-sm mt-2">Calculates present value of an investment</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">Future Value</p>
                    <p className="font-mono text-sm">=FV(rate, nper, pmt, [pv], [type])</p>
                    <p className="text-sm mt-2">Calculates future value of an investment</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">Net Present Value</p>
                    <p className="font-mono text-sm">=NPV(rate, value1, [value2], ...)</p>
                    <p className="text-sm mt-2">Calculates net present value of a series of cash flows</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">Internal Rate of Return</p>
                    <p className="font-mono text-sm">=IRR(values, [guess])</p>
                    <p className="text-sm mt-2">Calculates internal rate of return for a series of cash flows</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">Yield</p>
                    <p className="font-mono text-sm">=YIELD(settlement, maturity, rate, pr, redemption, frequency, [basis])</p>
                    <p className="text-sm mt-2">Calculates bond yield to maturity</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">Statistical Functions</p>
                    <p className="font-mono text-sm">=AVERAGE(), =STDEV.S(), =MAX(), =MIN(), =COUNT()</p>
                    <p className="text-sm mt-2">Essential statistical calculations for financial analysis</p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">Array Functions</p>
                    <p className="font-mono text-sm">=SUMPRODUCT(), =PRODUCT()</p>
                    <p className="text-sm mt-2">Powerful functions for portfolio calculations and weighted averages</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Financial Calculations Resources</h2>
            <p className="text-muted-foreground mb-6">
              This cheat sheet provides a comprehensive reference for FINA 6203 financial calculations. For additional resources, practice problems, and interactive calculators, explore the links below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="#return-calculations">
                Return Calculations
              </PrimaryButton>
              <SecondaryButton href="#bond-calculations">
                Bond Calculations
              </SecondaryButton>
              <PrimaryButton href="#options">
                Options
              </PrimaryButton>
              <SecondaryButton href="#excel-functions">
                Excel Functions
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "FINA 6203 - Essential Financial Calculations Cheat Sheet",
  description: "A comprehensive guide to financial calculations for quantitative finance students",
}

export default function FinancialCalculationsPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FINA 6203 Essential Calculations</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive guide to financial calculations for quantitative finance. This cheat sheet provides formulas, examples, and implementations for all essential financial calculations used in the course.
          </p>
          <div className="p-6 bg-muted rounded-lg">
            <p className="text-muted-foreground">
              This cheat sheet covers return calculations, risk measures, interest rates, bond pricing, fund management, margin trading, short selling, options, and portfolio management. Each formula includes a concrete example and Excel implementation.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          {/* Navigation Section */}
          <section className="bg-primary rounded-lg p-6 text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <Link href="#return-calculations" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Return Calculations
              </Link>
              <Link href="#risk-measures" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Risk Measures
              </Link>
              <Link href="#interest-rates" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Interest Rates
              </Link>
              <Link href="#bond-calculations" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Bond Calculations
              </Link>
              <Link href="#fund-management" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Fund Management
              </Link>
              <Link href="#margin-trading" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Margin Trading
              </Link>
              <Link href="#short-selling" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Short Selling
              </Link>
              <Link href="#options" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Options
              </Link>
              <Link href="#portfolio-management" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Portfolio Management
              </Link>
              <Link href="#excel-functions" className="p-3 bg-primary-foreground/10 rounded-md hover:bg-primary-foreground/20 transition-colors">
                Excel Functions
              </Link>
            </div>
          </section>

          {/* Return Calculations Section */}
          <section id="return-calculations">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Return Calculations</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Holding Period Return (HPR)</h3>
                <p className="text-muted-foreground mb-3">Calculates the total return on an investment over a specific period</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Beginning price (P₀)</li>
                      <li>Ending price (P₁)</li>
                      <li>Dividends (D₁)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Percentage return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> R = (P₁ - P₀ + D₁) / P₀</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(EndPrice-StartPrice+Dividend)/StartPrice</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Stock bought at $50, sold at $55, paid $2 dividend</p>
                  <p>HPR = (55 - 50 + 2) / 50 = 7 / 50 = 0.14 or 14%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Arithmetic Average Return</h3>
                <p className="text-muted-foreground mb-3">Simple average of periodic returns</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Series of returns (R₁, R₂, ..., Rₙ)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Average return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> R̄ = (R₁ + R₂ + ... + Rₙ) / n</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =AVERAGE(R1:Rn)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Returns of 10%, 15%, -5%, 8% over 4 years</p>
                  <p>R̄ = (10% + 15% + (-5%) + 8%) / 4 = 28% / 4 = 7%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Geometric Average Return</h3>
                <p className="text-muted-foreground mb-3">Compound average growth rate that accounts for compounding</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Series of returns (R₁, R₂, ..., Rₙ)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Compounded average return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Rg = [(1+R₁) × (1+R₂) × ... × (1+Rₙ)]^(1/n) - 1</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(PRODUCT(1+R1,1+R2,...,1+Rn))^(1/COUNT(R1:Rn))-1</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Returns of 10%, 15%, -5%, 8% over 4 years</p>
                  <p>Rg = [(1.10) × (1.15) × (0.95) × (1.08)]^(1/4) - 1</p>
                  <p>Rg = [1.291]^(1/4) - 1 = 1.066 - 1 = 0.066 or 6.6%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Compound Annual Growth Rate (CAGR)</h3>
                <p className="text-muted-foreground mb-3">Annualized growth rate over multiple years</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Present value (PV)</li>
                      <li>Future value (FV)</li>
                      <li>Number of years (n)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Annual growth rate</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> CAGR = (FV/PV)^(1/n) - 1</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(FV/PV)^(1/Years)-1 or =RRI(Years,PV,FV)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Investment grows from $10,000 to $14,802 over 4 years</p>
                  <p>CAGR = ($14,802/$10,000)^(1/4) - 1 = (1.4802)^(1/4) - 1 = 1.1032 - 1 = 0.1032 or 10.32%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Monthly Return from Total Return</h3>
                <p className="text-muted-foreground mb-3">Converts total return into equivalent monthly return</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Total return (R)</li>
                      <li>Number of months (n)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Monthly return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> rm = (1+R)^(1/n) - 1</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(1+TotalReturn)^(1/Months)-1</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Total return of 16% over 12 months</p>
                  <p>rm = (1+0.16)^(1/12) - 1 = (1.16)^(1/12) - 1 = 1.0124 - 1 = 0.0124 or 1.24% per month</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Annualized Return</h3>
                <p className="text-muted-foreground mb-3">Converts shorter period return to annual equivalent</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Period return (R)</li>
                      <li>Period length in months (n)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Annual return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> ra = (1+R)^(12/n) - 1</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(1+PeriodReturn)^(12/Months)-1</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>3% return over 3 months</p>
                  <p>ra = (1+0.03)^(12/3) - 1 = (1.03)^4 - 1 = 1.1255 - 1 = 0.1255 or 12.55% annually</p>
                </div>
              </div>
            </div>
          </section>

          {/* Risk Measures Section */}
          <section id="risk-measures">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Risk Measures</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Standard Deviation</h3>
                <p className="text-muted-foreground mb-3">Measures volatility/risk of returns</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Series of returns (R₁, R₂, ..., Rₙ)</li>
                      <li>Mean return (R̄)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Standard deviation</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> σ = √[Σ(Ri - R̄)² / (n-1)]</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =STDEV.S(R1:Rn)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Returns of 10%, 15%, -5%, 8% with mean return of 7%</p>
                  <p>σ = √[((0.10-0.07)² + (0.15-0.07)² + (-0.05-0.07)² + (0.08-0.07)²) / (4-1)]</p>
                  <p>σ = √[(0.0009 + 0.0064 + 0.0144 + 0.0001) / 3] = √[0.0218/3] = √0.00727 = 0.0853 or 8.53%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Risk Premium</h3>
                <p className="text-muted-foreground mb-3">Additional return expected for bearing risk</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Expected return on asset</li>
                      <li>Risk-free rate</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Risk premium</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> RP = Expected Return - Risk-Free Rate</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =ExpectedReturn-RiskFreeRate</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Stock with expected return of 11%, risk-free rate of 3%</p>
                  <p>RP = 11% - 3% = 8%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Excess Return</h3>
                <p className="text-muted-foreground mb-3">Actual return above risk-free rate</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Asset return</li>
                      <li>Risk-free rate</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Excess return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> ER = Asset Return - Risk-Free Rate</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =AssetReturn-RiskFreeRate</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Stock returned 9.5%, risk-free rate was 2.5%</p>
                  <p>ER = 9.5% - 2.5% = 7%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Probability of Loss (Normal Distribution)</h3>
                <p className="text-muted-foreground mb-3">Probability of negative return assuming normal distribution</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Expected return (μ)</li>
                      <li>Standard deviation (σ)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Probability</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Uses Z-score: Z = (0 - μ) / σ then finds P(Z &lt; calculated Z)</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =NORM.DIST(0,ExpectedReturn,StandardDeviation,TRUE)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Stock with expected return of 8% and standard deviation of 20%</p>
                  <p>Z = (0 - 0.08) / 0.20 = -0.4</p>
                  <p>P(Z &lt; -0.4) = 0.3446 or 34.46% probability of loss</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interest Rates Section */}
          <section id="interest-rates">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Interest Rate Calculations</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Effective Annual Rate (EAR)</h3>
                <p className="text-muted-foreground mb-3">True annual rate accounting for compounding</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Annual percentage rate (APR)</li>
                      <li>Compounding frequency (m)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Effective annual rate</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> EAR = (1 + APR/m)^m - 1</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(1+APR/m)^m-1</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>APR of 6% compounded quarterly</p>
                  <p>EAR = (1 + 0.06/4)^4 - 1 = (1 + 0.015)^4 - 1 = (1.015)^4 - 1 = 1.0614 - 1 = 0.0614 or 6.14%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">EAR with Specific Compounding</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc ml-6">
                    <li><strong>Annual:</strong> =(1+APR/1)^1-1 or simply =APR</li>
                    <li><strong>Semiannual:</strong> =(1+APR/2)^2-1</li>
                    <li><strong>Quarterly:</strong> =(1+APR/4)^4-1</li>
                    <li><strong>Monthly:</strong> =(1+APR/12)^12-1</li>
                    <li><strong>Weekly:</strong> =(1+APR/52)^52-1</li>
                    <li><strong>Daily:</strong> =(1+APR/365)^365-1</li>
                    <li><strong>Continuous:</strong> =EXP(APR)-1</li>
                  </ul>
                  <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                    <p className="font-bold">Example:</p>
                    <p>APR of 5% with different compounding frequencies</p>
                    <p>- Annual: (1+0.05/1)^1-1 = 5.00%</p>
                    <p>- Quarterly: (1+0.05/4)^4-1 = 5.09%</p>
                    <p>- Monthly: (1+0.05/12)^12-1 = 5.12%</p>
                    <p>- Continuous: e^0.05-1 = 5.13%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bond Calculations Section */}
          <section id="bond-calculations">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Bond Calculations</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Bond Price (Basic)</h3>
                <p className="text-muted-foreground mb-3">Calculates present value of bond cash flows</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Coupon rate (c)</li>
                      <li>Face value (F)</li>
                      <li>Yield to maturity (r)</li>
                      <li>Periods (n)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Bond price</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Price = Σ[C/(1+r)^t] + [F/(1+r)^n]</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =PV(yield,periods,-coupon*face_value,face_value)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>$1,000 bond with 6% annual coupon, 5 years to maturity, YTM of 5%</p>
                  <p>C = $60 per year, F = $1,000, r = 5%, n = 5</p>
                  <p>Price = $60/(1.05)¹ + $60/(1.05)² + $60/(1.05)³ + $60/(1.05)⁴ + $60/(1.05)⁵ + $1,000/(1.05)⁵</p>
                  <p>Price = $57.14 + $54.42 + $51.83 + $49.36 + $47.01 + $783.53 = $1,043.29</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Bond Price (Semiannual Payments)</h3>
                <p className="text-muted-foreground mb-3">Bond price with semiannual compounding</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Annual coupon rate (c)</li>
                      <li>Face value (F)</li>
                      <li>Annual YTM (r)</li>
                      <li>Years to maturity (n)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Bond price</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Price = Σ[C/2/(1+r/2)^t] + [F/(1+r/2)^(2n)]</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =PV(yield/2,years*2,-coupon*face_value/2,face_value)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>$1,000 bond with 6% annual coupon (3% semiannual), 5 years to maturity, YTM of 5%</p>
                  <p>C/2 = $30 per period, F = $1,000, r/2 = 2.5%, 2n = 10 periods</p>
                  <p>Price = $30/(1.025)¹ + $30/(1.025)² + ... + $30/(1.025)¹⁰ + $1,000/(1.025)¹⁰</p>
                  <p>Price = $29.27 + $28.56 + ... + $23.53 + $784.38 = $1,044.32</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Current Yield</h3>
                <p className="text-muted-foreground mb-3">Annual coupon payment relative to current price</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Annual coupon payment</li>
                      <li>Current bond price</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Current yield percentage</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Current Yield = Annual Coupon Payment / Current Price</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =AnnualCoupon/CurrentPrice</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Bond with $80 annual coupon trading at $950</p>
                  <p>Current Yield = $80 / $950 = 0.0842 or 8.42%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Accrued Interest</h3>
                <p className="text-muted-foreground mb-3">Interest earned but not yet paid</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Coupon payment</li>
                      <li>Days since last payment</li>
                      <li>Days in period</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Accrued interest amount</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> AI = Coupon × (Days since last payment / Days in period)</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =Coupon*(DaysSincePayment/DaysInPeriod)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Bond with $50 semiannual coupon, 60 days since last payment, 182 days in period</p>
                  <p>AI = $50 × (60 / 182) = $50 × 0.3297 = $16.49</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Invoice Price</h3>
                <p className="text-muted-foreground mb-3">Total price including accrued interest</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Clean price</li>
                      <li>Accrued interest</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Invoice price</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Invoice Price = Clean Price + Accrued Interest</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =CleanPrice+AccruedInterest</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Bond with clean price of $1,025 and accrued interest of $16.49</p>
                  <p>Invoice Price = $1,025 + $16.49 = $1,041.49</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Zero-Coupon Bond Value</h3>
                <p className="text-muted-foreground mb-3">Present value of a zero-coupon bond</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Face value</li>
                      <li>Yield to maturity (YTM)</li>
                      <li>Years to maturity</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Bond value</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Value = Face Value / (1 + YTM)^Years</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =FaceValue/(1+YTM)^Years</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>$1,000 zero-coupon bond, 6% YTM, 10 years to maturity</p>
                  <p>Value = $1,000 / (1 + 0.06)^10 = $1,000 / 1.7908 = $558.39</p>
                </div>
              </div>
            </div>
          </section>

          {/* Fund Management Section */}
          <section id="fund-management">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Fund Management</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Net Asset Value (NAV)</h3>
                <p className="text-muted-foreground mb-3">Per-share value of a fund</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Total assets</li>
                      <li>Total liabilities</li>
                      <li>Number of shares outstanding</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">NAV per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> NAV = (Total Assets - Total Liabilities) / Shares Outstanding</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(TotalAssets-Liabilities)/SharesOutstanding</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Fund with $250 million in assets, $10 million in liabilities, 12 million shares outstanding</p>
                  <p>NAV = ($250,000,000 - $10,000,000) / 12,000,000 = $240,000,000 / 12,000,000 = $20 per share</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Front-End Load</h3>
                <p className="text-muted-foreground mb-3">Sales charge when purchasing fund shares</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Offering price</li>
                      <li>NAV</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Load percentage</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Load = (Offering Price - NAV) / Offering Price</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(OfferingPrice-NAV)/OfferingPrice</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Fund with NAV of $18.50 and offering price of $20.00</p>
                  <p>Load = ($20.00 - $18.50) / $20.00 = $1.50 / $20.00 = 0.075 or 7.5%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Portfolio Turnover</h3>
                <p className="text-muted-foreground mb-3">Measure of trading activity in a fund</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Purchases</li>
                      <li>Sales</li>
                      <li>Average portfolio value</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Turnover ratio</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Turnover = Min(Purchases, Sales) / Average Portfolio Value</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =MIN(Purchases,Sales)/AveragePortfolioValue</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Fund with $120 million in purchases, $100 million in sales, average portfolio value of $500 million</p>
                  <p>Turnover = Min($120M, $100M) / $500M = $100M / $500M = 0.20 or 20%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Net Return with Expenses</h3>
                <p className="text-muted-foreground mb-3">Return after accounting for fund expenses</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Gross return</li>
                      <li>Expense ratio</li>
                      <li>Other fees (e.g., 12b-1)</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Net return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Net Return = Gross Return - Expense Ratio - Other Fees</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =GrossReturn-ExpenseRatio-OtherFees</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Fund with gross return of 12%, expense ratio of 1.2%, 12b-1 fee of 0.25%</p>
                  <p>Net Return = 12% - 1.2% - 0.25% = 10.55%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Holding Period Return with Fees</h3>
                <p className="text-muted-foreground mb-3">Multi-year return accounting for all fees</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Front-end load</li>
                      <li>Annual return (r)</li>
                      <li>Expenses</li>
                      <li>Years</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Net holding period return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Net HPR = (1 - Front Load) × [(1 + r) × (1 - Expenses)]^Years - 1</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(1-FrontLoad)*((1+r)*(1-Expenses))^Years-1</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Fund with 5% front-end load, 10% annual gross return, 1.5% expenses, 5-year holding period</p>
                  <p>Net HPR = (1 - 0.05) × [(1 + 0.10) × (1 - 0.015)]^5 - 1</p>
                  <p>Net HPR = 0.95 × [1.10 × 0.985]^5 - 1 = 0.95 × [1.0835]^5 - 1 = 0.95 × 1.4951 - 1 = 1.4203 - 1 = 0.4203 or 42.03%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Margin Trading Section */}
          <section id="margin-trading">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Margin Trading</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Initial Margin Requirement</h3>
                <p className="text-muted-foreground mb-3">Minimum percentage of funds investor must provide</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Investor's deposit</li>
                      <li>Total purchase value</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Initial margin percentage</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Initial Margin = (Investor's Deposit / Total Purchase Value) × 100%</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =Deposit/(SharePrice*NumberOfShares)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Investor deposits $25,000 to purchase $50,000 worth of shares</p>
                  <p>Initial Margin = $25,000 / $50,000 = 0.50 or 50%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Borrowed Amount</h3>
                <p className="text-muted-foreground mb-3">Amount financed by broker</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Total purchase value</li>
                      <li>Initial margin percentage</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Borrowed amount</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Borrowed = Total Purchase Value × (1 - Initial Margin)</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =TotalValue*(1-InitialMargin)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Purchase of $50,000 worth of shares with 50% initial margin</p>
                  <p>Borrowed = $50,000 × (1 - 0.50) = $50,000 × 0.50 = $25,000</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Current Margin Percentage</h3>
                <p className="text-muted-foreground mb-3">Current equity as percentage of position value</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Current market value</li>
                      <li>Loan amount</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Margin percentage</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Margin % = (Current Market Value - Loan) / Current Market Value</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =(CurrentPrice*Shares-LoanAmount)/(CurrentPrice*Shares)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Current market value of position is $45,000, loan amount is $25,000</p>
                  <p>Margin % = ($45,000 - $25,000) / $45,000 = $20,000 / $45,000 = 0.444 or 44.4%</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Margin Call Price</h3>
                <p className="text-muted-foreground mb-3">Price that triggers a margin call</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Loan amount</li>
                      <li>Number of shares</li>
                      <li>Maintenance margin</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Price per share</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Price = Loan / [Shares × (1 - Maintenance Margin)]</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =LoanAmount/(Shares*(1-MaintenanceMargin))</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Loan of $25,000, 1,000 shares, maintenance margin of 30%</p>
                  <p>Price = $25,000 / [1,000 × (1 - 0.30)] = $25,000 / [1,000 × 0.70] = $25,000 / 700 = $35.71</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Effective Annual Return on Margin</h3>
                <p className="text-muted-foreground mb-3">Annualized return on margin investment</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Initial equity</li>
                      <li>Final equity</li>
                      <li>Time period in months</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Annualized return</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Annual Return = [(Final Equity / Initial Equity)^(12/months)] - 1</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =((FinalEquity/InitialEquity)^(12/Months))-1</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Initial equity of $25,000, final equity of $30,000 after 6 months</p>
                  <p>Annual Return = [($30,000 / $25,000)^(12/6)] - 1 = [(1.20)^2] - 1 = 1.44 - 1 = 0.44 or 44%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Short Selling Section */}
          <section id="short-selling">
            <h2 className="text-3xl font-bold mb-6 border-b pb-2">Short Selling</h2>
            
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-2">Initial Margin for Short Sale</h3>
                <p className="text-muted-foreground mb-3">Funds required to initiate short position</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Input:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Share price</li>
                      <li>Number of shares</li>
                      <li>Initial margin rate</li>
                    </ul>
                    <p className="font-medium mt-3">Output:</p>
                    <p className="text-sm">Required margin</p>
                  </div>
                  <div>
                    <div className="p-3 bg-muted rounded mb-3">
                      <p className="font-mono text-sm"><strong>Equation:</strong> Required Margin = Share Price × Number of Shares × Initial Margin Rate</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded">
                      <p className="font-mono text-sm"><strong>Excel:</strong> =SharePrice*NumberOfShares*InitialMarginRate</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
                  <p className="font-bold">Example:</p>
                  <p>Short sale of 500 shares at $60 per share with 50% initial margin requirement</p>
                  <p>Required Margin = $60 × 500 × 0.50 = $15,000</p>
                </div>
