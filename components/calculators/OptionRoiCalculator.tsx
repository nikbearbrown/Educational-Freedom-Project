// File: components/calculators/OptionRoiCalculator.tsx
"use client"

import { useEffect, useState } from "react"

export default function OptionRoiCalculator() {
  const [activeTab, setActiveTab] = useState('InputTab')
  const [isCalculatorLoaded, setIsCalculatorLoaded] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [results, setResults] = useState<Array<ResultRow>>([])
  const [csvOutput, setCsvOutput] = useState('')
  const [sharePrice, setSharePrice] = useState<number | null>(null)

  // Define the result data structure
  interface ResultRow {
    strike: number
    currentPrice: number
    potentialValue: number
    profit: number
    roi: number
    breakEven: number
    intrinsicValue: number
    timeValue: number
  }

  useEffect(() => {
    setIsCalculatorLoaded(true)
  }, [])

  const extractSharePrice = (data: string): number | null => {
    // Look for patterns like "Share price: $344.45" or similar
    const sharePriceRegex = /Share price: \$(\d+(\.\d+)?)/i;
    const match = data.match(sharePriceRegex);
    
    if (match && match[1]) {
      return parseFloat(match[1]);
    }
    
    // Alternative approach: Look for lines that may contain the share price
    const lines = data.trim().split('\n');
    for (const line of lines) {
      if (line.includes('Share price:')) {
        const priceMatch = line.match(/\$(\d+(\.\d+)?)/);
        if (priceMatch && priceMatch[1]) {
          return parseFloat(priceMatch[1]);
        }
      }
    }
    
    return null;
  }

  const calculateROI = () => {
    // Clear any previous messages
    setErrorMessage('')
    setSuccessMessage('')
    
    // Get form values
    const data = (document.getElementById('optionDataInput') as HTMLTextAreaElement).value
    const targetPrice = parseFloat((document.getElementById('targetPriceInput') as HTMLInputElement).value)
    const isCall = (document.getElementById('callOption') as HTMLInputElement).checked
    
    if (isNaN(targetPrice) || targetPrice <= 0) {
      setErrorMessage('Please enter a valid target price.')
      return
    }
    
    try {
      // Try to extract share price from the data
      const extractedSharePrice = extractSharePrice(data);
      setSharePrice(extractedSharePrice);
      
      // Parse options data
      const options = parseOptionsData(data);
      if (options.length === 0) {
        setErrorMessage('Could not parse options data. Please check format.')
        return
      }
      
      // Calculate ROI for each option
      const calculatedResults = calculateOptionROI(options, targetPrice, isCall, extractedSharePrice);
      displayResults(calculatedResults);
      
      // Switch to results tab
      setActiveTab('ResultsTab');
      
      // Show success message
      let successMsg = `Calculated ROI for ${options.length} options with target price of ${targetPrice.toFixed(2)}`;
      if (extractedSharePrice) {
        successMsg += ` (Current share price: ${extractedSharePrice.toFixed(2)})`;
      }
      setSuccessMessage(successMsg);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      
    } catch (error) {
      setErrorMessage(`Error processing data: ${error instanceof Error ? error.message : 'Unknown error'}`);
      console.error(error);
    }
  }

  const parseOptionsData = (data: string) => {
    const lines = data.trim().split('\n');
    const options = [];
    
    let inOptionData = false;
    let strikePrice: number | null = null;
    let optionPrice: number | null = null;
    
    // Pattern for strike price and option price
    const strikePricePattern = /^\s*\$(\d+(\.\d+)?)\s*$/;
    const optionPricePattern = /\$(\d+(\.\d+)?)\s*$/;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines
      if (!line) continue;
      
      // Check if this line contains a strike price (typically bold and starts with $)
      const strikeMatch = line.match(strikePricePattern);
      if (strikeMatch) {
        strikePrice = parseFloat(strikeMatch[1]);
        inOptionData = true;
        continue;
      }
      
      // If we're in option data and have a strike price, look for the option price
      if (inOptionData && strikePrice !== null) {
        // Try to find option price at the end of a line
        const priceMatch = line.match(optionPricePattern);
        if (priceMatch) {
          optionPrice = parseFloat(priceMatch[1]);
          
          // Add this option to our list
          if (optionPrice !== null && !isNaN(optionPrice)) {
            options.push({
              strike: strikePrice,
              price: optionPrice
            });
            
            // Reset for next option
            inOptionData = false;
            strikePrice = null;
            optionPrice = null;
          }
        }
      }
    }
    
    // If we couldn't parse any options with the smarter approach, fall back to the original method
    if (options.length === 0) {
      // Each option has 6 lines of data
      for (let i = 0; i < lines.length; i += 6) {
        if (i + 5 < lines.length) {
          const strike = parseFloat(lines[i].replace('
, ''));
          const price = parseFloat(lines[i + 5].replace('
, ''));
          
          if (!isNaN(strike) && !isNaN(price)) {
            options.push({
              strike,
              price
            });
          }
        }
      }
    }
    
    return options;
  }

  const calculateOptionROI = (
    options: Array<{strike: number, price: number}>, 
    targetPrice: number, 
    isCall: boolean,
    currentSharePrice: number | null
  ) => {
    return options.map(option => {
      let potentialValue: number;
      let intrinsicValue: number = 0;
      
      if (isCall) {
        // Call option: max(0, targetPrice - strike)
        potentialValue = Math.max(0, targetPrice - option.strike);
        
        // Calculate intrinsic value if we know the current share price
        if (currentSharePrice !== null) {
          intrinsicValue = Math.max(0, currentSharePrice - option.strike);
        }
      } else {
        // Put option: max(0, strike - targetPrice)
        potentialValue = Math.max(0, option.strike - targetPrice);
        
        // Calculate intrinsic value if we know the current share price
        if (currentSharePrice !== null) {
          intrinsicValue = Math.max(0, option.strike - currentSharePrice);
        }
      }
      
      const profit = potentialValue - option.price;
      const roi = profit / option.price * 100;
      
      // Calculate time value (option price - intrinsic value)
      const timeValue = option.price - intrinsicValue;
      
      return {
        strike: option.strike,
        currentPrice: option.price,
        potentialValue,
        profit,
        roi,
        breakEven: isCall ? option.strike + option.price : option.strike - option.price,
        intrinsicValue,
        timeValue
      };
    }).sort((a, b) => b.roi - a.roi); // Sort by ROI descending
  }

  const displayResults = (results: Array<ResultRow>) => {
    // Save results to state
    setResults(results);
    
    // Create CSV header
    let csv = 'Strike,Current Price,Intrinsic Value,Time Value,Potential Value,Profit,ROI %,Break Even\n';
    
    // Add data rows
    results.forEach(result => {
      csv += `${result.strike.toFixed(2)},${result.currentPrice.toFixed(2)},${result.intrinsicValue.toFixed(2)},${result.timeValue.toFixed(2)},${result.potentialValue.toFixed(2)},${result.profit.toFixed(2)},${result.roi.toFixed(2)}%,${result.breakEven.toFixed(2)}\n`;
    });
    
    // Set CSV output
    setCsvOutput(csv);
  }

  const copyToClipboard = () => {
    const textArea = document.getElementById('csvOutput') as HTMLTextAreaElement;
    textArea.select();
    document.execCommand('copy');
    
    // Visual feedback
    setSuccessMessage('CSV copied to clipboard!');
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  }

  return (
    <div className="border rounded-lg p-6 bg-background">
      {/* Tabs */}
      <div className="mb-6 border-b">
        <div className="flex">
          <button 
            onClick={() => setActiveTab('InputTab')}
            className={`px-4 py-2 font-medium ${activeTab === 'InputTab' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}
          >
            Input Data
          </button>
          <button 
            onClick={() => setActiveTab('ResultsTab')}
            className={`px-4 py-2 font-medium ${activeTab === 'ResultsTab' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}
          >
            Results
          </button>
          <button 
            onClick={() => setActiveTab('HelpTab')}
            className={`px-4 py-2 font-medium ${activeTab === 'HelpTab' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}
          >
            Help
          </button>
        </div>
      </div>
      
      {/* Error/Success Alerts */}
      {errorMessage && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6">
          {errorMessage}
        </div>
      )}
      
      {successMessage && (
        <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-md mb-6">
          {successMessage}
        </div>
      )}
      
      {/* Input Tab */}
      {activeTab === 'InputTab' && (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Quick Start with Robinhood</h4>
            <ol className="text-sm text-blue-700 dark:text-blue-300 list-decimal pl-5 space-y-1">
              <li>Open Robinhood and navigate to the stock you want to analyze</li>
              <li>Tap "Trade Options" and select either "Call" or "Put"</li>
              <li>Select an expiration date</li>
              <li>Copy the entire options chain section (including the "Share price: $XX.XX" line)</li>
              <li>Paste below, enter your target price, and click "Calculate ROI"</li>
            </ol>
          </div>
          
          <div>
            <label htmlFor="optionDataInput" className="block font-medium mb-1">
              Options Data:
            </label>
            <p className="text-sm text-muted-foreground mb-2">
              Paste your option chain data from Robinhood or another broker (include "Share price: $XX.XX" if possible)
            </p>
            <textarea 
              id="optionDataInput" 
              className="w-full min-h-[200px] p-3 border rounded-md font-mono bg-background"
              defaultValue={`Share price: $344.45

Strike price    Breakeven    To breakeven    % Change    Change    Ask Price
$90            —            —               —           —         —
$80            $79.99       -76.78%         0.00%       $0.00     $0.01
$70            $69.99       -79.68%         0.00%       $0.00     $0.01
$60            $59.99       -82.58%         0.00%       $0.00     $0.01
$50            $49.99       -85.49%         0.00%       $0.00     $0.01`}
            />
          </div>
          
          <div>
            <label htmlFor="targetPriceInput" className="block font-medium mb-1">
              Target Price ($):
            </label>
            <input 
              type="number" 
              id="targetPriceInput" 
              className="w-full sm:w-48 p-3 border rounded-md bg-background" 
              min="0" 
              step="0.01" 
              defaultValue="300"
            />
          </div>
          
          <div>
            <span className="block font-medium mb-1">Option Type:</span>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="optionType" 
                  id="callOption" 
                  className="mr-2" 
                />
                Call Options
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="optionType" 
                  id="putOption" 
                  defaultChecked
                  className="mr-2" 
                />
                Put Options
              </label>
            </div>
          </div>
          
          <div>
            <button 
              onClick={calculateROI}
              className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Calculate ROI
            </button>
          </div>
        </div>
      )}
      
      {/* Results Tab */}
      {activeTab === 'ResultsTab' && (
        <div className="space-y-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Calculation Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Share Price:</p>
                <p className="font-bold text-xl">${sharePrice ? sharePrice.toFixed(2) : 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Target Share Price:</p>
                <p className="font-bold text-xl">${(document.getElementById('targetPriceInput') as HTMLInputElement)?.value || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Option Type:</p>
                <p className="font-bold">{(document.getElementById('callOption') as HTMLInputElement)?.checked ? 'Call Options' : 'Put Options'}</p>
              </div>
            </div>
            {sharePrice && (
              <p className="mt-4 text-sm text-muted-foreground">
                {sharePrice && parseFloat((document.getElementById('targetPriceInput') as HTMLInputElement)?.value) < sharePrice ? 
                  `Target price is ${((sharePrice - parseFloat((document.getElementById('targetPriceInput') as HTMLInputElement)?.value)) / sharePrice * 100).toFixed(2)}% below current price` : 
                  `Target price is ${((parseFloat((document.getElementById('targetPriceInput') as HTMLInputElement)?.value) - sharePrice) / sharePrice * 100).toFixed(2)}% above current price`}
              </p>
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Best Options by ROI</h3>
            {results.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-3 text-left border-b">Strike</th>
                      <th className="p-3 text-right border-b">Option Price</th>
                      <th className="p-3 text-right border-b">Intrinsic Value</th>
                      <th className="p-3 text-right border-b">Time Value</th>
                      <th className="p-3 text-right border-b">Target Value</th>
                      <th className="p-3 text-right border-b">Profit</th>
                      <th className="p-3 text-right border-b">ROI %</th>
                      <th className="p-3 text-right border-b">Break Even</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result, index) => (
                      <tr 
                        key={index}
                        className={`
                          ${index === 0 ? 'bg-green-50 dark:bg-green-900/20 font-medium' : ''} 
                          ${index % 2 === 1 && index !== 0 ? 'bg-muted/50' : ''}
                        `}
                      >
                        <td className="p-3 border-b">${result.strike.toFixed(2)}</td>
                        <td className="p-3 text-right border-b">${result.currentPrice.toFixed(2)}</td>
                        <td className="p-3 text-right border-b">${result.intrinsicValue.toFixed(2)}</td>
                        <td className="p-3 text-right border-b">${result.timeValue.toFixed(2)}</td>
                        <td className="p-3 text-right border-b">${result.potentialValue.toFixed(2)}</td>
                        <td className={`p-3 text-right border-b ${result.profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          ${result.profit.toFixed(2)}
                        </td>
                        <td className={`p-3 text-right border-b ${result.roi >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {result.roi.toFixed(2)}%
                        </td>
                        <td className="p-3 text-right border-b">${result.breakEven.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-muted-foreground">No results to display. Calculate ROI first.</p>
            )}
          </div>
          
          {results.length > 0 && (
            <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-100 dark:border-green-800">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Recommendation</h4>
              <p className="text-green-700 dark:text-green-300">
                {results.length > 0 && (
                  <>
                    The <span className="font-bold">${results[0].strike.toFixed(2)} strike price option</span> at <span className="font-bold">${results[0].currentPrice.toFixed(2)}</span> offers the best potential ROI of <span className="font-bold">{results[0].roi.toFixed(2)}%</span> if the stock reaches your target price of ${(document.getElementById('targetPriceInput') as HTMLInputElement)?.value}.
                  </>
                )}
              </p>
            </div>
          )}
          
          <div>
            <h3 className="text-xl font-bold mb-4">CSV Output</h3>
            <textarea 
              id="csvOutput" 
              className="w-full min-h-[150px] p-3 border rounded-md font-mono bg-background" 
              value={csvOutput}
              readOnly
            />
          </div>
          
          <div>
            <button 
              onClick={copyToClipboard}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
              disabled={!csvOutput}
            >
              Copy CSV to Clipboard
            </button>
          </div>
        </div>
      )}
      
      {/* Help Tab */}
      {activeTab === 'HelpTab' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">How to Use This Calculator</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Paste Your Options Data:</strong> Copy and paste your option chain data from Robinhood or another broker. Include the current share price if possible (format: "Share price: $XX.XX").
              </li>
              <li>
                <strong>Enter Your Target Price:</strong> Input the price you believe the underlying asset will reach.
              </li>
              <li>
                <strong>Select Option Type:</strong> Choose whether you're analyzing call options or put options.
              </li>
              <li>
                <strong>Calculate ROI:</strong> Click the "Calculate ROI" button to process your data.
              </li>
              <li>
                <strong>View Results:</strong> The calculator will show you which strike prices offer the best potential return for your price target.
              </li>
              <li>
                <strong>Copy CSV:</strong> Copy the CSV output for use in spreadsheet applications.
              </li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Understanding the Results</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Strike:</strong> The strike price of the option.
              </li>
              <li>
                <strong>Option Price:</strong> The current price (premium) of the option.
              </li>
              <li>
                <strong>Intrinsic Value:</strong> The value if exercised immediately (for calls: max(0, share price - strike); for puts: max(0, strike - share price)).
              </li>
              <li>
                <strong>Time Value:</strong> The portion of the option price beyond intrinsic value (option price - intrinsic value).
              </li>
              <li>
                <strong>Target Value:</strong> The intrinsic value if the underlying reaches your target price.
              </li>
              <li>
                <strong>Profit:</strong> The potential gain (Target Value - Option Price).
              </li>
              <li>
                <strong>ROI %:</strong> Return on investment as a percentage (Profit / Option Price × 100).
              </li>
              <li>
                <strong>Break Even:</strong> The price the underlying needs to reach for the option to break even.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Robinhood Data Format</h3>
            <p className="mb-2">To get the best results from Robinhood:</p>
            <ol className="list-decimal pl-5 space-y-1 mb-4">
              <li>Open the Robinhood app and navigate to the stock you want to analyze</li>
              <li>Tap on "Trade" and then "Trade Options"</li>
              <li>Select either "Call" or "Put" options</li>
              <li>Choose an expiration date</li>
              <li>Copy the entire options chain including the share price at the top</li>
            </ol>
            <p className="mb-2">The calculator is designed to automatically detect data in this format:</p>
            <pre className="bg-muted p-4 rounded-md font-mono text-sm">
{`Share price: $344.45

Strike price    Breakeven    To breakeven    % Change    Change    Ask Price
$90            —            —               —           —         —
$80            $79.99       -76.78%         0.00%       $0.00     $0.01
$70            $69.99       -79.68%         0.00%       $0.00     $0.01
...`}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
