import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
};

export default App;