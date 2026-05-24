import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import App from './App.tsx';
import ProjectDetail from './ProjectDetail.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  </StrictMode>
);
