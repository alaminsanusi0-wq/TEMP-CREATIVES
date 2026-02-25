import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Admin } from './components/Admin';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Simple way to toggle admin view for demo purposes
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isAdmin) {
    return (
      <main className="bg-dark min-h-screen">
        <Navbar />
        <Admin />
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-dark min-h-screen selection:bg-primary selection:text-dark">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Stats />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
