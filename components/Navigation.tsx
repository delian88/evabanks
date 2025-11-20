import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-serif font-bold tracking-widest cursor-pointer text-white" onClick={() => scrollTo('hero')}>
          EVA BANKS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-xs font-medium tracking-[0.2em] uppercase text-gray-400">
          <button onClick={() => scrollTo('work')} className="hover:text-white transition-colors duration-300">Filmography</button>
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors duration-300">Bio</button>
          <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors duration-300">Expertise</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors duration-300">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-black z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <button onClick={() => scrollTo('work')} className="text-3xl font-serif text-white hover:text-gray-400 transition-colors">Filmography</button>
          <button onClick={() => scrollTo('about')} className="text-3xl font-serif text-white hover:text-gray-400 transition-colors">Bio</button>
          <button onClick={() => scrollTo('services')} className="text-3xl font-serif text-white hover:text-gray-400 transition-colors">Expertise</button>
          <button onClick={() => scrollTo('contact')} className="text-3xl font-serif text-white hover:text-gray-400 transition-colors">Contact</button>
      </div>
    </nav>
  );
};

export default Navigation;