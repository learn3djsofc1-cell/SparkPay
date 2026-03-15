import { useState } from 'react';
import { Wifi, Eye, EyeOff, Snowflake, CreditCard, Copy, Plus } from 'lucide-react';

export default function CardsPage() {
  const [cardFrozen, setCardFrozen] = useState(false);
  const [showCvv, setShowCvv] = useState(false);

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto w-full min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className={`relative w-full aspect-[1.6/1] max-w-[420px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all ${cardFrozen ? 'opacity-60 grayscale' : ''}`}
            style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/50"></div>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)' }}></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-tr from-[#4c2a6e]/40 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-black tracking-widest text-sm lowercase">sparkpay</span>
                <Wifi className="w-6 h-6 text-gray-400 rotate-90" />
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-md"></div>
                <span className="text-gray-300 tracking-[0.3em] text-[11px] font-medium">P L A T I N U M</span>
              </div>

              <div>
                <p className="text-gray-300 text-[15px] tracking-[0.25em] font-mono mb-3">
                  **** **** **** 4829
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-0.5">Card Holder</p>
                    <p className="text-gray-300 text-[13px] font-medium">John Doe</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-0.5">Expires</p>
                    <p className="text-gray-300 text-[13px] font-medium">12/32</p>
                  </div>
                </div>
              </div>
            </div>

            {cardFrozen && (
              <div className="absolute inset-0 bg-[#05050a]/60 flex items-center justify-center z-20">
                <div className="flex items-center space-x-2 text-blue-400">
                  <Snowflake className="w-6 h-6" />
                  <span className="text-[15px] font-semibold">Card Frozen</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-5">
            <h3 className="text-[14px] font-semibold mb-4">Card Details</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-400">Card Number</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[13px] font-mono text-gray-300">**** **** **** 4829</span>
                  <Copy className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-400">Expiry</span>
                <span className="text-[13px] text-gray-300">12/32</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-400">CVV</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[13px] font-mono text-gray-300">{showCvv ? '847' : '***'}</span>
                  <button onClick={() => setShowCvv(!showCvv)} className="text-gray-500 cursor-pointer hover:text-white transition-colors">
                    {showCvv ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-400">Network</span>
                <span className="text-[13px] text-gray-300">Visa</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-400">Type</span>
                <span className="text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33] font-semibold">
                  Platinum Virtual
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-5">
            <h3 className="text-[14px] font-semibold mb-4">Card Controls</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Snowflake className="w-4 h-4 text-gray-400" />
                  <span className="text-[13px] text-gray-300">Freeze Card</span>
                </div>
                <button
                  onClick={() => setCardFrozen(!cardFrozen)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${cardFrozen ? 'bg-[#9b51e0]' : 'bg-[#1e293b]'}`}
                >
                  <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${cardFrozen ? 'translate-x-5.5' : 'translate-x-0.5'}`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-5">
        <h3 className="text-[14px] font-semibold mb-4">Spending Limits</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] text-gray-400">Daily Limit</span>
              <span className="text-[13px] text-gray-300">$1,200 / $5,000</span>
            </div>
            <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#9b51e0] to-[#f27a33] rounded-full" style={{ width: '24%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] text-gray-400">Monthly Limit</span>
              <span className="text-[13px] text-gray-300">$8,400 / $50,000</span>
            </div>
            <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#9b51e0] to-[#f27a33] rounded-full" style={{ width: '16.8%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-[#0f0f13] border border-dashed border-[#1e293b] rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 hover:border-[#9b51e0]/40 hover:bg-[#111424] transition-all cursor-pointer group">
        <div className="w-12 h-12 rounded-full bg-[#111424] border border-[#1e293b] flex items-center justify-center group-hover:border-[#9b51e0]/40 transition-colors">
          <Plus className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>
        <span className="text-[14px] text-gray-400 font-medium group-hover:text-white transition-colors">Request Physical Metal Card</span>
        <span className="text-[12px] text-gray-600">Premium titanium card shipped worldwide</span>
      </button>
    </div>
  );
}
