import { useMemo } from 'react';
import { Shield, ChevronRight, Lock, AlertTriangle } from 'lucide-react';

export default function BorrowPage() {
  const barHeights = useMemo(
    () => Array.from({ length: 40 }, (_, i) => 20 + Math.sin(i * 0.5) * 15 + (i > 20 ? 20 : 0) + Math.cos(i * 0.3) * 10),
    []
  );

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto w-full min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="w-5 h-5 text-[#9b51e0]" />
            <h3 className="text-[15px] font-semibold">FiScore</h3>
          </div>

          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-[3rem] font-bold text-white">64</span>
            <span className="text-[1.5rem] text-gray-400 font-light">/ 100</span>
          </div>
          <p className="text-[12px] text-gray-500 mb-6">Your onchain credit score based on transaction history and behavior</p>

          <div className="relative h-24 mb-6">
            <div className="absolute inset-0 flex items-end space-x-[2px] px-1">
              {barHeights.map((height, i) => {
                const isGold = i > 15 && i < 30;
                const isPlatinum = i >= 30;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm opacity-80"
                    style={{
                      height: `${Math.min(95, Math.max(15, height))}%`,
                      backgroundColor: isPlatinum ? '#e2e8f0' : isGold ? '#f59e0b' : '#3b82f6',
                    }}
                  ></div>
                );
              })}
            </div>

            <div className="absolute bottom-0 left-[60%] flex flex-col items-center" style={{ transform: 'translateX(-50%)' }}>
              <span className="text-[8px] text-white font-bold mb-1 bg-[#0f0f13]/80 px-1 rounded">YOU</span>
              <div className="w-0.5 h-20 bg-white"></div>
            </div>
          </div>

          <div className="flex justify-between text-[10px] font-bold text-gray-500 tracking-widest mb-2">
            <span>SILVER</span>
            <span>GOLD</span>
            <span>PLATINUM</span>
          </div>

          <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3b82f6] via-[#f59e0b] to-[#e2e8f0] rounded-full"
              style={{ width: '64%' }}
            ></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-6">
            <h3 className="text-[15px] font-semibold mb-4">Loan Eligibility</h3>
            <div className="bg-gradient-to-r from-[#9b51e0]/10 to-[#f27a33]/10 border border-[#9b51e0]/20 rounded-xl p-4 mb-4">
              <p className="text-[14px] font-medium mb-1">You qualify for a low-interest loan</p>
              <p className="text-[12px] text-gray-400">Based on your Gold-tier FiScore and collateral</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[13px] text-gray-400">Max Borrow</span>
                <span className="text-[13px] font-semibold">$15,000.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px] text-gray-400">Interest Rate</span>
                <span className="text-[13px] font-semibold text-[#00e676]">3.2% APR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px] text-gray-400">Collateral Ratio</span>
                <span className="text-[13px] font-semibold">150%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px] text-gray-400">Loan Duration</span>
                <span className="text-[13px] font-semibold">Up to 12 months</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-[#9b51e0] to-[#f27a33] text-white font-semibold py-3.5 rounded-xl text-[14px] hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
            <span>Apply for Loan</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-6">
        <h3 className="text-[15px] font-semibold mb-5">Collateral Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#111424] border border-[#1e293b] rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Lock className="w-4 h-4 text-[#9b51e0]" />
              <span className="text-[13px] font-medium">Locked Assets</span>
            </div>
            <p className="text-[1.25rem] font-bold">$22,500.00</p>
            <p className="text-[11px] text-gray-500 mt-1">BTC, SOL, USDC</p>
          </div>
          <div className="bg-[#111424] border border-[#1e293b] rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Shield className="w-4 h-4 text-[#00e676]" />
              <span className="text-[13px] font-medium">Health Factor</span>
            </div>
            <p className="text-[1.25rem] font-bold text-[#00e676]">2.45</p>
            <p className="text-[11px] text-gray-500 mt-1">Safe Zone</p>
          </div>
          <div className="bg-[#111424] border border-[#1e293b] rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
              <span className="text-[13px] font-medium">Liquidation Price</span>
            </div>
            <p className="text-[1.25rem] font-bold">$38,200</p>
            <p className="text-[11px] text-gray-500 mt-1">BTC price trigger</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-6">
        <h3 className="text-[15px] font-semibold mb-4">Active Loans</h3>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-[#111424] border border-[#1e293b] flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-gray-600" />
          </div>
          <p className="text-[14px] text-gray-400 mb-1">No active loans</p>
          <p className="text-[12px] text-gray-600">Apply for your first loan to get started</p>
        </div>
      </div>
    </div>
  );
}
