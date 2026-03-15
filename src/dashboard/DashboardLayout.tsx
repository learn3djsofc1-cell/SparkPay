import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  CreditCard,
  TrendingUp,
  PiggyBank,
  Landmark,
  Settings,
  Copy,
  LogOut,
  Bell,
} from 'lucide-react';
import sparkPayLogo from '@/attached_assets/Frame_1171275126_1773561837325.png';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/app' },
  { label: 'Cards', icon: CreditCard, path: '/app/cards' },
  { label: 'Earn', icon: PiggyBank, path: '/app/earn' },
  { label: 'Invest', icon: TrendingUp, path: '/app/invest' },
  { label: 'Borrow', icon: Landmark, path: '/app/borrow' },
  { label: 'Settings', icon: Settings, path: '/app/settings' },
];

export default function DashboardLayout() {
  const location = useLocation();

  const currentPage = navItems.find(
    (item) =>
      item.path === location.pathname ||
      (item.path !== '/app' && location.pathname.startsWith(item.path))
  ) || navItems[0];

  return (
    <div className="min-h-screen bg-[#05050a] text-white font-sans flex overflow-x-hidden">
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-[240px] bg-[#0a0a12] border-r border-[#1e293b]/50 z-40 overflow-hidden">
        <div className="flex items-center px-4 h-16 shrink-0">
          <Link to="/" className="flex items-center space-x-2 min-w-0">
            <img src={sparkPayLogo} alt="SparkPay" className="w-8 h-8 shrink-0" />
            <span className="text-xl font-black tracking-tighter lowercase whitespace-nowrap">
              sparkpay
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/app'}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-[#9b51e0]/20 to-[#f27a33]/10 text-white border border-[#9b51e0]/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span className="whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen min-w-0 w-full md:ml-[240px] overflow-x-hidden">
        <header className="sticky top-0 z-30 bg-[#05050a]/80 backdrop-blur-xl border-b border-[#1e293b]/50">
          <div className="flex items-center justify-between px-3 sm:px-6 h-16 min-w-0">
            <div className="flex items-center space-x-2 md:hidden min-w-0 shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <img src={sparkPayLogo} alt="SparkPay" className="w-7 h-7 shrink-0" />
                <span className="text-lg font-black tracking-tighter lowercase">sparkpay</span>
              </Link>
            </div>

            <h1 className="hidden md:block text-lg font-semibold">{currentPage.label}</h1>

            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <button className="relative w-9 h-9 shrink-0 rounded-xl bg-[#111424] border border-[#1e293b] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1f35] transition-colors">
                <Bell className="w-4 h-4" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#f27a33] rounded-full"></div>
              </button>

              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-[#111424] border border-[#1e293b] rounded-xl px-2 sm:px-3 py-2 cursor-pointer hover:bg-[#1a1f35] transition-colors shrink-0">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#9b51e0] to-[#f27a33] shrink-0"></div>
                <span className="text-[13px] text-gray-300 font-medium hidden sm:inline">7xK...9f2D</span>
                <Copy className="w-3.5 h-3.5 text-gray-500 shrink-0" />
              </div>

              <Link
                to="/"
                className="hidden sm:flex w-9 h-9 shrink-0 rounded-xl bg-[#111424] border border-[#1e293b] items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1f35] transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 p-3 sm:p-6 pb-24 md:pb-6 min-w-0 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a12]/95 backdrop-blur-xl border-t border-[#1e293b]/50">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/app'}
              className={({ isActive }) =>
                `relative flex flex-col items-center space-y-1 px-2 py-1.5 rounded-xl transition-colors ${
                  isActive ? 'text-white' : 'text-gray-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className="w-5 h-5" />
                  <span className="text-[9px] font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="bottomTabIndicator"
                      className="absolute -top-0.5 w-8 h-0.5 bg-gradient-to-r from-[#9b51e0] to-[#f27a33] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
