"use client"

import { useEffect, useState } from "react"

export default function OptionRoiCalculator() {
  const [activeTab, setActiveTab] = useState('InputTab')
  const [isCalculatorLoaded, setIsCalculatorLoaded] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [results, setResults] = useState<Array<ResultRow>>([])
  const [csvOutput, setCsvOutput] = useState('')

  // Define the result data structure
  interface ResultRow {
    strike: number
    currentPrice: number
    potentialValue: number
    profit: number
    roi: number
    breakEven: number
  }

  useEffect(() => {
    setIsCalculatorLoaded(true)
  }, [])

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
      const options = parseOptionsData(data)
      if (options.length === 0) {
        setErrorMessage('Could not parse options data. Please check format.')
        return
      }
      
      const calculatedResults = calculateOptionROI(options, targetPrice, isCall)
      displayResults(calculatedResults)
      
      // Switch to results tab
      setActiveTab('ResultsTab')
      
      // Show success message
      setSuccessMessage(`Calculated ROI for ${options.length} options with target price of $${targetPrice.toFixed(2)}`)
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
      
    } catch (error) {
      setErrorMessage(`Error processing data: ${error instanceof Error ? error.message : 'Unknown error'}`)
      console.error(error)
    }
  }

  const parseOptionsData = (data: string) => {
    const lines = data.trim().split('\n')
    const options = []
    
    // Each option has 6 lines of data
    for (let i = 0; i < lines.length; i += 6) {
      if (i + 5 < lines.length) {
        const strike = parseFloat(lines[i].replace('$', ''))
        const price = parseFloat(lines[i + 5].replace('$', ''))
        
        if (!isNaN(strike) && !isNaN(price)) {
          options.push({
            strike,
            price
          })
        }
      }
    }
    
    return options
  }

  const calculateOptionROI = (options: Array<{strike: number, price: number}>, targetPrice: number, isCall: boolean) => {
    return options.map(option => {
      let potentialValue: number
      
      if (isCall) {
        // Call option: max(0, targetPrice - strike)
        potentialValue = Math.max(0, targetPrice - option.strike)
      } else {
        // Put option: max(0, strike - targetPrice)
        potentialValue = Math.max(0, option.strike - targetPrice)
      }
      
      const profit = potentialValue - option.price
      const roi = profit / option.price * 100
      
      return {
        strike: option.strike,
        currentPrice: option.price,
        potentialValue,
        profit,
        roi,
        breakEven: isCall ? option.strike + option.price : option.strike - option.price
      }
    }).sort((a, b) => b.roi - a.roi) // Sort by ROI descending
  }

  const displayResults = (results: Array<ResultRow>) => {
    // Save results to state
    setResults(results)
    
    // Create CSV header
    let csv = 'Strike,Current Price,Potential Value,Profit,ROI %,Break Even\n'
    
    // Add data rows
    results.forEach(result => {
      csv += `$${result.strike.toFixed(2)},$${result.currentPrice.toFixed(2)},$${result.potentialValue.toFixed(2)},$${result.profit.toFixed(2)},${result.roi.toFixed(2)}%,$${result.breakEven.toFixed(2)}\n`
    })
    
    // Set CSV output
    setCsvOutput(csv)
  }

  const copyToClipboard = () => {
    const textArea = document.getElementById('csvOutput') as HTMLTextAreaElement
    textArea.select()
    document.execCommand('copy')
    
    // Visual feedback
    setSuccessMessage('CSV copied to clipboard!')
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
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
          <div>
            <label htmlFor="optionDataInput" className="block font-medium mb-1">
              Options Data:
            </label>
            <p className="text-sm text-muted-foreground mb-2">
              Paste your option chain data in the format shown below
            </p>
            <textarea 
              id="optionDataInput" 
              className="w-full min-h-[200px] p-3 border rounded-md font-mono bg-background"
              defaultValue={`$345
$329.07
-4.38%
0.00%
$0.00
$13.50
$340
$327.80
-4.75%
-37.53%
-$7.33
$12.25
$337.5
$326.47
-5.13%
0.00%
$0.00
$11.10
$335
$325.07
-5.54%
-39.56%
-$6.50
$10.00
$332.5
$323.60
-5.97%
0.00%
$0.00
$8.95
$330
$322.05
-6.42%
-41.76%
-$5.70
$8.00
$327.5
$320.40
-6.90%
0.00%
$0.00
$7.15`}
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
              defaultValue="350"
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
                  defaultChecked
                  className="mr-2" 
                />
                Call Options
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="optionType" 
                  id="putOption" 
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
          <div>
            <h3 className="text-xl font-bold mb-4">Best Options by ROI</h3>
            {results.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-3 text-left border-b">Strike</th>
                      <th className="p-3 text-right border-b">Current Price</th>
                      <th className="p-3 text-right border-b">Potential Value</th>
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
                <strong>Paste Your Options Data:</strong> Copy and paste your option chain data in the format shown in the example.
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
                <strong>Current Price:</strong> The current price of the option.
              </li>
              <li>
                <strong>Potential Value:</strong> The intrinsic value of the option if the underlying reaches your target price.
              </li>
              <li>
                <strong>Profit:</strong> The potential gain (Potential Value - Current Price).
              </li>
              <li>
                <strong>ROI %:</strong> Return on investment as a percentage (Profit / Current Price × 100).
              </li>
              <li>
                <strong>Break Even:</strong> The price the underlying needs to reach for the option to break even.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Data Format</h3>
            <p className="mb-2">The calculator expects data in the following format (each option has 6 lines):</p>
            <pre className="bg-muted p-4 rounded-md font-mono text-sm">
{`$345      (Strike price)
$329.07   (Stock price)
-4.38%    (% change)
0.00%     (Unknown)
$0.00     (Unknown)
$13.50    (Option price)`}
            </pre>
            <p className="mt-2 text-muted-foreground">
              Only the strike price (1st line) and option price (6th line) are used in calculations.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}