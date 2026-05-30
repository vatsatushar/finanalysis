"use client"

import StockTicker from "@/components/StockTicker"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StockTicker />

      <div className="max-w-5xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-6">
          FinAnalysis
        </h1>

        <p className="text-xl text-gray-300 mb-10">
          AI-powered stock analytics platform providing
          market insights, financial news, portfolio tracking,
          and investment research.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">
              Market Analytics
            </h2>
            <p>
              Analyze historical stock trends and market
              performance.
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">
              Financial News
            </h2>
            <p>
              Track latest market events and company updates.
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">
              Portfolio Insights
            </h2>
            <p>
              Monitor investments and evaluate risk metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}