import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { SoundProvider } from './context/SoundContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const EducationPage = lazy(() => import('./pages/EducationPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

function App() {
  return (
    <SoundProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/services" element={<ServicesPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </SoundProvider>
  );
}

export default App;