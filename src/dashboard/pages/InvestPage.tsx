import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import bitcoinLogo from '@/attached_assets/bitcoin-btc-logo_(2)_1773565036546.png';
import teslaLogo from '@/attached_assets/Tesla,_Inc.-Logomark-Black-Logo.wine_1773565051159.png';
import goldLogo from '@/attached_assets/gold--big_1773565030735.png';
import appleLogo from '@/attached_assets/747_1773565063041.png';
import solanaLogo from '@/attached_assets/solana-sol-logo_(17)_1773564269930.png';

const portfolio = [
  { name: 'Bitcoin', symbol: 'BTC', logo: bitcoinLogo, value: '$955.52', allocation: '7.7%', change: '+2.25%', positive: true, shares: '0.0095 BTC', bgClass: '' },
  { name: 'Tesla', symbol: 'TSLA', logo: teslaLogo, value: '$595.52', allocation: '4.8%', change: '+10.25%', positive: true, shares: '1.8 shares', bgClass: 'bg-white' },
  { name: 'Apple', symbol: 'AAPL', logo: appleLogo, value: '$155.22', allocation: '1.3%', change: '+1.51%', positive: true, shares: '0.7 shares', bgClass: 'bg-white' },
  { name: 'Gold ETF', symbol: 'GLD', logo: goldLogo, value: '$112.62', allocation: '0.9%', change: '+7.29%', positive: true, shares: '0.5 units', bgClass: '' },
  { name: 'Solana', symbol: 'SOL', logo: solanaLogo, value: '$12,403.00', allocation: '100%', change: '+5.12%', positive: true, shares: '82.5 SOL', bgClass: '' },
];

export default function InvestPage() {
  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-5xl mx-auto min-w-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-5">
          <p className="text-gray-400 text-[12px] font-medium mb-1">Portfolio Value</p>
          <div className="flex items-end space-x-2">
            <p className="text-[1.25rem] sm:text-[1.5rem] font-bold">$14,221.88</p>
            <div className="flex items-center text-[#00e676] text-[11px] sm:text-[12px] font-semibold mb-0.5">
              <TrendingUp className="w-3 h-3 mr-0.5" />
              +2.5%
            </div>
          </div>
        </div>
        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-5">
          <p className="text-gray-400 text-[12px] font-medium mb-1">Total P&L</p>
          <p className="text-[1.25rem] sm:text-[1.5rem] font-bold text-[#00e676]">+$1,843.22</p>
        </div>
        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-5">
          <p className="text-gray-400 text-[12px] font-medium mb-1">Assets Held</p>
          <p className="text-[1.25rem] sm:text-[1.5rem] font-bold">5</p>
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-6 min-w-0">
        <div className="flex items-center justify-between mb-5 min-w-0 gap-3">
          <h3 className="text-[15px] font-semibold shrink-0">Performance</h3>
          <div className="flex space-x-1 overflow-x-auto no-scrollbar shrink min-w-0">
            {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((period, i) => (
              <button
                key={period}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-[12px] font-medium transition-colors whitespace-nowrap shrink-0 ${
                  i === 4 ? 'bg-[#9b51e0]/20 text-white border border-[#9b51e0]/30' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="h-52 relative">
          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="invest-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9b51e0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#9b51e0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,160 C20,155 40,140 60,135 C80,130 100,145 120,120 C140,95 160,110 180,90 C200,70 220,85 240,60 C260,35 280,50 300,40 C320,30 340,45 360,35 C380,25 400,20 400,20 L400,200 L0,200 Z"
              fill="url(#invest-grad)"
            />
            <path
              d="M0,160 C20,155 40,140 60,135 C80,130 100,145 120,120 C140,95 160,110 180,90 C200,70 220,85 240,60 C260,35 280,50 300,40 C320,30 340,45 360,35 C380,25 400,20 400,20"
              fill="none"
              stroke="#9b51e0"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-6 min-w-0">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[15px] font-semibold">Holdings</h3>
          <button className="text-[12px] text-[#9b51e0] font-medium hover:text-[#f27a33] transition-colors shrink-0">
            + Add Asset
          </button>
        </div>

        <div className="hidden sm:grid grid-cols-6 gap-4 text-[11px] text-gray-500 font-medium uppercase tracking-wider mb-3 px-3">
          <span className="col-span-2">Asset</span>
          <span>Value</span>
          <span>Change</span>
          <span>Allocation</span>
          <span className="text-right">Holdings</span>
        </div>

        <div className="space-y-2">
          {portfolio.map((asset) => (
            <div
              key={asset.symbol}
              className="flex items-center justify-between p-3 rounded-xl bg-[#111424] border border-[#1e293b] hover:border-[#9b51e0]/20 transition-colors cursor-pointer min-w-0 gap-2"
            >
              <div className="flex items-center space-x-3 min-w-0 shrink">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center overflow-hidden shrink-0 ${asset.bgClass}`}>
                  <img src={asset.logo} alt={asset.name} className={`${asset.bgClass ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-9 h-9 sm:w-10 sm:h-10'} object-contain`} />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] sm:text-[14px] font-semibold truncate">{asset.name}</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">{asset.symbol}</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center flex-1 justify-between min-w-0">
                <span className="text-[14px] font-semibold w-24">{asset.value}</span>
                <span className={`text-[13px] font-medium flex items-center w-20 ${asset.positive ? 'text-[#00e676]' : 'text-red-400'}`}>
                  {asset.positive ? <ArrowUpRight className="w-3 h-3 mr-0.5 shrink-0" /> : <ArrowDownRight className="w-3 h-3 mr-0.5 shrink-0" />}
                  {asset.change}
                </span>
                <span className="text-[13px] text-gray-400 w-16">{asset.allocation}</span>
                <span className="text-[13px] text-gray-400 text-right w-24">{asset.shares}</span>
              </div>

              <div className="sm:hidden text-right shrink-0">
                <p className="text-[13px] font-semibold">{asset.value}</p>
                <p className={`text-[11px] font-medium ${asset.positive ? 'text-[#00e676]' : 'text-red-400'}`}>{asset.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
