import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Team from './components/Team';
import Legal from './components/Legal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  const handleNavigation = (destination: string) => {
    if (destination === 'privacy' || destination === 'terms') {
      setCurrentPage(destination);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // It's a section ID
      setCurrentPage('home');
      // Timeout to ensure DOM is rendered if switching from legal page
      setTimeout(() => {
        const element = document.getElementById(destination);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="font-body text-gray-100 bg-background-dark min-h-screen selection:bg-primary selection:text-white flex flex-col">
      <Navbar onNavigate={handleNavigation} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Projects />
            <About />
            <Team />
          </>
        )}
        {currentPage === 'privacy' && <Legal page="privacy" />}
        {currentPage === 'terms' && <Legal page="terms" />}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
};

export default App;