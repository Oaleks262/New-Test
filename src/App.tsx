import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

const PAGE_TITLES: Record<string, string> = {
  '/':         'zvirycholeksandr — Веб-розробка для малого бізнесу',
  '/services': 'Послуги — zvirycholeksandr',
  '/work':     'Роботи — zvirycholeksandr',
  '/process':  'Процес — zvirycholeksandr',
  '/contact':  'Контакти — zvirycholeksandr',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function TitleUpdater() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES['/'];
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TitleUpdater />
      <Nav />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work"     element={<WorkPage />} />
          <Route path="/process"  element={<ProcessPage />} />
          <Route path="/contact"  element={<ContactPage />} />
          <Route path="*"         element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
