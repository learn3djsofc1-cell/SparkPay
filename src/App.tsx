import React, { useState, useEffect, useRef } from 'react';
import { Volume2, ChevronRight, Signal, Wifi, Battery, MoreVertical, ChevronLeft, Fingerprint, Menu, ChevronDown, X, ArrowLeftRight, ArrowUpRight, ArrowDown, Repeat, Plus, TrendingUp, Bitcoin, Apple } from 'lucide-react';
import sparkPayLogo from '@/attached_assets/Frame_1171275126_1773561837325.png';
import solanaLogo from '@/attached_assets/solana-sol-logo_(17)_1773564269930.png';
import usdcLogo from '@/attached_assets/usd-coin-usdc-logo_(5)_1773564245249.png';
import netflixLogo from '@/attached_assets/Netflix-Symbol_1773564776076.png';
import spotifyLogo from '@/attached_assets/Spotify_Primary_Logo_RGB_Green_1773564758391.png';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [textReveal, setTextReveal] = useState(0);
  const overviewTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      if (overviewTextRef.current) {
        const rect = overviewTextRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const start = windowHeight * 0.85;
        const end = windowHeight * 0.25;
        const progress = Math.max(0, Math.min(1, (start - elementCenter) / (start - end)));
        setTextReveal(progress);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#ff3366]/15 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#0066ff]/15 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-3">
          <img src={sparkPayLogo} alt="SparkPay" className="w-10 h-10" />
          <span className="text-4xl font-black tracking-tighter lowercase">SparkPay</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-gray-100">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-colors">
            <span>Open dApp</span>
            {/* Custom Play Icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="5" y1="3" x2="19" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4285F4" />
                  <stop offset="0.33" stopColor="#34A853" />
                  <stop offset="0.66" stopColor="#FBBC05" />
                  <stop offset="1" stopColor="#EA4335" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          {/* Hamburger Menu */}
          <button className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-800 bg-[#111] hover:bg-[#1a1a1a] transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Main Hero */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-10 pb-32 px-4">
        
        {/* Background Gradients for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] pointer-events-none z-0 opacity-50 blur-[120px]">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#f43f5e] rounded-full mix-blend-screen"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3b82f6] rounded-full mix-blend-screen"></div>
        </div>

        {/* Phone Mockup Container */}
        <div 
          className="relative w-full max-w-[340px] h-[700px] mb-[-320px] z-10 transition-transform duration-300 ease-out" 
          style={{ 
            perspective: '1200px',
            transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` 
          }}
        >
          <div className="w-full h-full animate-float">
            <div 
              className="w-full h-full rounded-[3.5rem] border-[10px] border-[#111] bg-[#050b14] overflow-hidden relative shadow-2xl"
              style={{ 
                transform: 'rotateX(15deg) rotateY(-12deg) rotateZ(4deg) scale(1.05)',
                transformStyle: 'preserve-3d',
                boxShadow: '-20px 40px 60px -10px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255,255,255,0.05)'
              }}
            >
            {/* Inner Phone Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1536] via-[#050b14] to-black opacity-80"></div>

            {/* Phone UI */}
            <div className="relative z-10 px-6 py-5 h-full flex flex-col">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-[11px] font-medium text-white mb-8">
                <span>9:41</span>
                <div className="flex items-center space-x-1.5">
                  <Signal className="w-3.5 h-3.5" />
                  <Wifi className="w-3.5 h-3.5" />
                  <Battery className="w-4 h-4" />
                </div>
              </div>

              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-1 text-gray-400 hover:text-white cursor-pointer transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                  <span className="text-[15px] font-medium">Net worth</span>
                </div>
                <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
              </div>

              {/* Balance */}
              <div className="mb-10">
                <p className="text-gray-400 text-[15px] mb-1 font-medium">Total Assets</p>
                <h1 className="text-[2.75rem] font-semibold tracking-tight text-white">$43,903</h1>
              </div>

              {/* Explore */}
              <div className="flex-1">
                <h2 className="text-gray-300 text-[15px] font-medium mb-4">Explore</h2>
                
                {/* Card 1 */}
                <div className="bg-[#111424] border border-[#2a2d3d] rounded-2xl p-5 mb-4 relative overflow-hidden group cursor-pointer">
                  <div className="relative z-10 w-[60%]">
                    <p className="text-[15px] text-gray-300 mb-6 leading-snug font-medium">Claim your exclusive<br/>SparkPay Card!</p>
                    <span className="text-[13px] text-gray-400 underline decoration-gray-600 underline-offset-4 group-hover:text-white transition-colors">Grab now</span>
                  </div>
                  {/* Abstract Card Graphic */}
                  <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-40 h-40 transform rotate-[15deg] transition-transform group-hover:rotate-[10deg]">
                     <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-xl border border-gray-700 shadow-xl relative overflow-hidden">
                        {/* Card details */}
                        <div className="absolute top-3 left-3 text-[10px] font-bold text-gray-400 tracking-widest">SparkPay</div>
                        <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 bg-black/40"></div>
                        <div className="absolute bottom-3 right-3 text-[8px] text-gray-500">PLATINUM</div>
                     </div>
                  </div>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#111424] border border-[#2a2d3d] rounded-2xl p-4 h-32 relative overflow-hidden cursor-pointer group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-700 to-transparent opacity-10 rounded-bl-full transition-opacity group-hover:opacity-20"></div>
                    <p className="text-[11px] text-gray-500 mb-1 font-medium">Platinum</p>
                    <p className="text-[13px] text-gray-300 font-medium">Your EIG is...</p>
                  </div>
                  <div className="bg-[#111424] border border-[#2a2d3d] rounded-2xl p-4 h-32 cursor-pointer group">
                    <div className="bg-[#1a2342] text-[#6b8cff] text-[11px] font-semibold px-2.5 py-1 rounded-full inline-block mb-3">18% APY</div>
                    <p className="text-[13px] text-gray-300 font-medium">Earn more interest</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Fade Mask */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none"></div>
          </div>
        </div>
        </div>

        {/* Text Content */}
        <div 
          className="relative z-20 text-center mt-16 max-w-4xl mx-auto transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
        >
          <div className="flex justify-center mb-8">
            <img src={sparkPayLogo} alt="SparkPay" className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <h1 className="text-[3.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] font-bold tracking-tight mb-12 uppercase">
            The Global Neobank<br />Built Onchain
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-[#8A2BE2] to-[#3b52ff] hover:opacity-90 text-white px-7 py-3.5 rounded-full text-[15px] font-bold flex items-center space-x-2 transition-all w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(138,43,226,0.4)]">
              <span>Start Earning</span>
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button className="bg-[#050505] hover:bg-[#111] border border-[#4a2b75] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold flex items-center space-x-2 transition-all w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(74,43,117,0.3)]">
              <span>Claim your Card</span>
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </main>

      {/* Section 2: Overview */}
      <section id="overview" className="relative z-10 py-32 px-4 flex flex-col items-center justify-center min-h-screen bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-24 relative" ref={overviewTextRef}>
            {/* Base Text (Dark) */}
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.2] font-semibold tracking-tight text-[#1a1a1a] mb-6">
              Own your wealth, no intermediaries necessary.<br />
              Because when you hold the keys, you stay in control.
            </h2>
            
            {/* Revealed Text (scroll-driven left-to-right) */}
            <h2 
              aria-hidden="true"
              className="absolute inset-0 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.2] font-semibold tracking-tight text-white mb-6 pointer-events-none"
              style={{
                maskImage: `linear-gradient(to right, black 0%, black ${textReveal * 100}%, transparent ${textReveal * 100 + 8}%)`,
                WebkitMaskImage: `linear-gradient(to right, black 0%, black ${textReveal * 100}%, transparent ${textReveal * 100 + 8}%)`,
              }}
            >
              Own your wealth, no intermediaries necessary.<br />
              Because when you hold the <span className="bg-gradient-to-r from-[#9b51e0] via-[#d946ef] to-[#f27a33] bg-clip-text text-transparent">keys,</span> you stay in control.
            </h2>
          </div>
          
          {/* Fingerprint Scanner */}
          <div className="relative w-36 h-36 mx-auto rounded-full border border-gray-800/60 bg-[#050505] flex items-center justify-center overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,1)]">
            
            {/* SVG Gradient Definition */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="fingerprint-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9b51e0" />
                  <stop offset="50%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#f27a33" />
                </linearGradient>
              </defs>
            </svg>

            {/* Scanner Line */}
            <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#6b8cff] to-transparent shadow-[0_0_15px_3px_rgba(107,140,255,0.4)] z-20 animate-scan"></div>
            
            {/* Fingerprint Icon */}
            <Fingerprint className="w-16 h-16 relative z-10" stroke="url(#fingerprint-grad)" strokeWidth={1.5} />
            
            {/* Subtle background dots */}
            <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-gray-600 rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section 3: Earn */}
      <section className="relative z-10 py-32 px-4 min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000, #2a1b38, #8b5a8e, #e8d5e5, #ffffff)' }}>
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        ></div>

        {/* Diamonds */}
        <div className="absolute top-[40%] left-[38%] w-6 h-6 bg-white/20 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute top-[35%] right-[12%] w-12 h-12 bg-white/20 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute bottom-[35%] right-[20%] w-8 h-8 bg-black/10 rotate-45 backdrop-blur-sm"></div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[320px] bg-[#020817] border border-[#2e3c5ea0] rounded-[2.5rem] shadow-[0_0_80px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col">
              {/* Top Bar */}
              <div className="flex items-center justify-between px-5 pt-6 pb-4">
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-1.5 bg-[#131b33] border border-[#2a3454] rounded-full px-2.5 py-1.5 cursor-pointer">
                    <img src={solanaLogo} alt="Solana" className="w-3.5 h-3.5" />
                    <span className="text-[11px] text-white font-medium">Solana</span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-1.5 bg-[#131b33] border border-[#2a3454] rounded-full px-2.5 py-1.5 cursor-pointer">
                    <img src={solanaLogo} alt="Solana" className="w-3.5 h-3.5" />
                    <span className="text-[11px] text-white font-medium">7xK...9f2D</span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
                <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
              </div>

              {/* Tabs */}
              <div className="flex space-x-6 px-6 border-b border-[#1e293b]">
                <div className="text-white text-[13px] font-semibold pb-3 border-b-2 border-white cursor-pointer">Earn</div>
                <div className="text-gray-500 hover:text-gray-300 transition-colors text-[13px] font-medium pb-3 cursor-pointer">Manage</div>
                <div className="text-gray-500 hover:text-gray-300 transition-colors text-[13px] font-medium pb-3 cursor-pointer">Activity</div>
              </div>

              <div className="px-5 py-6 space-y-6 pb-24">
                {/* VAULT */}
                <div>
                  <h3 className="text-[10px] font-bold text-gray-400 tracking-wider mb-2">VAULT</h3>
                  <div className="bg-[#0b1121] border border-[#1e293b] rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-2xl text-white font-medium">10</span>
                      <div className="flex items-center space-x-2 cursor-pointer bg-[#131b33] hover:bg-[#1e293b] transition-colors rounded-full pl-1 pr-2 py-1">
                        <img src={solanaLogo} alt="Solana" className="w-6 h-6 rounded-full border-2 border-[#0b1121]" />
                        <span className="text-white text-[13px] font-medium">SOL</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">$0</span>
                      <span className="text-[10px] text-gray-400">0 SOL Available</span>
                    </div>
                  </div>
                </div>

                {/* EARN */}
                <div>
                  <h3 className="text-[10px] font-bold text-gray-400 tracking-wider mb-2">EARN</h3>
                  <div className="bg-[#0b1121] border border-[#1e293b] rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl text-white font-medium">4.80%</span>
                      <div className="flex items-center space-x-2 cursor-pointer bg-[#131b33] hover:bg-[#1e293b] transition-colors rounded-full pl-1 pr-2 py-1">
                        <img src={usdcLogo} alt="USDC" className="w-6 h-6 rounded-full border-2 border-[#0b1121]" />
                        <span className="text-white text-[13px] font-medium">USDC</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="bg-[#1e293b]/40 rounded-lg p-2.5 mb-4">
                      <p className="text-[11px] text-gray-400">
                        You'll receive <span className="text-white font-medium">vyoUSD</span> via YO Protocol
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] text-gray-400">Yearly</span>
                        <span className="text-[11px] text-gray-300">0 USDC</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] text-gray-400">Monthly</span>
                        <span className="text-[11px] text-gray-300">0 USDC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="p-5 bg-gradient-to-t from-[#020817] via-[#020817] to-transparent absolute bottom-0 left-0 right-0 z-10">
                <button className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3.5 rounded-xl text-[15px] transition-colors">
                  Deposit
                </button>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="max-w-md md:pl-8">
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-bold mb-6 text-black">
              Web dApp <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-gray-300">Dashboard</span>
            </h2>
            <p className="text-gray-500 text-[17px] font-medium mb-6">
              Manage your finances from a single, powerful interface.
            </p>
            <ul className="text-gray-600 text-[15px] space-y-2">
              <li>• Unified Dashboard Home</li>
              <li>• Cards Panel</li>
              <li>• Earn & Rewards Center</li>
              <li>• Invest Hub</li>
              <li>• Borrow Desk</li>
              <li>• Security & Sessions</li>
              <li>• Exports & Integrations</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Section 4: Spend */}
      <section className="relative z-10 py-32 px-4 min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1a0b2e, #8b5a8e, #e8d5e5, #ffffff)' }}>
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        ></div>

        {/* Diamonds */}
        <div className="absolute top-[30%] left-[35%] w-8 h-8 bg-white/10 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute top-[25%] right-[15%] w-16 h-16 bg-white/10 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute bottom-[40%] right-[22%] w-6 h-6 bg-black/5 rotate-45 backdrop-blur-sm"></div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[320px] bg-[#05050a] border border-[#2e3c5ea0] rounded-[2.5rem] shadow-[0_0_80px_rgba(155,81,224,0.3),0_0_80px_rgba(242,122,51,0.2)] overflow-hidden flex flex-col p-5">
              
              {/* Card */}
              <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#000000] border border-gray-700 relative overflow-hidden mb-6 p-4 flex flex-col justify-between shadow-lg">
                {/* Abstract background for card */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-500 via-gray-900 to-black"></div>
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-gray-300 font-black tracking-widest text-sm lowercase">SparkPay</span>
                </div>
                
                <div className="relative z-10 flex items-center justify-between mt-4">
                  <div className="w-8 h-6 bg-gradient-to-br from-gray-300 to-gray-500 rounded-md opacity-90"></div> {/* Chip */}
                  <span className="text-gray-300 tracking-[0.3em] text-[10px] font-medium ml-4">P L A T I N U M</span>
                  <Wifi className="w-5 h-5 text-gray-400 rotate-90" />
                </div>
                
                <div className="relative z-10 flex justify-between items-end mt-auto">
                  <span className="text-gray-400 text-[9px] tracking-widest uppercase">John Doe</span>
                  <span className="text-gray-400 text-[9px] tracking-widest">12/32</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between px-2 mb-8">
                <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                  <div className="w-11 h-11 rounded-full bg-[#13131a] border border-gray-800 flex items-center justify-center group-hover:bg-[#1a1a24] transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">Earn</span>
                </div>
                <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                  <div className="w-11 h-11 rounded-full bg-[#13131a] border border-gray-800 flex items-center justify-center group-hover:bg-[#1a1a24] transition-colors">
                    <ArrowDown className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">Trade</span>
                </div>
                <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                  <div className="w-11 h-11 rounded-full bg-[#13131a] border border-gray-800 flex items-center justify-center group-hover:bg-[#1a1a24] transition-colors">
                    <ArrowLeftRight className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">Pay</span>
                </div>
                <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                  <div className="w-11 h-11 rounded-full bg-[#13131a] border border-gray-800 flex items-center justify-center group-hover:bg-[#1a1a24] transition-colors">
                    <Repeat className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">Cashback</span>
                </div>
              </div>

              {/* Balance */}
              <div className="mb-5">
                <h2 className="text-[1.75rem] font-semibold text-white mb-0.5">$4,200</h2>
                <p className="text-[10px] text-gray-500 font-medium">Your Balance</p>
              </div>

              {/* Progress Bar */}
              <div className="flex space-x-1 mb-3">
                <div className="h-1 bg-[#9b51e0] rounded-full w-[45%]"></div>
                <div className="h-1 bg-[#f27a33] rounded-full w-[30%]"></div>
                <div className="h-1 bg-[#00e676] rounded-full w-[25%]"></div>
              </div>
              
              <div className="flex justify-between mb-8">
                <div>
                  <p className="text-white text-[11px] font-semibold">$2,200</p>
                  <p className="text-gray-600 text-[9px]">Trade</p>
                </div>
                <div>
                  <p className="text-white text-[11px] font-semibold">$1000</p>
                  <p className="text-gray-600 text-[9px]">Trade</p>
                </div>
                <div>
                  <p className="text-white text-[11px] font-semibold">$800</p>
                  <p className="text-gray-600 text-[9px]">Trade</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex space-x-6 border-b border-[#1e293b] mb-4">
                <div className="text-gray-500 hover:text-gray-300 transition-colors text-[12px] font-medium pb-3 cursor-pointer">Trades</div>
                <div className="text-white text-[12px] font-semibold pb-3 border-b-2 border-white cursor-pointer">Cashbacks</div>
                <div className="text-gray-500 hover:text-gray-300 transition-colors text-[12px] font-medium pb-3 cursor-pointer">Spends</div>
              </div>

              {/* Transactions */}
              <div>
                <p className="text-[9px] text-gray-500 font-medium mb-4">21 JAN, 2026</p>
                
                <div className="flex items-center justify-between mb-5 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                      <img src={netflixLogo} alt="Netflix" className="w-9 h-9 object-cover" />
                    </div>
                    <div>
                      <p className="text-white text-[12px] font-medium group-hover:text-gray-200 transition-colors">Netflix</p>
                      <p className="text-gray-500 text-[9px]">Earned at 06:04 pm</p>
                    </div>
                  </div>
                  <span className="text-white text-[12px] font-semibold">$220.50</span>
                </div>

                <div className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center overflow-hidden shrink-0">
                      <img src={spotifyLogo} alt="Spotify" className="w-9 h-9 object-cover" />
                    </div>
                    <div>
                      <p className="text-white text-[12px] font-medium group-hover:text-gray-200 transition-colors">Spotify</p>
                      <p className="text-gray-500 text-[9px]">Earned at 09:22 pm</p>
                    </div>
                  </div>
                  <span className="text-white text-[12px] font-semibold">$220.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="max-w-md md:pl-8">
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-bold mb-6 text-black">
              A simple, high-level overview of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-transparent">SparkPay ecosystem</span>
            </h2>
            <ul className="text-gray-600 text-[15px] space-y-3 mb-10">
              <li>• Sign up on the SparkPay dApp and create a self-custodial wallet or link an existing one.</li>
              <li>• Issue a virtual card instantly from the dashboard or request a metal card.</li>
              <li>• Top up with crypto - select asset, confirm the swap, and balance updates in real time.</li>
              <li>• Spend worldwide using card rails or send funds peer-to-peer.</li>
              <li>• Earn & invest - idle funds flow into chosen yield strategies; investments and loans are recorded onchain.</li>
              <li>• Grow credit - repay onchain loans and perform qualifying actions to increase FiScore.</li>
            </ul>
            
            {/* Brand Names */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="font-bold text-[13px] text-black tracking-widest">STARBUCKS</span>
              <span className="font-black text-xl text-black tracking-tighter">NETFLIX</span>
              <span className="font-medium text-xl text-black tracking-tight">Uber</span>
              <span className="font-bold text-[15px] text-black tracking-tight">airbnb</span>
              <span className="font-bold text-[15px] text-black tracking-tight">Spotify</span>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Invest */}
      <section className="relative z-10 py-32 px-4 min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1a0b2e, #8b5a8e, #e8d5e5, #ffffff)' }}>
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        ></div>

        {/* Diamonds */}
        <div className="absolute top-[30%] left-[35%] w-8 h-8 bg-white/10 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute top-[25%] right-[15%] w-16 h-16 bg-white/10 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute bottom-[40%] right-[22%] w-6 h-6 bg-black/5 rotate-45 backdrop-blur-sm"></div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-end relative" style={{ perspective: '1200px' }}>
            {/* Orange Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[340px] h-[680px] bg-[#f27a33]/30 blur-[60px] rounded-[3rem] z-0 pointer-events-none" style={{ transform: 'rotateY(15deg) rotateZ(-5deg) translate(-50%, -50%)' }}></div>
            
            <div 
              className="relative w-full max-w-[320px] h-[650px] bg-[#05050a] border-[8px] border-[#111] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col z-10"
              style={{ transform: 'rotateY(15deg) rotateZ(-5deg)', transformStyle: 'preserve-3d' }}
            >
              {/* Inner Phone Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#05050a] to-black opacity-90"></div>

              {/* Phone UI */}
              <div className="relative z-10 px-5 py-5 h-full flex flex-col">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[11px] font-medium text-white mb-6">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1.5">
                    <Signal className="w-3.5 h-3.5" />
                    <Wifi className="w-3.5 h-3.5" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <ChevronLeft className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                  <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                </div>

                {/* Balance */}
                <div className="mb-8 flex items-end space-x-3">
                  <h1 className="text-[2.75rem] font-semibold tracking-tight text-white leading-none">$12,403</h1>
                  <div className="flex items-center text-[#00e676] text-[11px] font-bold mb-2">
                    <span>+2.5%</span>
                    <TrendingUp className="w-3 h-3 ml-0.5" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between px-2 mb-10">
                  <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-gray-700 flex items-center justify-center group-hover:bg-[#2a2a3e] transition-colors">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium">Buy</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-gray-700 flex items-center justify-center group-hover:bg-[#2a2a3e] transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium">Send</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-gray-700 flex items-center justify-center group-hover:bg-[#2a2a3e] transition-colors">
                      <ArrowDown className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium">Receive</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a2e] border border-gray-700 flex items-center justify-center group-hover:bg-[#2a2a3e] transition-colors">
                      <Repeat className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium">Swap</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-6 border-b border-[#1e293b] mb-4">
                  <div className="text-white text-[13px] font-semibold pb-3 border-b-2 border-white cursor-pointer">Assets</div>
                  <div className="text-gray-500 hover:text-gray-300 transition-colors text-[13px] font-medium pb-3 cursor-pointer">Transactions</div>
                </div>

                {/* Asset List */}
                <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3">
                  {/* Bitcoin */}
                  <div className="bg-[#0b1121] border border-[#1e293b] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#131b33] transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-[#f7931a] flex items-center justify-center">
                        <Bitcoin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-semibold">Bitcoin</p>
                        <p className="text-gray-500 text-[10px] font-medium">BTC</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-[13px] font-semibold">$955.52</p>
                      <p className="text-[#00e676] text-[10px] font-medium">+2.25%</p>
                    </div>
                  </div>

                  {/* Tesla */}
                  <div className="bg-[#0b1121] border border-[#1e293b] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#131b33] transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black font-bold text-lg">T</span>
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-semibold">Tesla</p>
                        <p className="text-gray-500 text-[10px] font-medium">TSLA</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-[13px] font-semibold">$595.52</p>
                      <p className="text-[#00e676] text-[10px] font-medium">+10.25%</p>
                    </div>
                  </div>

                  {/* Apple */}
                  <div className="bg-[#0b1121] border border-[#1e293b] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#131b33] transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Apple className="w-6 h-6 text-black" fill="currentColor" />
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-semibold">Apple</p>
                        <p className="text-gray-500 text-[10px] font-medium">AAPL</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-[13px] font-semibold">$155.22</p>
                      <p className="text-[#00e676] text-[10px] font-medium">+1.51%</p>
                    </div>
                  </div>

                  {/* Gold ETF */}
                  <div className="bg-[#0b1121] border border-[#1e293b] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#131b33] transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-[#f2a900] flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full flex flex-col justify-center items-center space-y-0.5 opacity-80">
                           <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                           <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                           <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-semibold">Gold ETF</p>
                        <p className="text-gray-500 text-[10px] font-medium">GLD</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-[13px] font-semibold">$112.62</p>
                      <p className="text-[#00e676] text-[10px] font-medium">+7.29%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="max-w-md md:pl-8">
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-bold mb-6 text-black">
              Enterprise-grade security with <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-transparent">default self-custody</span>
            </h2>
            <ul className="text-gray-600 text-[15px] space-y-3 mb-10">
              <li>• Default self-custody keeps keys under user control; custody is optional and transparent.</li>
              <li>• Cryptographic proofs connect dashboard actions to onchain TXs for auditability.</li>
              <li>• Privacy controls let users choose which onchain behaviors contribute to FiScore.</li>
              <li>• KYC is opt-in for fiat rails and higher limits; lower-privacy tiers remain functional where legally allowed.</li>
              <li>• Enterprise-grade encryption for secrets, hardware wallet compatibility, and optional HSM for custodied solutions.</li>
            </ul>
            
            {/* Logos */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-80 grayscale">
              <span className="font-bold text-2xl tracking-tighter">T</span>
              <div className="w-4 h-6 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 50% 100%, 0% 25%)' }}></div>
              <span className="font-bold text-xl tracking-tight">amazon</span>
              <span className="font-bold text-xl tracking-tight">Google</span>
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center"><Bitcoin className="w-4 h-4 text-white" /></div>
              <span className="font-black text-xl tracking-tighter">NETFLIX</span>
              <div className="flex flex-col space-y-1">
                <div className="w-6 h-1 bg-black rounded-full"></div>
                <div className="w-6 h-1 bg-black rounded-full"></div>
                <div className="w-6 h-1 bg-black rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: Borrow */}
      <section className="relative z-10 py-32 px-4 min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1a0b2e, #8b5a8e, #e8d5e5, #ffffff)' }}>
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        ></div>

        {/* Diamonds */}
        <div className="absolute top-[30%] left-[35%] w-8 h-8 bg-white/10 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute top-[25%] right-[15%] w-16 h-16 bg-white/10 rotate-45 backdrop-blur-sm"></div>
        <div className="absolute bottom-[40%] right-[22%] w-6 h-6 bg-black/5 rotate-45 backdrop-blur-sm"></div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-end relative" style={{ perspective: '1200px' }}>
            {/* Orange Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[340px] h-[680px] bg-[#f27a33]/30 blur-[60px] rounded-[3rem] z-0 pointer-events-none" style={{ transform: 'rotateY(15deg) rotateZ(-5deg) translate(-50%, -50%)' }}></div>
            
            <div 
              className="relative w-full max-w-[320px] h-[650px] bg-[#05050a] border-[8px] border-[#111] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col z-10"
              style={{ transform: 'rotateY(15deg) rotateZ(-5deg)', transformStyle: 'preserve-3d' }}
            >
              {/* Inner Phone Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black opacity-90"></div>

              {/* Phone UI */}
              <div className="relative z-10 px-5 py-5 h-full flex flex-col">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[11px] font-medium text-white mb-6">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1.5">
                    <Signal className="w-3.5 h-3.5" />
                    <Wifi className="w-3.5 h-3.5" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-2 text-white cursor-pointer">
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-[13px] font-semibold tracking-wide">DASHBOARD</span>
                  </div>
                  <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                </div>

                {/* Score */}
                <div className="mb-8">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-[2rem] font-bold text-white">FIS</span>
                    <span className="text-[2rem] font-light text-white">64%</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium tracking-widest mt-1 uppercase">Your Score</p>
                </div>

                {/* Chart Area */}
                <div className="relative h-40 mb-10 mt-4">
                  {/* Background Graph Line (SVG) */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,80 L20,80 L30,40 L50,40 L60,20 L80,20 L90,60 L100,60" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                    <path d="M0,80 L20,80 L30,40 L50,40 L60,20 L80,20 L90,60 L100,60 L100,100 L0,100 Z" fill="url(#chart-grad)" opacity="0.1" />
                    <defs>
                      <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Bar Chart */}
                  <div className="absolute bottom-6 left-0 right-0 h-10 flex items-end space-x-[2px] px-2">
                    {/* Generate bars */}
                    {Array.from({ length: 40 }).map((_, i) => {
                      const height = 20 + Math.random() * 30 + (i > 20 ? 20 : 0);
                      const isGold = i > 15 && i < 30;
                      const isPlatinum = i >= 30;
                      return (
                        <div 
                          key={i} 
                          className="flex-1 rounded-t-sm opacity-80"
                          style={{ 
                            height: `${height}%`,
                            backgroundColor: isPlatinum ? '#e2e8f0' : isGold ? '#f59e0b' : '#3b82f6'
                          }}
                        ></div>
                      );
                    })}
                  </div>

                  {/* My Score Indicator */}
                  <div className="absolute bottom-16 left-[60%] flex flex-col items-center">
                    <span className="text-[8px] text-white font-bold mb-1">MY SCORE</span>
                    <div className="w-0.5 h-10 bg-white"></div>
                  </div>

                  {/* Labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-[8px] font-bold text-gray-500 tracking-widest">
                    <span>SILVER</span>
                    <span>GOLD</span>
                    <span>PLATINUM</span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col items-center text-center mt-auto mb-16 relative z-20">
                  <button className="border border-[#3b82f6] text-[#3b82f6] px-6 py-1.5 rounded-full text-[13px] font-medium mb-6 hover:bg-[#3b82f6]/10 transition-colors">
                    Borrow
                  </button>
                  <h3 className="text-white text-[17px] font-medium leading-snug mb-4">
                    You are eligible for a<br />low-interest loan
                  </h3>
                  <a href="#" className="text-gray-400 text-[13px] underline decoration-gray-600 underline-offset-4 hover:text-white transition-colors">
                    Unlock
                  </a>
                </div>

                {/* Floating Coins */}
                <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10">
                  {/* Aave-like coin */}
                  <div className="absolute left-6 bottom-20 w-12 h-12 rounded-full bg-gradient-to-br from-[#a5b4fc] to-[#818cf8] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)] transform -rotate-12" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(20deg) rotateX(10deg) rotateZ(-10deg)' }}>
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  {/* Avalanche-like coin */}
                  <div className="absolute left-24 bottom-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#ef4444] to-[#dc2626] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)] transform rotate-12" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-20deg) rotateX(20deg) rotateZ(10deg)' }}>
                    <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"></div>
                  </div>
                  {/* Ethereum-like coin (silver) */}
                  <div className="absolute right-16 bottom-12 w-11 h-11 rounded-full bg-gradient-to-br from-[#e2e8f0] to-[#94a3b8] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)] transform rotate-6" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-15deg) rotateX(15deg) rotateZ(5deg)' }}>
                    <div className="w-4 h-6 bg-gray-600" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 50% 100%, 0% 25%)' }}></div>
                  </div>
                  {/* Small dark coin */}
                  <div className="absolute right-6 top-10 w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)] transform -rotate-12" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(30deg) rotateX(10deg) rotateZ(-15deg)' }}>
                     <div className="w-3 h-4 bg-gray-200" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 50% 100%, 0% 25%)' }}></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="max-w-md md:pl-8">
            <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-bold mb-6 text-black">
              Who SparkPay is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">built for</span>
            </h2>
            <ul className="text-gray-600 text-[15px] space-y-3 mb-8">
              <li>• Crypto-native consumers who want to spend holdings in fiat without giving up custody.</li>
              <li>• Remote workers and freelancers needing simple cross-border payments.</li>
              <li>• DAOs and startups issuing payroll and expense cards onchain.</li>
              <li>• Risk teams and auditors requiring transparent proof-of-funds and transaction trails.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Section 7: Key Features */}
      <section className="relative z-10 py-32 px-4 min-h-screen bg-[#05050a] flex flex-col items-center justify-center">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto pt-20">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-white leading-[1.1] mb-6">
            SparkPay wallet. The only wallet<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">you will ever need.</span>
          </h2>
          <p className="text-gray-400 text-[15px]">
            Set up your wallet in under 60 seconds and instantly get access to global capital flows
          </p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          
          {/* Card 1: Access to every asset class */}
          <div className="md:col-span-2 bg-[#0f0f13] border border-gray-800/50 rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-semibold text-white mb-16 relative z-10">
              Multi-Asset<br />Investing
            </h3>
            
            {/* Coins Row */}
            <div className="flex items-center justify-between relative z-10 px-4">
              {/* Ethereum (Dark) */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#2a2a36] to-[#1a1a24] border border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-4px_4px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] flex items-center justify-center transform -rotate-12 hover:scale-110 transition-transform">
                <div className="w-6 h-10 bg-gray-400" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 50% 100%, 0% 25%)' }}></div>
              </div>
              {/* Dollar (Yellow) */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#fcd34d] to-[#d97706] border border-yellow-600 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-4px_4px_rgba(180,83,9,0.8),inset_0_2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center transform rotate-6 hover:scale-110 transition-transform">
                <span className="text-yellow-900 font-bold text-2xl">$</span>
              </div>
              {/* USDC (Blue) */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#60a5fa] to-[#2563eb] border border-blue-600 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-4px_4px_rgba(30,58,138,0.8),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center transform -rotate-6 hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold text-sm">$</span>
                </div>
              </div>
              {/* Gold Bar */}
              <div className="w-12 h-20 rounded-md bg-gradient-to-b from-[#fde047] to-[#ca8a04] border border-yellow-600 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-4px_4px_rgba(161,98,7,0.8),inset_0_2px_4px_rgba(255,255,255,0.6)] flex items-center justify-center transform rotate-12 hover:scale-110 transition-transform">
                <span className="text-yellow-800 font-bold text-[10px] tracking-widest rotate-90">GOLD</span>
              </div>
              {/* Solana (Dark) */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#2a2a36] to-[#1a1a24] border border-gray-700 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-4px_4px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] flex items-center justify-center transform -rotate-12 hover:scale-110 transition-transform">
                <div className="flex flex-col space-y-1">
                  <div className="w-6 h-1.5 bg-gradient-to-r from-[#00FFA3] to-[#03E1FF] rounded-sm transform skew-x-[-20deg]"></div>
                  <div className="w-6 h-1.5 bg-gradient-to-r from-[#00FFA3] to-[#03E1FF] rounded-sm transform skew-x-[20deg]"></div>
                  <div className="w-6 h-1.5 bg-gradient-to-r from-[#00FFA3] to-[#03E1FF] rounded-sm transform skew-x-[-20deg]"></div>
                </div>
              </div>
              {/* Bitcoin (Yellow) */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#fcd34d] to-[#d97706] border border-yellow-600 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-4px_4px_rgba(180,83,9,0.8),inset_0_2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center transform rotate-12 hover:scale-110 transition-transform">
                <Bitcoin className="w-8 h-8 text-yellow-900" />
              </div>
            </div>
            
            {/* Subtle glow behind coins */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-white/10 to-transparent blur-2xl pointer-events-none"></div>
          </div>

          {/* Card 4: Shockingly simple to use (Right Tall) */}
          <div className="md:col-span-1 md:row-span-2 bg-[#0f0f13] border border-gray-800/50 rounded-[2rem] p-10 flex flex-col items-center justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a1b38]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Phone Mockup */}
            <div className="relative w-[220px] h-[450px] bg-[#05050a] border-[6px] border-[#1a1a24] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col mt-4 z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a24] rounded-b-xl z-20"></div>
              
              {/* Status Bar */}
              <div className="flex justify-between items-center px-4 pt-3 text-[9px] font-medium text-white z-20">
                <span>9:41</span>
                <Battery className="w-3 h-3" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-2">Sign In</h3>
                <p className="text-[11px] text-gray-400 mb-12">Verify your identity</p>
                
                {/* Fingerprint Scanner */}
                <div className="relative w-24 h-24 rounded-full border border-gray-800 flex items-center justify-center mb-8 bg-gradient-to-b from-transparent to-purple-900/20">
                  <Fingerprint className="w-12 h-12 text-gray-500" strokeWidth={1} />
                  {/* Scanner Line */}
                  <div className="absolute left-0 right-0 h-0.5 bg-[#9b51e0] shadow-[0_0_10px_#9b51e0] animate-scan"></div>
                </div>
                
                <p className="text-[10px] text-gray-500">Scanning Passkey...</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-10 w-full text-left relative z-10">
              Instant Crypto Top-Ups
            </h3>
          </div>

          {/* Card 2: Compatible with any blockchain */}
          <div className="md:col-span-1 bg-[#0f0f13] border border-gray-800/50 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group h-[320px]">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl font-semibold text-white mb-8 relative z-10">
              Global<br />Spending
            </h3>
            
            {/* 3D Cubes Illustration */}
            <div className="relative flex-1 flex items-end justify-center pb-4 z-10">
              <div className="relative w-32 h-32" style={{ transform: 'rotateX(60deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}>
                {/* Lines */}
                <div className="absolute top-4 left-4 w-24 h-0.5 bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute top-4 left-4 w-0.5 h-24 bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute bottom-4 left-4 w-24 h-0.5 bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute top-4 right-4 w-0.5 h-24 bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                
                {/* Cubes */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-gray-700 border border-gray-600 transform translate-z-4 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gray-700 border border-gray-600 transform translate-z-4 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-gray-700 border border-gray-600 transform translate-z-4 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-700 border border-gray-600 transform translate-z-8 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-600 border border-gray-500 transform translate-z-12 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Self-custodial by design */}
          <div className="md:col-span-1 bg-[#0f0f13] border border-gray-800/50 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group h-[320px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl font-semibold text-white mb-8 relative z-10">
              Self-Custodial Wallet
            </h3>
            
            {/* 3D Padlock Illustration */}
            <div className="relative flex-1 flex items-end justify-center pb-4 z-10">
              <div className="relative w-24 h-32 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-500">
                {/* Shackle */}
                <div className="w-12 h-16 border-4 border-gray-400 rounded-t-full border-b-0 relative z-0 bg-gradient-to-t from-gray-600 to-gray-300" style={{ WebkitBackgroundClip: 'text', color: 'transparent' }}>
                   <div className="absolute inset-0 border-4 border-gray-300 rounded-t-full border-b-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]"></div>
                </div>
                {/* Body */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#4c6ee6] to-[#2a3c80] rounded-xl relative z-10 shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center border border-[#5c7ef6]">
                  <Fingerprint className="w-10 h-10 text-white/80" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Partners Section */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center pb-20">
          <div className="bg-[#1a1525] text-gray-300 text-[10px] font-bold tracking-widest px-6 py-2.5 rounded-full mb-12 border border-gray-800">
            OUR PARTNERS
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* sardi */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-white transform rotate-45 flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-full"></div></div>
              <span className="text-white font-bold tracking-wider text-sm">sardi</span>
            </div>
            
            {/* ETHERMAIL */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center"><span className="text-white text-[10px] font-bold">E</span></div>
              <span className="text-white font-bold tracking-[0.2em] text-xs">ETHERMAIL</span>
            </div>
            
            {/* BINANCE */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-yellow-500 rounded-sm transform rotate-45 flex items-center justify-center"><div className="w-2 h-2 bg-black transform -rotate-45"></div></div>
              <span className="text-white font-bold tracking-wider text-sm">BINANCE</span>
            </div>
            
            {/* router */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-6 border-l-2 border-b-2 border-white transform -skew-x-12"></div>
              <span className="text-white font-bold tracking-wider text-sm lowercase">router</span>
            </div>
            
            {/* LI.FI */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-white transform rotate-45 flex items-center justify-center"><div className="w-3 h-3 bg-white"></div></div>
              <span className="text-white font-bold tracking-wider text-sm">LI.FI</span>
            </div>
            
            {/* B3 */}
            <div className="flex items-center space-x-2">
              <span className="text-white font-black text-xl tracking-tighter">B3</span>
            </div>
            
            {/* sardi */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-white transform rotate-45 flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-full"></div></div>
              <span className="text-white font-bold tracking-wider text-sm">sardi</span>
            </div>
          </div>
        </div>

      </section>

      {/* Section 8: Statistics */}
      <section className="relative z-10 py-32 px-4 min-h-screen bg-[#05050a] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[120%] h-[60%] bg-gradient-to-r from-[#2d1b4e] via-[#8b415a] to-[#2d1b4e] opacity-70 blur-[120px] rounded-[100%]"></div>
        </div>

        <div className="relative z-10 w-full text-center mb-16">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-white mb-4">Roadmap & Targets</h2>
          <p className="text-gray-400 text-[15px]">Our goals for the future.</p>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Stat 1 */}
          <div className="flex-1 w-full text-center py-12 relative">
            <h3 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-normal text-white leading-none mb-6 tracking-tight">2M+</h3>
            <p className="text-white text-[15px] font-medium">Target App downloads</p>
            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            {/* Horizontal Divider (Mobile) */}
            <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 w-full text-center py-12 relative">
            <h3 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-normal text-white leading-none mb-6 tracking-tight">187</h3>
            <p className="text-white text-[15px] font-medium">Countries Supported</p>
            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            {/* Horizontal Divider (Mobile) */}
            <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 w-full text-center py-12 relative">
            <h3 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-normal text-white leading-none mb-6 tracking-tight">300k+</h3>
            <p className="text-white text-[15px] font-medium">Target Active Wallets</p>
            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            {/* Horizontal Divider (Mobile) */}
            <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Stat 4 */}
          <div className="flex-1 w-full text-center py-12 relative">
            <h3 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-normal text-white leading-none mb-6 tracking-tight">30k+</h3>
            <p className="text-white text-[15px] font-medium">Target Card Sign-ups</p>
          </div>
        </div>
      </section>

      {/* Section 9: Roadmap */}
      <section className="relative z-10 py-32 px-4 min-h-screen bg-[#05050a] overflow-hidden">
        
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        ></div>

        {/* Diamonds */}
        <div className="absolute top-[40%] left-[38%] w-6 h-6 bg-white/10 rotate-45"></div>
        <div className="absolute top-[55%] right-[12%] w-12 h-12 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-[15%] right-[22%] w-8 h-8 bg-white/10 rotate-45"></div>

        <div className="text-center mb-32 relative z-10 pt-10">
          <div className="inline-block bg-[#6b4c9a]/20 text-[#9b51e0] text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
            🗺️ ROADMAP
          </div>
          <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold text-white tracking-tight">
            Roadmap <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">2026</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto pb-32">
          {/* Desktop Lines (hidden on mobile) */}
          <div className="hidden md:block">
            {/* Line 1: Q1 to Q2 */}
            <div className="absolute w-1 bg-gradient-to-b from-[#9b51e0] to-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full" style={{ left: 'calc(10% + 30px)', top: '64px', height: '268px' }}></div>
            <div className="absolute h-1 bg-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full" style={{ left: 'calc(10% + 30px)', top: '332px', width: '50%' }}></div>
            
            {/* Line 2: Q2 to Q3 */}
            <div className="absolute w-1 bg-gradient-to-b from-[#ec4899] to-[#9b51e0] shadow-[0_0_15px_rgba(155,81,224,0.5)] rounded-full" style={{ left: 'calc(60% + 30px)', top: '364px', height: '118px' }}></div>
            <div className="absolute h-1 bg-[#9b51e0] shadow-[0_0_15px_rgba(155,81,224,0.5)] rounded-full" style={{ left: 'calc(10% + 30px)', top: '482px', width: '50%' }}></div>
            <div className="absolute w-1 bg-[#9b51e0] shadow-[0_0_15px_rgba(155,81,224,0.5)] rounded-full" style={{ left: 'calc(10% + 30px)', top: '482px', height: '118px' }}></div>
            
            {/* Line 3: Q3 to Q4 */}
            <div className="absolute w-1 bg-gradient-to-b from-[#9b51e0] to-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full" style={{ left: 'calc(10% + 30px)', top: '664px', height: '268px' }}></div>
            <div className="absolute h-1 bg-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full" style={{ left: 'calc(10% + 30px)', top: '932px', width: '50%' }}></div>
          </div>

          {/* Mobile Line (hidden on desktop) */}
          <div className="md:hidden absolute left-[46px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#9b51e0] via-[#ec4899] to-[#f27a33] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full"></div>

          {/* Nodes and Cards */}
          <div className="relative z-10 flex flex-col md:block space-y-16 md:space-y-0 h-auto md:h-[1050px] px-4 md:px-0">
            
            {/* Q1 */}
            <div className="relative flex w-full md:w-auto md:absolute items-center md:items-start md:top-0 md:left-[10%]">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0b0b13] border border-gray-800 flex items-center justify-center z-10 shadow-lg">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">Q1</span>
              </div>
              <div className="ml-6 md:ml-0 flex-1 md:w-80 bg-[#0b0b13] border border-gray-800 rounded-2xl p-6 md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-6 shadow-xl">
                <p className="text-white text-[15px] font-medium leading-[2.2]">
                  Launch SparkPay Web dApp (Beta)<br/>
                  Virtual Card Issuance<br/>
                  Core Yield Integrations (USDC/USDT)
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="relative flex w-full md:w-auto md:absolute items-center md:items-start md:top-[300px] md:left-[60%]">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0b0b13] border border-gray-800 flex items-center justify-center z-10 shadow-lg">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">Q2</span>
              </div>
              <div className="ml-6 md:ml-0 flex-1 md:w-80 bg-[#0b0b13] border border-gray-800 rounded-2xl p-6 md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-6 shadow-xl">
                <p className="text-white text-[15px] font-medium leading-[2.2]">
                  Physical Metal Cards<br/>
                  Multi-Chain Asset Support<br/>
                  Advanced Yield Strategies
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div className="relative flex w-full md:w-auto md:absolute items-center md:items-start md:top-[600px] md:left-[10%]">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0b0b13] border border-gray-800 flex items-center justify-center z-10 shadow-lg">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">Q3</span>
              </div>
              <div className="ml-6 md:ml-0 flex-1 md:w-80 bg-[#0b0b13] border border-gray-800 rounded-2xl p-6 md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-6 shadow-xl">
                <p className="text-white text-[15px] font-medium leading-[2.2]">
                  Tokenized Stocks & Commodities<br/>
                  FiScore (V1) Rollout<br/>
                  Undercollateralized Borrowing
                </p>
              </div>
            </div>

            {/* Q4 */}
            <div className="relative flex w-full md:w-auto md:absolute items-center md:items-start md:top-[900px] md:left-[60%]">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0b0b13] border border-gray-800 flex items-center justify-center z-10 shadow-lg">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">Q4</span>
              </div>
              <div className="ml-6 md:ml-0 flex-1 md:w-80 bg-[#0b0b13] border border-gray-800 rounded-2xl p-6 md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-6 shadow-xl">
                <p className="text-white text-[15px] font-medium leading-[2.2]">
                  Global Expansion (187 Countries)<br/>
                  DAO/B2B Expense Management<br/>
                  Decentralized Identity (DID) Integration
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 10: Backed by Investors */}
      <section className="relative z-10 py-32 px-4 bg-white min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-medium text-black leading-[1.1] mb-24 text-center md:text-left">
            Backed by<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">leading Investors</span>
          </h2>

          {/* Investors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-20 gap-x-8 items-center justify-items-center opacity-80">
            
            {/* 6TH MAN VENTURES */}
            <div className="flex flex-col items-center space-y-3">
              <div className="relative w-12 h-14 bg-black flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }}>
                <span className="text-white font-bold text-xl">6</span>
                <span className="absolute bottom-1 right-0 text-white text-[8px] font-bold">MV</span>
              </div>
              <span className="text-black font-mono text-[10px] tracking-widest uppercase">6th Man Ventures</span>
            </div>

            {/* AYON CAPITAL */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex space-x-1">
                <div className="w-3 h-10 border-l-4 border-t-4 border-black transform -skew-x-[30deg]"></div>
                <div className="w-6 h-10 border-t-4 border-r-4 border-black transform skew-x-[30deg] relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black transform -skew-x-[30deg]"></div>
                </div>
              </div>
              <span className="text-black font-mono text-[10px] tracking-widest uppercase">Ayon Capital</span>
            </div>

            {/* THE OPERATING GROUP */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full border-4 border-[#1e3a8a] flex items-center justify-center relative">
                <div className="w-8 h-8 rounded-full border-4 border-[#1e3a8a] border-r-transparent transform -rotate-45"></div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-1 bg-[#1e3a8a]"></div>
              </div>
              <span className="text-black font-mono text-[10px] tracking-widest uppercase">The Operating Group</span>
            </div>

            {/* REFLEXIVE CAPITAL */}
            <div className="flex flex-col items-center space-y-3">
              <div className="relative w-10 h-12 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full border border-black"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-px h-6 bg-black"></div>
                <div className="absolute bottom-0 w-8 h-px bg-black"></div>
                <div className="absolute bottom-0 w-px h-8 bg-black transform rotate-45 origin-bottom"></div>
                <div className="absolute bottom-0 w-px h-8 bg-black transform -rotate-45 origin-bottom"></div>
              </div>
              <span className="text-black font-mono text-[10px] tracking-widest uppercase">Reflexive Capital</span>
            </div>

            {/* FOLIUS VENTURES */}
            <div className="flex flex-col items-center space-y-3">
              <div className="grid grid-cols-3 grid-rows-3 gap-0.5 w-12 h-12 border border-black p-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border border-black relative overflow-hidden">
                    {i % 2 === 0 && <div className="absolute inset-0 border-t border-black transform rotate-45 origin-top-left scale-150"></div>}
                  </div>
                ))}
              </div>
              <span className="text-black font-mono text-[10px] tracking-widest uppercase">Folius Ventures</span>
            </div>

            {/* CYPHER CAPITAL */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex flex-col items-center">
                <div className="flex space-x-1 mb-1">
                  <div className="w-4 h-4 border-2 border-black transform rotate-45 border-r-0 border-b-0"></div>
                  <div className="w-4 h-4 border-2 border-black transform rotate-45 border-l-0 border-b-0"></div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 border-2 border-black transform rotate-45 border-r-0 border-t-0"></div>
                  <div className="w-4 h-4 border-2 border-black transform rotate-45 border-l-0 border-t-0"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-black font-bold text-[11px] tracking-widest uppercase">Cypher</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-px bg-black"></div>
                  <span className="text-black text-[7px] tracking-widest uppercase">Capital</span>
                  <div className="w-2 h-px bg-black"></div>
                </div>
              </div>
            </div>

            {/* Sfermion */}
            <div className="flex flex-col items-center">
              <div className="border border-black px-4 py-2">
                <span className="text-black font-mono text-xl tracking-widest">Sfermion</span>
              </div>
            </div>

            {/* ACCOMPLICE */}
            <div className="flex flex-col items-center space-y-2">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute w-8 h-8 rounded-full border border-black"></div>
                <span className="text-black font-serif text-2xl italic">A</span>
                <div className="absolute w-10 h-px bg-black transform -rotate-45"></div>
              </div>
              <span className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase" style={{ textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 0 0 2px rgba(0,0,0,0.2)' }}>Accomplice</span>
            </div>

            {/* CMCC Global */}
            <div className="flex flex-col items-center space-y-2">
              <div className="grid grid-cols-3 gap-1 w-10 h-10">
                <div className="bg-transparent"></div>
                <div className="bg-transparent"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
              </div>
              <span className="text-black font-sans text-[10px] tracking-wide">CMCC Global</span>
            </div>

            {/* sigma capital */}
            <div className="flex items-center space-x-2">
              <div className="flex flex-col justify-between h-6 w-4">
                <div className="w-full h-0.5 bg-black transform origin-left rotate-[30deg]"></div>
                <div className="w-full h-0.5 bg-black transform origin-left -rotate-[30deg]"></div>
                <div className="w-full h-0.5 bg-black transform origin-left rotate-[30deg]"></div>
                <div className="w-full h-0.5 bg-black transform origin-left -rotate-[30deg]"></div>
              </div>
              <span className="text-black font-bold text-[14px] tracking-tight">sigma capital</span>
            </div>

          </div>
        </div>
      </section>

      {/* Section 11: Final CTA & Footer */}
      <section className="relative z-10 pt-32 min-h-screen flex flex-col justify-between overflow-hidden" style={{ background: 'linear-gradient(to bottom, #ffffff, #e8d5e5, #8b5a8e, #1a0b2e)' }}>
        
        {/* Floating Phones & Cards Illustration */}
        <div className="relative flex-1 flex items-center justify-center mt-20">
          
          {/* Phone Mockup */}
          <div 
            className="relative w-full max-w-[300px] h-[600px] bg-[#05050a] border-[8px] border-[#111] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col z-20"
            style={{ transform: 'rotate(-10deg) translateY(50px)', transformStyle: 'preserve-3d', boxShadow: '-20px 20px 60px rgba(0,0,0,0.5)' }}
          >
            {/* Inner Phone Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black opacity-90"></div>

            {/* Phone UI */}
            <div className="relative z-10 px-5 py-5 h-full flex flex-col">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-[11px] font-medium text-white mb-6">
                <span>9:41</span>
                <div className="flex items-center space-x-1.5">
                  <Signal className="w-3.5 h-3.5" />
                  <Wifi className="w-3.5 h-3.5" />
                  <Battery className="w-4 h-4" />
                </div>
              </div>

              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2 text-white">
                  <ChevronLeft className="w-5 h-5" />
                  <span className="text-[13px] font-semibold tracking-wide text-gray-400">Net worth</span>
                </div>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>

              {/* Total Assets */}
              <div className="mb-8">
                <p className="text-[13px] text-gray-300 font-medium mb-1">Total Assets</p>
                <div className="text-[2.5rem] font-bold text-white tracking-tight">$43,903</div>
              </div>

              {/* Explore Section */}
              <div className="mb-4">
                <h3 className="text-white text-[15px] font-medium mb-4">Explore</h3>
                
                {/* Claim Card */}
                <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-4 mb-4 border border-gray-800 relative overflow-hidden">
                  <div className="relative z-10 w-2/3">
                    <p className="text-gray-300 text-[13px] leading-snug mb-3">Claim your exclusive<br/>SparkPay Card!</p>
                    <a href="#" className="text-white text-[12px] font-medium underline decoration-gray-500 underline-offset-4">Grab now</a>
                  </div>
                  {/* Mini Card Graphic */}
                  <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-24 h-32 bg-gradient-to-br from-gray-800 to-black rounded-lg transform -rotate-15 shadow-lg flex items-center justify-center border border-gray-700">
                    <span className="text-white/20 text-[8px] tracking-widest transform -rotate-90">PLATINUM</span>
                  </div>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-b from-[#1a1a2e] to-black rounded-2xl p-4 border border-gray-800 h-32 relative overflow-hidden">
                     <span className="absolute bottom-3 left-3 text-yellow-500 text-[10px] font-bold tracking-widest">PLATINUM</span>
                     {/* Abstract shape */}
                     <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#2a1b38] transform rotate-45 translate-x-8 translate-y-8"></div>
                  </div>
                  <div className="bg-gradient-to-b from-[#1a1a2e] to-black rounded-2xl p-4 border border-gray-800 h-32 flex flex-col justify-between">
                    <div className="bg-[#f27a33]/20 text-[#f27a33] text-[9px] font-bold px-2 py-1 rounded w-fit">18% APY</div>
                    <div>
                      <p className="text-gray-300 text-[11px] mb-1">Earn more interest</p>
                      <a href="#" className="text-white text-[11px] font-medium underline decoration-gray-500 underline-offset-4">Invest now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Physical Card */}
          <div 
            className="absolute z-10 w-[260px] sm:w-[340px] h-[165px] sm:h-[215px] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-gray-700/50 rotate-[15deg] translate-x-[20px] translate-y-[80px] sm:rotate-[25deg] sm:translate-x-[150px] sm:translate-y-[100px] transition-transform"
            style={{ 
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            }}
          >
            {/* Card Texture/Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/50"></div>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)' }}></div>
            
            {/* Card Details */}
            <div className="absolute top-6 right-6">
              <Wifi className="w-6 h-6 text-gray-400 transform rotate-90" />
            </div>
            
            <div className="absolute bottom-8 left-8 flex items-center space-x-4">
              <span className="text-gray-400 text-sm tracking-[0.3em] uppercase transform -rotate-90 origin-left translate-y-16">Platinum</span>
            </div>

            <div className="absolute bottom-6 right-6 text-gray-400 text-sm font-mono">
              12/32
            </div>

            {/* Abstract swoosh on card */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-tr from-[#4c2a6e]/40 to-transparent rounded-full blur-xl"></div>
          </div>

        </div>

        {/* Footer */}
        <footer className="relative z-30 bg-[#0a0a0f] py-8 px-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-800/50">
          
          {/* Logo + Copyright */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={sparkPayLogo} alt="SparkPay" className="w-7 h-7" />
            <span className="text-gray-400 text-[11px] font-medium">
              © 2025 - 2026 SparkPay Inc. All rights reserved
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 text-[12px] font-medium hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-300 text-[12px] font-medium hover:text-white transition-colors">Privacy Policy</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" className="w-10 h-10 rounded-lg bg-[#15151a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f26] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-[#15151a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f26] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-[#15151a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f26] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-[#15151a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f26] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-[#15151a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f26] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-[#15151a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f26] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </footer>
      </section>


    </div>
  );
}