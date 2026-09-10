import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpotlightBackground from './components/SpotlightBackground.jsx';

function App() {
  return (
    <div className="app-container">
      <SpotlightBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <PortfolioShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;