import { useState } from 'react';
import { ChevronDown, TrendingUp, Lock, Zap } from 'lucide-react';
import solanaLogo from '@/attached_assets/solana-sol-logo_(17)_1773564269930.png';
import usdcLogo from '@/attached_assets/usd-coin-usdc-logo_(5)_1773564245249.png';

const vaults = [
  {
    name: 'USDC',
    logo: usdcLogo,
    apy: '4.80%',
    protocol: 'YO Protocol',
    receiveToken: 'vyoUSD',
    tvl: '$24.5M',
    deposited: '$5,200.00',
    earned: '$249.60',
    status: 'Active',
  },
  {
    name: 'USDT',
    logo: usdcLogo,
    apy: '4.25%',
    protocol: 'YO Protocol',
    receiveToken: 'vyoUSDT',
    tvl: '$18.2M',
    deposited: '$0.00',
    earned: '$0.00',
    status: 'Available',
  },
  {
    name: 'SOL',
    logo: solanaLogo,
    apy: '7.20%',
    protocol: 'Marinade',
    receiveToken: 'mSOL',
    tvl: '$156.8M',
    deposited: '$2,150.00',
    earned: '$154.80',
    status: 'Active',
  },
];

export default function EarnPage() {
  const [selectedVault, setSelectedVault] = useState<number | null>(null);
  const [depositAmount, setDepositAmount] = useState('');

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto w-full min-w-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-5">
          <p className="text-gray-400 text-[12px] font-medium mb-1">Total Deposited</p>
          <p className="text-[1.5rem] font-bold">$7,350.00</p>
        </div>
        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-5">
          <p className="text-gray-400 text-[12px] font-medium mb-1">Total Earned</p>
          <p className="text-[1.5rem] font-bold text-[#00e676]">$404.40</p>
        </div>
        <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-5">
          <p className="text-gray-400 text-[12px] font-medium mb-1">Avg. APY</p>
          <p className="text-[1.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">5.42%</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-[15px] font-semibold">Yield Vaults</h3>
        {vaults.map((vault, i) => (
          <div key={vault.name} className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl overflow-hidden">
            <div
              className="p-5 cursor-pointer hover:bg-[#111424] transition-colors"
              onClick={() => setSelectedVault(selectedVault === i ? null : i)}
            >
              <div className="flex items-center justify-between min-w-0 gap-2">
                <div className="flex items-center space-x-3 min-w-0 shrink">
                  <img src={vault.logo} alt={vault.name} className="w-10 h-10 rounded-full shrink-0" />
                  <div className="min-w-0">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <p className="text-[14px] font-semibold">{vault.name} Vault</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        vault.status === 'Active'
                          ? 'bg-[#00e676]/10 text-[#00e676]'
                          : 'bg-gray-800 text-gray-400'
                      }`}>
                        {vault.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500">via {vault.protocol}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-[13px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">{vault.apy} APY</p>
                    <p className="text-[11px] text-gray-500">TVL {vault.tvl}</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-[13px] font-semibold">{vault.deposited}</p>
                    <p className="text-[11px] text-gray-500">Deposited</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${selectedVault === i ? 'rotate-180' : ''}`} />
                </div>
              </div>
              <div className="flex items-center space-x-6 mt-3 sm:hidden">
                <div>
                  <p className="text-[13px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">{vault.apy} APY</p>
                </div>
                <div>
                  <p className="text-[13px] font-semibold">{vault.deposited}</p>
                  <p className="text-[10px] text-gray-500">Deposited</p>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#00e676]">{vault.earned}</p>
                  <p className="text-[10px] text-gray-500">Earned</p>
                </div>
              </div>
            </div>

            {selectedVault === i && (
              <div className="border-t border-[#1e293b]/50 p-5 bg-[#0b0b10]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[13px] text-gray-400 mb-3">Deposit {vault.name}</p>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full bg-[#111424] border border-[#1e293b] rounded-xl px-4 py-3 text-white text-[15px] placeholder-gray-600 focus:outline-none focus:border-[#9b51e0]/50"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-[#9b51e0] font-semibold hover:text-[#f27a33] transition-colors">
                          MAX
                        </button>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#9b51e0] to-[#f27a33] text-white font-semibold py-3 rounded-xl text-[14px] hover:opacity-90 transition-opacity">
                      Deposit
                    </button>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[13px] text-gray-400">Projected Earnings</p>
                    <div className="bg-[#111424] border border-[#1e293b] rounded-xl p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[12px] text-gray-500">You receive</span>
                        <span className="text-[12px] text-gray-300">{vault.receiveToken}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[12px] text-gray-500">Monthly</span>
                        <span className="text-[12px] text-gray-300">{vault.deposited !== '$0.00' ? vault.earned : '---'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[12px] text-gray-500">Yearly (est.)</span>
                        <span className="text-[12px] text-[#00e676] font-medium">{vault.earned}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-[11px] text-gray-500">
                      <Lock className="w-3 h-3" />
                      <span>No lock-up period. Withdraw anytime.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#9b51e0]/10 to-[#f27a33]/10 border border-[#9b51e0]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <Zap className="w-5 h-5 text-[#f27a33]" />
          <div>
            <p className="text-[14px] font-semibold">Boost your earnings</p>
            <p className="text-[12px] text-gray-400">Stake SparkPay tokens to unlock higher APY tiers</p>
          </div>
        </div>
        <button className="bg-white/10 border border-white/20 text-white font-medium px-5 py-2 rounded-xl text-[13px] hover:bg-white/20 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}
