import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Volume2, ChevronRight, Signal, Wifi, Battery, MoreVertical, ChevronLeft, Fingerprint, Menu, ChevronDown, X, ArrowLeftRight, ArrowUpRight, ArrowDown, Repeat, Plus, TrendingUp } from 'lucide-react';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
import sparkPayLogo from '@/attached_assets/Frame_1171275126_1773561837325.png';
import solanaLogo from '@/attached_assets/solana-sol-logo_(17)_1773564269930.png';
import usdcLogo from '@/attached_assets/usd-coin-usdc-logo_(5)_1773564245249.png';
import netflixLogo from '@/attached_assets/Netflix-Symbol_1773564776076.png';
import spotifyLogo from '@/attached_assets/Spotify_Primary_Logo_RGB_Green_1773564758391.png';
import bitcoinLogo from '@/attached_assets/bitcoin-btc-logo_(2)_1773565036546.png';
import teslaLogo from '@/attached_assets/Tesla,_Inc.-Logomark-Black-Logo.wine_1773565051159.png';
import goldLogo from '@/attached_assets/gold--big_1773565030735.png';
import appleLogo from '@/attached_assets/747_1773565063041.png';
import visaLogo from '@/attached_assets/Visa_Inc._logo_(2005–2014)_1773565441894.png';
import mastercardLogo from '@/attached_assets/Mastercard-logo.svg_1773565441895.webp';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [textReveal, setTextReveal] = useState(0);
  const [roadmapProgress, setRoadmapProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const overviewTextRef = useRef<HTMLDivElement>(null);
  const chartBarHeights = useMemo(() => Array.from({ length: 40 }, (_, i) => 20 + Math.random() * 30 + (i > 20 ? 20 : 0)), []);
  const roadmapRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Product', href: '#product' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
    { label: 'Features', href: '#features' },
    { label: 'Our Tech', href: '#tech' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

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
      if (roadmapRef.current) {
        const rect = roadmapRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const scrolledInto = windowHeight - sectionTop;
        const totalTravel = sectionHeight + windowHeight;
        const progress = Math.max(0, Math.min(1, scrolledInto / totalTravel));
        setRoadmapProgress(progress);
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto w-full">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2 sm:space-x-3">
            <img src={sparkPayLogo} alt="SparkPay" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-2xl sm:text-4xl font-black tracking-tighter lowercase">SparkPay</span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[14px] font-semibold text-gray-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <a href="#" className="hidden sm:flex items-center space-x-2 bg-white text-black font-semibold px-5 py-2.5 rounded-full text-[14px] hover:bg-gray-100 transition-colors">
              <span>Launch App</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-[#111] hover:bg-[#1a1a1a] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-white text-[16px] font-medium py-3 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#" className="flex items-center justify-center space-x-2 bg-white text-black font-semibold px-5 py-3 rounded-full text-[15px] mt-4 hover:bg-gray-100 transition-colors sm:hidden">
                <span>Launch App</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Navbar Spacer */}
      <div className="h-[72px]"></div>

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
              className="w-full h-full rounded-[3.5rem] border-[10px] border-[#111] bg-[#050b14] overflow-hidden relative shadow-2xl animate-phone-float-hero"
              style={{ 
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
      <section id="overview" className="relative z-10 py-32 px-4 flex flex-col items-center justify-center min-h-screen bg-black scroll-mt-[80px]">
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
      <section id="product" className="relative z-10 py-32 px-4 min-h-screen flex items-center overflow-hidden scroll-mt-[80px]" style={{ background: 'linear-gradient(to bottom, #000000, #2a1b38, #8b5a8e, #e8d5e5, #ffffff)' }}>
        
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

        <AnimatedSection>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[320px] bg-[#020817] border border-[#2e3c5ea0] rounded-[2.5rem] shadow-[0_0_80px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col animate-phone-float-left">
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
        </AnimatedSection>
      </section>

      {/* Section 4: Spend */}
      <section id="how-it-works" className="relative z-10 py-32 px-4 min-h-screen flex items-center overflow-hidden scroll-mt-[80px]" style={{ background: 'linear-gradient(to bottom, #1a0b2e, #8b5a8e, #e8d5e5, #ffffff)' }}>
        
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

        <AnimatedSection>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[320px] bg-[#05050a] border border-[#2e3c5ea0] rounded-[2.5rem] shadow-[0_0_80px_rgba(155,81,224,0.3),0_0_80px_rgba(242,122,51,0.2)] overflow-hidden flex flex-col p-5 animate-phone-float-left">
              
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
        </AnimatedSection>
      </section>

      {/* Section 5: Invest */}
      <section id="security" className="relative z-10 py-32 px-4 min-h-screen flex items-center overflow-hidden scroll-mt-[80px]" style={{ background: 'linear-gradient(to bottom, #1a0b2e, #8b5a8e, #e8d5e5, #ffffff)' }}>
        
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

        <AnimatedSection>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-end relative" style={{ perspective: '1200px' }}>
            {/* Orange Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[340px] h-[680px] bg-[#f27a33]/30 blur-[60px] rounded-[3rem] z-0 pointer-events-none" style={{ transform: 'rotateY(15deg) rotateZ(-5deg) translate(-50%, -50%)' }}></div>
            
            <div 
              className="relative w-full max-w-[320px] bg-[#05050a] border-[8px] border-[#111] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col z-10 animate-phone-float"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Inner Phone Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#05050a] to-black opacity-90"></div>

              {/* Phone UI */}
              <div className="relative z-10 px-5 py-5 flex flex-col">
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
                <div className="space-y-3">
                  {/* Bitcoin */}
                  <div className="bg-[#0b1121] border border-[#1e293b] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#131b33] transition-colors">
                    <div className="flex items-center space-x-3">
                      <img src={bitcoinLogo} alt="Bitcoin" className="w-10 h-10 rounded-full" />
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
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img src={teslaLogo} alt="Tesla" className="w-8 h-8 object-contain" />
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
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img src={appleLogo} alt="Apple" className="w-6 h-6 object-contain" />
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
                      <img src={goldLogo} alt="Gold ETF" className="w-10 h-10 rounded-full" />
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
            
            {/* Brand Names */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="font-bold text-2xl text-black tracking-tighter">T</span>
              <span className="font-bold text-xl text-black tracking-tight">amazon</span>
              <span className="font-bold text-xl text-black tracking-tight">Google</span>
              <span className="font-black text-xl text-black tracking-tighter">NETFLIX</span>
            </div>
          </div>

        </div>
        </AnimatedSection>
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

        <AnimatedSection>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-end relative" style={{ perspective: '1200px' }}>
            {/* Orange Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[340px] h-[680px] bg-[#f27a33]/30 blur-[60px] rounded-[3rem] z-0 pointer-events-none" style={{ transform: 'rotateY(15deg) rotateZ(-5deg) translate(-50%, -50%)' }}></div>
            
            <div 
              className="relative w-full max-w-[320px] h-[650px] bg-[#05050a] border-[8px] border-[#111] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col z-10 animate-phone-float"
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
                    {chartBarHeights.map((height, i) => {
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
        </AnimatedSection>
      </section>

      {/* Section 7: Key Features */}
      <section id="features" className="relative z-10 py-32 px-4 min-h-screen bg-[#05050a] flex flex-col items-center justify-center scroll-mt-[80px]">
        
        {/* Header */}
        <AnimatedSection>
        <div className="text-center mb-20 max-w-3xl mx-auto pt-20">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-white leading-[1.1] mb-6">
            SparkPay wallet. The only wallet<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">you will ever need.</span>
          </h2>
          <p className="text-gray-400 text-[15px]">
            Set up your wallet in under 60 seconds and instantly get access to global capital flows
          </p>
        </div>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          
          {/* Card 1: Access to every asset class */}
          <div className="md:col-span-2 bg-[#0f0f13] border border-gray-800/50 rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden relative group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f27a33]/10 via-transparent to-[#9b51e0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-semibold text-white mb-16 relative z-10">
              Access to every<br />asset class
            </h3>
            
            {/* Coins Row */}
            <div className="flex items-center justify-between relative z-10 px-4">
              <img src="/ethereum-coin.avif" alt="Ethereum" className="w-16 h-16 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
              <img src="/gold-dollar.avif" alt="Dollar" className="w-16 h-16 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform rotate-6 group-hover:scale-110 transition-transform duration-500" />
              <img src="/ethereum-purple.avif" alt="USDC" className="w-16 h-16 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform -rotate-6 group-hover:scale-110 transition-transform duration-500" />
              <img src="/gold-rectangle.avif" alt="Gold" className="w-14 h-20 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
              <img src="/solana-3d.avif" alt="Solana" className="w-16 h-16 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
              <img src="/bitcoin-orange.avif" alt="Bitcoin" className="w-16 h-16 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            {/* Subtle glow behind coins */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-[#f27a33]/15 to-transparent blur-2xl pointer-events-none"></div>
          </div>

          {/* Card 4: Shockingly simple to use (Right Tall) */}
          <div className="md:col-span-1 md:row-span-2 bg-[#0f0f13] border border-gray-800/50 rounded-[2rem] p-10 flex flex-col items-center justify-between overflow-hidden relative group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a1b38]/30 via-transparent to-[#9b51e0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
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
              Shockingly simple<br />to use
            </h3>
          </div>

          {/* Card 2: Compatible with any blockchain */}
          <div className="md:col-span-1 bg-[#0f0f13] border border-gray-800/50 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group h-[320px] cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e84393]/10 via-transparent to-[#6c5ce7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl font-semibold text-white mb-8 relative z-10">
              Compatible with any<br />blockchain
            </h3>
            
            {/* Chain Network Image */}
            <div className="relative flex-1 flex items-end justify-center pb-4 z-10">
              <img src="/chain-network.avif" alt="Blockchain network" className="w-32 h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Card 3: Self-custodial by design */}
          <div className="md:col-span-1 bg-[#0f0f13] border border-gray-800/50 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group h-[320px] cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0984e3]/10 via-transparent to-[#6c5ce7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl font-semibold text-white mb-8 relative z-10">
              Self-custodial<br />by design
            </h3>
            
            {/* Lock Icon Image */}
            <div className="relative flex-1 flex items-end justify-center pb-4 z-10">
              <img src="/lock-icon.avif" alt="Security lock" className="w-28 h-28 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

        </div>

        {/* Partners Section */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center pb-20">
          <div className="bg-[#1a1525] text-gray-300 text-[10px] font-bold tracking-widest px-6 py-2.5 rounded-full mb-12 border border-gray-800">
            OUR PARTNERS
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            <img src={visaLogo} alt="Visa" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <img src={mastercardLogo} alt="Mastercard" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <img src={solanaLogo} alt="Solana" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

      </section>

      {/* Section 8: Statistics */}
      <section id="tech" className="relative z-10 py-32 px-4 min-h-screen bg-[#05050a] flex flex-col items-center justify-center overflow-hidden scroll-mt-[80px]">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[120%] h-[60%] bg-gradient-to-r from-[#2d1b4e] via-[#8b415a] to-[#2d1b4e] opacity-70 blur-[120px] rounded-[100%]"></div>
        </div>

        <AnimatedSection>
        <div className="relative z-10 w-full text-center mb-16">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold text-white mb-4">Our Tech</h2>
          <p className="text-gray-400 text-[15px]">The technology powering SparkPay.</p>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
          <div className="flex-1 w-full text-center py-12 relative">
            <h3 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-normal text-white leading-none mb-6 tracking-tight">&lt;1s</h3>
            <p className="text-white text-[15px] font-medium">Transaction Finality</p>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="flex-1 w-full text-center py-12 relative">
            <h3 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-normal text-white leading-none mb-6 tracking-tight">65k+</h3>
            <p className="text-white text-[15px] font-medium">TPS on Solana</p>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="flex-1 w-full text-center py-12 relative">
            <h3 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-normal text-white leading-none mb-6 tracking-tight">256-bit</h3>
            <p className="text-white text-[15px] font-medium">AES Encryption</p>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="flex-1 w-full text-center py-12 relative">
            <h3 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] font-normal text-white leading-none mb-6 tracking-tight">$0.00</h3>
            <p className="text-white text-[15px] font-medium">Gas Fees for Users</p>
          </div>
        </div>
        </AnimatedSection>
      </section>

      {/* Section 9: Roadmap */}
      <section id="roadmap" className="relative z-10 py-32 px-4 min-h-screen bg-[#05050a] overflow-hidden scroll-mt-[80px]">
        
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
          <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold text-white tracking-tight">
            Roadmap <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">2026</span>
          </h2>
        </div>

        <div ref={roadmapRef} className="relative max-w-5xl mx-auto pb-32">
          {/* Desktop Lines (hidden on mobile) - scroll animated */}
          <div className="hidden md:block">
            {/* Line 1: Q1 down to Q2 horizontal */}
            <div className="absolute w-1 bg-gradient-to-b from-[#9b51e0] to-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full origin-top transition-none" style={{ left: 'calc(10% + 30px)', top: '64px', height: '268px', transform: `scaleY(${Math.min(1, Math.max(0, (roadmapProgress - 0.08) / 0.12))})` }}></div>
            <div className="absolute h-1 bg-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full origin-left transition-none" style={{ left: 'calc(10% + 30px)', top: '332px', width: '50%', transform: `scaleX(${Math.min(1, Math.max(0, (roadmapProgress - 0.20) / 0.08))})` }}></div>
            
            {/* Line 2: Q2 down, horizontal back, then down */}
            <div className="absolute w-1 bg-gradient-to-b from-[#ec4899] to-[#9b51e0] shadow-[0_0_15px_rgba(155,81,224,0.5)] rounded-full origin-top transition-none" style={{ left: 'calc(60% + 30px)', top: '364px', height: '118px', transform: `scaleY(${Math.min(1, Math.max(0, (roadmapProgress - 0.28) / 0.08))})` }}></div>
            <div className="absolute h-1 bg-[#9b51e0] shadow-[0_0_15px_rgba(155,81,224,0.5)] rounded-full origin-right transition-none" style={{ left: 'calc(10% + 30px)', top: '482px', width: '50%', transform: `scaleX(${Math.min(1, Math.max(0, (roadmapProgress - 0.36) / 0.08))})` }}></div>
            <div className="absolute w-1 bg-[#9b51e0] shadow-[0_0_15px_rgba(155,81,224,0.5)] rounded-full origin-top transition-none" style={{ left: 'calc(10% + 30px)', top: '482px', height: '118px', transform: `scaleY(${Math.min(1, Math.max(0, (roadmapProgress - 0.44) / 0.08))})` }}></div>
            
            {/* Line 3: Q3 down to Q4 horizontal */}
            <div className="absolute w-1 bg-gradient-to-b from-[#9b51e0] to-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full origin-top transition-none" style={{ left: 'calc(10% + 30px)', top: '664px', height: '268px', transform: `scaleY(${Math.min(1, Math.max(0, (roadmapProgress - 0.52) / 0.12))})` }}></div>
            <div className="absolute h-1 bg-[#ec4899] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full origin-left transition-none" style={{ left: 'calc(10% + 30px)', top: '932px', width: '50%', transform: `scaleX(${Math.min(1, Math.max(0, (roadmapProgress - 0.64) / 0.08))})` }}></div>
          </div>

          {/* Mobile Line (hidden on desktop) - scroll animated */}
          <div className="md:hidden absolute left-[46px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#9b51e0] via-[#ec4899] to-[#f27a33] shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full origin-top transition-none" style={{ transform: `scaleY(${Math.min(1, Math.max(0, (roadmapProgress - 0.05) / 0.7))})` }}></div>

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

      {/* Section 10: CTA */}
      <section className="relative z-10 py-32 px-4 bg-[#05050a] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80%] h-[50%] bg-gradient-to-r from-[#9b51e0]/20 via-[#f27a33]/15 to-[#9b51e0]/20 blur-[120px] rounded-[100%]"></div>
        </div>
        <AnimatedSection>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold text-white tracking-tight mb-6">
            Ready to join the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b51e0] to-[#f27a33]">future of finance?</span>
          </h2>
          <p className="text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-12">
            SparkPay is building the onchain global neobank - spend, save, and earn with crypto like never before. Be among the first to experience it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="group bg-white text-black font-semibold px-8 py-4 rounded-full text-[15px] tracking-wide hover:bg-gray-100 transition-all flex items-center space-x-2 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              <span>Get Early Access</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="text-gray-300 font-medium px-8 py-4 rounded-full text-[15px] tracking-wide border border-gray-700 hover:border-gray-500 hover:text-white transition-all">
              Read the Docs
            </a>
          </div>
        </div>
        </AnimatedSection>
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
              © 2026 SparkPay Inc. All rights reserved
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 text-[12px] font-medium hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-300 text-[12px] font-medium hover:text-white transition-colors">Privacy Policy</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://x.com/SparkPayX" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#15151a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f26] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </footer>
      </section>


    </div>
  );
}