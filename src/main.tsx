import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext'; // ADD THIS LINE
import App from './App.tsx';
import ProjectDetail from './ProjectDetail.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>  {/* ADD THIS WRAPPER */}
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </DarkModeProvider>  {/* ADD THIS CLOSING TAG */}
  </StrictMode>
);