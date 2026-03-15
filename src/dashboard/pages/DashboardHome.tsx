import { ArrowUpRight, ArrowDown, Repeat, CreditCard, TrendingUp, ArrowDownLeft } from 'lucide-react';
import netflixLogo from '@/attached_assets/Netflix-Symbol_1773564776076.png';
import spotifyLogo from '@/attached_assets/Spotify_Primary_Logo_RGB_Green_1773564758391.png';
import bitcoinLogo from '@/attached_assets/bitcoin-btc-logo_(2)_1773565036546.png';
import solanaLogo from '@/attached_assets/solana-sol-logo_(17)_1773564269930.png';
import usdcLogo from '@/attached_assets/usd-coin-usdc-logo_(5)_1773564245249.png';

const quickActions = [
  { label: 'Send', icon: ArrowUpRight, color: 'from-[#9b51e0] to-[#7c3aed]' },
  { label: 'Receive', icon: ArrowDownLeft, color: 'from-[#3b82f6] to-[#2563eb]' },
  { label: 'Swap', icon: Repeat, color: 'from-[#f27a33] to-[#ea580c]' },
  { label: 'Pay', icon: CreditCard, color: 'from-[#00e676] to-[#16a34a]' },
];

const assets = [
  { name: 'Bitcoin', symbol: 'BTC', logo: bitcoinLogo, balance: '$24,150.00', amount: '0.2415 BTC', change: '+2.25%', positive: true },
  { name: 'Solana', symbol: 'SOL', logo: solanaLogo, balance: '$12,403.00', amount: '82.5 SOL', change: '+5.12%', positive: true },
  { name: 'USDC', symbol: 'USDC', logo: usdcLogo, balance: '$7,350.00', amount: '7,350 USDC', change: '+0.01%', positive: true },
];

const transactions = [
  { name: 'Netflix', logo: netflixLogo, type: 'Subscription', date: 'Jan 21, 2026', amount: '-$15.99', negative: true },
  { name: 'Spotify', logo: spotifyLogo, type: 'Subscription', date: 'Jan 21, 2026', amount: '-$9.99', negative: true },
  { name: 'SOL Staking Reward', logo: solanaLogo, type: 'Reward', date: 'Jan 20, 2026', amount: '+$42.50', negative: false },
  { name: 'BTC Purchase', logo: bitcoinLogo, type: 'Buy', date: 'Jan 19, 2026', amount: '-$500.00', negative: true },
];

export default function DashboardHome() {
  return (
    <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto w-full min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-6">
          <p className="text-gray-400 text-[13px] font-medium mb-1">Total Balance</p>
          <div className="flex items-end space-x-3 mb-1">
            <h2 className="text-[2.5rem] sm:text-[3rem] font-bold tracking-tight">$43,903</h2>
            <div className="flex items-center text-[#00e676] text-[13px] font-semibold mb-2">
              <TrendingUp className="w-3.5 h-3.5 mr-1" />
              +3.24%
            </div>
          </div>
          <p className="text-gray-500 text-[12px] mb-6">Updated just now</p>

          <div className="flex space-x-1 h-2 rounded-full overflow-hidden mb-3">
            <div className="bg-[#9b51e0] rounded-full" style={{ width: '55%' }}></div>
            <div className="bg-[#f27a33] rounded-full" style={{ width: '28%' }}></div>
            <div className="bg-[#00e676] rounded-full" style={{ width: '17%' }}></div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px]">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#9b51e0]"></div>
              <span className="text-gray-400">BTC $24,150</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f27a33]"></div>
              <span className="text-gray-400">SOL $12,403</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00e676]"></div>
              <span className="text-gray-400">USDC $7,350</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-6">
          <p className="text-gray-400 text-[13px] font-medium mb-4">Quick Actions</p>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-[#111424] border border-[#1e293b] hover:border-[#9b51e0]/30 hover:bg-[#1a1f35] transition-all group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="text-[12px] text-gray-300 font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[15px] font-semibold">Assets</h3>
            <span className="text-[12px] text-gray-500 font-medium cursor-pointer hover:text-gray-300 transition-colors">View all</span>
          </div>
          <div className="space-y-3">
            {assets.map((asset) => (
              <div
                key={asset.symbol}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#111424] border border-[#1e293b] hover:border-[#9b51e0]/20 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <img src={asset.logo} alt={asset.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-[14px] font-semibold">{asset.name}</p>
                    <p className="text-[11px] text-gray-500 font-medium">{asset.amount}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-semibold">{asset.balance}</p>
                  <p className={`text-[11px] font-medium ${asset.positive ? 'text-[#00e676]' : 'text-red-400'}`}>
                    {asset.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[15px] font-semibold">Recent Activity</h3>
            <span className="text-[12px] text-gray-500 font-medium cursor-pointer hover:text-gray-300 transition-colors">View all</span>
          </div>
          <div className="space-y-4">
            {transactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#111424] border border-[#1e293b] flex items-center justify-center overflow-hidden shrink-0">
                    <img src={tx.logo} alt={tx.name} className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium">{tx.name}</p>
                    <p className="text-[10px] text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <span className={`text-[13px] font-semibold ${tx.negative ? 'text-white' : 'text-[#00e676]'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-5 min-w-0 gap-3">
          <h3 className="text-[15px] font-semibold shrink-0">Portfolio Performance</h3>
          <div className="flex space-x-1 overflow-x-auto no-scrollbar shrink min-w-0">
            {['1D', '1W', '1M', '3M', '1Y'].map((period, i) => (
              <button
                key={period}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-[12px] font-medium transition-colors whitespace-nowrap shrink-0 ${
                  i === 2 ? 'bg-[#9b51e0]/20 text-white border border-[#9b51e0]/30' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="h-48 flex items-end space-x-1 px-2">
          {Array.from({ length: 30 }).map((_, i) => {
            const h = 30 + Math.sin(i * 0.3) * 25 + (i / 30) * 35 + Math.sin(i * 0.7) * 10;
            return (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-[#9b51e0]/60 to-[#9b51e0]/20 hover:from-[#9b51e0] hover:to-[#9b51e0]/40 transition-colors cursor-pointer"
                style={{ height: `${Math.min(95, Math.max(10, h))}%` }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
