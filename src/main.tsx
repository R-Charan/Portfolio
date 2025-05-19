import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ProjectDetail from './ProjectDetail.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  </StrictMode>
);
