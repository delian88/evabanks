import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-brand-black flex flex-col justify-between relative border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-sm text-gray-400 uppercase tracking-[0.3em] mb-8">Inquiries & Bookings</h2>
        <h3 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-none mb-12 text-white mix-blend-overlay opacity-90">
          Let's create <br/> <span className="italic">iconic</span> work.
        </h3>
        
        <a 
          href="mailto:contact@evabanks.com" 
          className="inline-flex items-center space-x-4 text-2xl md:text-3xl border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500 group"
        >
          <span>contact@evabanks.com</span>
          <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-32 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-8">
        <div className="flex space-x-8 mb-6 md:mb-0 uppercase tracking-widest text-xs">
          <a href="#" className="hover:text-white transition-colors">IMDb</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Vimeo</a>
        </div>
        <div className="text-right text-xs tracking-wider">
          <p>&copy; {new Date().getFullYear()} Eva Banks Production.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;