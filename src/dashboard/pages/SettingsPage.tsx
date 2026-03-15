import { useState } from 'react';
import { User, Shield, Download, Key, Smartphone, Globe, Copy, ExternalLink, Monitor, Clock } from 'lucide-react';

export default function SettingsPage() {
  const [twoFaEnabled, setTwoFaEnabled] = useState(true);

  const sessions = [
    { device: 'MacBook Pro', browser: 'Chrome 120', location: 'San Francisco, US', lastActive: 'Active now', current: true },
    { device: 'iPhone 15', browser: 'Safari Mobile', location: 'San Francisco, US', lastActive: '2 hours ago', current: false },
    { device: 'Windows Desktop', browser: 'Firefox 121', location: 'New York, US', lastActive: '3 days ago', current: false },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-6">
        <div className="flex items-center space-x-2 mb-6">
          <User className="w-5 h-5 text-[#9b51e0]" />
          <h3 className="text-[15px] font-semibold">Profile</h3>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9b51e0] to-[#f27a33] flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[16px] font-semibold mb-0.5">John Doe</h4>
            <p className="text-[13px] text-gray-400">john.doe@email.com</p>
          </div>
          <button className="text-[13px] text-[#9b51e0] font-medium hover:text-[#f27a33] transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-t border-[#1e293b]/50">
            <span className="text-[13px] text-gray-400">Wallet Address</span>
            <div className="flex items-center space-x-2">
              <span className="text-[13px] font-mono text-gray-300">7xK4...9f2D</span>
              <Copy className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-white transition-colors" />
              <ExternalLink className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-[#1e293b]/50">
            <span className="text-[13px] text-gray-400">Network</span>
            <span className="text-[13px] text-gray-300">Solana Mainnet</span>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-[#1e293b]/50">
            <span className="text-[13px] text-gray-400">Account Type</span>
            <span className="text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33] font-semibold">
              Platinum
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-[#1e293b]/50">
            <span className="text-[13px] text-gray-400">Member Since</span>
            <span className="text-[13px] text-gray-300">January 2026</span>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Shield className="w-5 h-5 text-[#00e676]" />
          <h3 className="text-[15px] font-semibold">Security</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#111424] border border-[#1e293b] rounded-xl">
            <div className="flex items-center space-x-3">
              <Key className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-[13px] font-medium">Two-Factor Authentication</p>
                <p className="text-[11px] text-gray-500">Add an extra layer of security to your account</p>
              </div>
            </div>
            <button
              onClick={() => setTwoFaEnabled(!twoFaEnabled)}
              className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${twoFaEnabled ? 'bg-[#00e676]' : 'bg-[#1e293b]'}`}
            >
              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${twoFaEnabled ? 'translate-x-5.5' : 'translate-x-0.5'}`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#111424] border border-[#1e293b] rounded-xl cursor-pointer hover:border-[#9b51e0]/20 transition-colors">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-[13px] font-medium">Passkey / Biometrics</p>
                <p className="text-[11px] text-gray-500">Sign in with fingerprint or face recognition</p>
              </div>
            </div>
            <span className="text-[11px] text-[#00e676] font-semibold bg-[#00e676]/10 px-2 py-0.5 rounded-full">Enabled</span>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-2">
            <Monitor className="w-5 h-5 text-gray-400" />
            <h3 className="text-[15px] font-semibold">Active Sessions</h3>
          </div>
          <button className="text-[12px] text-red-400 font-medium hover:text-red-300 transition-colors">
            Revoke All
          </button>
        </div>

        <div className="space-y-3">
          {sessions.map((session, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-[#111424] border border-[#1e293b] rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full shrink-0 ${session.current ? 'bg-[#00e676]' : 'bg-gray-600'}`}></div>
                <div>
                  <p className="text-[13px] font-medium">
                    {session.device}
                    {session.current && <span className="text-[10px] text-[#00e676] ml-2">(This device)</span>}
                  </p>
                  <p className="text-[11px] text-gray-500">{session.browser} - {session.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 text-[11px] text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{session.lastActive}</span>
                </div>
                {!session.current && (
                  <button className="text-[11px] text-red-400 font-medium hover:text-red-300 transition-colors">
                    Revoke
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0f0f13] border border-[#1e293b]/50 rounded-2xl p-6">
        <div className="flex items-center space-x-2 mb-5">
          <Download className="w-5 h-5 text-gray-400" />
          <h3 className="text-[15px] font-semibold">Export & Download</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button className="flex items-center space-x-3 p-4 bg-[#111424] border border-[#1e293b] rounded-xl hover:border-[#9b51e0]/20 transition-colors cursor-pointer">
            <Download className="w-4 h-4 text-gray-400" />
            <div className="text-left">
              <p className="text-[13px] font-medium">Transaction History</p>
              <p className="text-[11px] text-gray-500">Export as CSV</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-[#111424] border border-[#1e293b] rounded-xl hover:border-[#9b51e0]/20 transition-colors cursor-pointer">
            <Download className="w-4 h-4 text-gray-400" />
            <div className="text-left">
              <p className="text-[13px] font-medium">Tax Report</p>
              <p className="text-[11px] text-gray-500">Export as PDF</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-[#111424] border border-[#1e293b] rounded-xl hover:border-[#9b51e0]/20 transition-colors cursor-pointer">
            <Download className="w-4 h-4 text-gray-400" />
            <div className="text-left">
              <p className="text-[13px] font-medium">Account Statement</p>
              <p className="text-[11px] text-gray-500">Monthly summary</p>
            </div>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-[#111424] border border-[#1e293b] rounded-xl hover:border-[#9b51e0]/20 transition-colors cursor-pointer">
            <Globe className="w-4 h-4 text-gray-400" />
            <div className="text-left">
              <p className="text-[13px] font-medium">API Keys</p>
              <p className="text-[11px] text-gray-500">Manage integrations</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
