"use client";

import { useEffect, useState } from "react";

interface ResultRow {
  strike: number;
  currentPrice: number;
  potentialValue: number;
  profit: number;
  roi: number;
  breakEven: number;
  intrinsicValue: number;
  timeValue: number;
}

export default function OptionRoiCalculator() {
  const [activeTab, setActiveTab] = useState("InputTab");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [results, setResults] = useState<ResultRow[]>([]);
  const [csvOutput, setCsvOutput] = useState("");
  const [sharePrice, setSharePrice] = useState<number | null>(null);
  const [targetPrice, setTargetPrice] = useState(300);
  const [isCallOption, setIsCallOption] = useState(false);

  // Extract share price from the input data
  function extractSharePrice(data: string): number | null {
    const sharePriceRegex = /Share price: \$(\d+(\.\d+)?)/i;
    const match = data.match(sharePriceRegex);
    
    if (match && match[1]) {
      return parseFloat(match[1]);
    }
    
    const lines = data.trim().split("\n");
    for (const line of lines) {
      if (line.includes("Share price:")) {
        const priceMatch = line.match(/\$(\d+(\.\d+)?)/);
        if (priceMatch && priceMatch[1]) {
          return parseFloat(priceMatch[1]);
        }
      }
    }
    
    return null;
  }

  // Parse option data from input text
  function parseOptionsData(data: string) {
    const lines = data.trim().split("\n");
    const options = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Try to find strike price at beginning of line
      const strikeMatch = line.match(/^\$(\d+(\.\d+)?)/);
      if (strikeMatch && strikeMatch[1]) {
        const strike = parseFloat(strikeMatch[1]);
        
        // Try to find option price at end of line
        const priceMatch = line.match(/\$(\d+(\.\d+)?)$/);
        if (priceMatch && priceMatch[1]) {
          const price = parseFloat(priceMatch[1]);
          
          if (!isNaN(strike) && !isNaN(price)) {
            options.push({
              strike,
              price
            });
          }
        }
      }
    }
    
    // Fallback to original method if no options found
    if (options.length === 0) {
      for (let i = 0; i < lines.length; i += 6) {
        if (i + 5 < lines.length) {
          const strike = parseFloat(lines[i].replace("$", ""));
          const price = parseFloat(lines[i + 5].replace("$", ""));
          
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

  // Calculate ROI for options
  function calculateOptionROI(
    options: Array<{strike: number, price: number}>, 
    targetPrice: number, 
    isCall: boolean,
    currentSharePrice: number | null
  ) {
    return options.map(option => {
      let potentialValue = 0;
      let intrinsicValue = 0;
      
      if (isCall) {
        potentialValue = Math.max(0, targetPrice - option.strike);
        if (currentSharePrice !== null) {
          intrinsicValue = Math.max(0, currentSharePrice - option.strike);
        }
      } else {
        potentialValue = Math.max(0, option.strike - targetPrice);
        if (currentSharePrice !== null) {
          intrinsicValue = Math.max(0, option.strike - currentSharePrice);
        }
      }
      
      const profit = potentialValue - option.price;
      const roi = option.price > 0 ? (profit / option.price * 100) : 0;
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
    }).sort((a, b) => b.roi - a.roi);
  }

  // Format results as CSV
  function displayResults(results: ResultRow[]) {
    setResults(results);
    
    let csv = "Strike,Current Price,Intrinsic Value,Time Value,Potential Value,Profit,ROI %,Break Even\n";
    
    results.forEach(result => {
      csv += `$${result.strike.toFixed(2)},$${result.currentPrice.toFixed(2)},$${result.intrinsicValue.toFixed(2)},$${result.timeValue.toFixed(2)},$${result.potentialValue.toFixed(2)},$${result.profit.toFixed(2)},${result.roi.toFixed(2)}%,$${result.breakEven.toFixed(2)}\n`;
    });
    
    setCsvOutput(csv);
  }

  // Copy CSV to clipboard
  function copyToClipboard() {
    const textArea = document.getElementById("csvOutput") as HTMLTextAreaElement;
    if (textArea) {
      textArea.select();
      document.execCommand("copy");
      
      setSuccessMessage("CSV copied to clipboard!");
      
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  }

  // Main calculation function
  function calculateROI() {
    setErrorMessage("");
    setSuccessMessage("");
    
    // Get form values safely
    const dataElement = document.getElementById("optionDataInput") as HTMLTextAreaElement;
    const targetElement = document.getElementById("targetPriceInput") as HTMLInputElement;
    const callElement = document.getElementById("callOption") as HTMLInputElement;
    
    if (!dataElement || !targetElement) {
      setErrorMessage("Could not find input elements.");
      return;
    }
    
    const data = dataElement.value || "";
    const targetValue = parseFloat(targetElement.value || "0");
    const isCall = callElement?.checked || false;
    
    // Update state
    setTargetPrice(targetValue);
    setIsCallOption(isCall);
    
    if (isNaN(targetValue) || targetValue <= 0) {
      setErrorMessage("Please enter a valid target price.");
      return;
    }
    
    try {
      const extractedSharePrice = extractSharePrice(data);
      setSharePrice(extractedSharePrice);
      
      const options = parseOptionsData(data);
      if (options.length === 0) {
        setErrorMessage("Could not parse options data. Please check format.");
        return;
      }
      
      const calculatedResults = calculateOptionROI(options, targetValue, isCall, extractedSharePrice);
      displayResults(calculatedResults);
      
      setActiveTab("ResultsTab");
      
      let successMsg = `Calculated ROI for ${options.length} options with target price of $${targetValue.toFixed(2)}`;
      if (extractedSharePrice) {
        successMsg += ` (Current share price: $${extractedSharePrice.toFixed(2)})`;
      }
      setSuccessMessage(successMsg);
      
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      
    } catch (error) {
      setErrorMessage(`Error processing data: ${error instanceof Error ? error.message : "Unknown error"}`);
      console.error(error);
    }
  }

  return (
    <div className="border rounded-lg p-6 bg-background">
      {/* Tab Navigation */}
      <div className="mb-6 border-b">
        <div className="flex">
          <button 
            onClick={() => setActiveTab("InputTab")}
            className={`px-4 py-2 font-medium ${activeTab === "InputTab" ? "border-b-2 border-primary text-foreground" : "text-muted-foreground"}`}
          >
            Input Data
          </button>
          <button 
            onClick={() => setActiveTab("ResultsTab")}
            className={`px-4 py-2 font-medium ${activeTab === "ResultsTab" ? "border-b-2 border-primary text-foreground" : "text-muted-foreground"}`}
          >
            Results
          </button>
          <button 
            onClick={() => setActiveTab("HelpTab")}
            className={`px-4 py-2 font-medium ${activeTab === "HelpTab" ? "border-b-2 border-primary text-foreground" : "text-muted-foreground"}`}
          >
            Help
          </button>
        </div>
      </div>
      
      {/* Messages */}
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
      {activeTab === "InputTab" && (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mb-4">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Data Formatting with AI (Recommended)</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
              <strong>Before pasting data here</strong>, use this prompt with ChatGPT or Claude to format your Robinhood data:
            </p>
            <div className="bg-white dark:bg-gray-800 p-3 rounded text-xs overflow-x-auto border border-blue-200 dark:border-blue-700 mb-3">
              I need to format options data for an ROI calculator. Please convert this raw Robinhood data into a clean format with only these columns:
              <br /><br />
              1. First line should be: Share price: $[CURRENT_PRICE]<br />
              2. Then a blank line<br />
              3. Then just two columns: Strike price and Ask Price<br />
              <br />
              Example of correct format:<br />
              Share price: $343.13<br />
              <br />
              Strike price&nbsp;&nbsp;&nbsp;&nbsp;Ask Price<br />
              $210&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$0.21<br />
              $205&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$0.21<br />
              $200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$0.18<br />
              <br />
              Please skip any rows with missing data (marked with "—").<br />
              <br />
              Here's the raw data to format:<br />
              [PASTE YOUR ROBINHOOD DATA HERE]
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>Step-by-step:</strong>
            </p>
            <ol className="text-sm text-blue-700 dark:text-blue-300 list-decimal pl-5 space-y-1">
              <li>Copy the options data from Robinhood</li>
              <li>Visit ChatGPT or Claude and paste the prompt above</li>
              <li>Replace the [PASTE YOUR ROBINHOOD DATA HERE] with your copied data</li>
              <li>Copy the AI's formatted response</li>
              <li>Paste the formatted data below in the Options Data field</li>
            </ol>
          </div>
          
          <div>
            <label htmlFor="optionDataInput" className="block font-medium mb-1">
              Options Data:
            </label>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mb-3">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Data Formatting Instructions</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                For best results, format your data as follows:
              </p>
              <pre className="bg-white dark:bg-gray-800 p-3 rounded text-xs overflow-x-auto text-blue-700 dark:text-blue-300">
{`Share price: $343.13

Strike price    Ask Price
$210           $0.21
$205           $0.21
$200           $0.18
$195           $0.20`}
              </pre>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                If pasting directly from Robinhood, include the "Share price: $XX.XX" line and the calculator will automatically extract the prices.
              </p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Paste your option chain data from Robinhood or another broker
            </p>
            <textarea 
              id="optionDataInput" 
              className="w-full min-h-[200px] p-3 border rounded-md font-mono bg-background"
              defaultValue={`Share price: $344.45

Strike price    Ask Price
$90            —
$80            $0.01
$70            $0.01
$60            $0.01
$50            $0.01`}
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
      {activeTab === "ResultsTab" && (
        <div className="space-y-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Calculation Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Share Price:</p>
                <p className="font-bold text-xl">${sharePrice ? sharePrice.toFixed(2) : "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Target Share Price:</p>
                <p className="font-bold text-xl">${targetPrice.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Option Type:</p>
                <p className="font-bold">{isCallOption ? "Call Options" : "Put Options"}</p>
              </div>
            </div>
            {sharePrice && (
              <p className="mt-4 text-sm text-muted-foreground">
                {targetPrice < sharePrice ? 
                  `Target price is ${((sharePrice - targetPrice) / sharePrice * 100).toFixed(2)}% below current price` : 
                  `Target price is ${((targetPrice - sharePrice) / sharePrice * 100).toFixed(2)}% above current price`}
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
                        className={
                          index === 0 
                            ? "bg-green-50 dark:bg-green-900/20 font-medium" 
                            : index % 2 === 1 ? "bg-muted/50" : ""
                        }
                      >
                        <td className="p-3 border-b">${result.strike.toFixed(2)}</td>
                        <td className="p-3 text-right border-b">${result.currentPrice.toFixed(2)}</td>
                        <td className="p-3 text-right border-b">${result.intrinsicValue.toFixed(2)}</td>
                        <td className="p-3 text-right border-b">${result.timeValue.toFixed(2)}</td>
                        <td className="p-3 text-right border-b">${result.potentialValue.toFixed(2)}</td>
                        <td className={`p-3 text-right border-b ${result.profit >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                          ${result.profit.toFixed(2)}
                        </td>
                        <td className={`p-3 text-right border-b ${result.roi >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
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
                The <span className="font-bold">${results[0].strike.toFixed(2)} strike price option</span> at <span className="font-bold">${results[0].currentPrice.toFixed(2)}</span> offers the best potential ROI of <span className="font-bold">{results[0].roi.toFixed(2)}%</span> if the stock reaches your target price of ${targetPrice.toFixed(2)}.
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
      {activeTab === "HelpTab" && (
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
            <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
{`Share price: $344.45

Strike price    Breakeven    To breakeven    % Change    Change    Ask Price
$90            —            —               —           —         —
$80            $79.99       -76.78%         0.00%       $0.00     $0.01
$70            $69.99       -79.68%         0.00%       $0.00     $0.01`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
