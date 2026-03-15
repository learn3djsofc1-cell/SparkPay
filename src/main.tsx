import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import DashboardLayout from './dashboard/DashboardLayout.tsx';
import DashboardHome from './dashboard/pages/DashboardHome.tsx';
import CardsPage from './dashboard/pages/CardsPage.tsx';
import EarnPage from './dashboard/pages/EarnPage.tsx';
import InvestPage from './dashboard/pages/InvestPage.tsx';
import BorrowPage from './dashboard/pages/BorrowPage.tsx';
import SettingsPage from './dashboard/pages/SettingsPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="earn" element={<EarnPage />} />
          <Route path="invest" element={<InvestPage />} />
          <Route path="borrow" element={<BorrowPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
