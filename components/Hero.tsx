import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop"
            alt="Cinematic Set Background"
            className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative pt-20">
        <div className="mb-6 flex items-center gap-4 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}>
             <div className="h-[1px] w-12 bg-white"></div>
             <span className="text-sm uppercase tracking-[0.3em] text-gray-300">Producer &middot; Actress &middot; Director</span>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[1.1] md:leading-[1] tracking-tight mb-8 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
          Crafting <br/>
          <span className="italic text-gray-400">Visual</span> Legacy
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.6s' }}>
          <p className="text-lg md:text-xl max-w-lg leading-relaxed text-gray-400 font-light">
            Eva Banks brings stories to life with an uncompromising vision. From independent features to global commercial campaigns, she redefines the narrative experience.
          </p>
          
          <div className="mt-10 md:mt-0 flex items-center space-x-6 group cursor-pointer">
             <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Play size={20} fill="currentColor" />
             </div>
             <span className="text-sm uppercase tracking-widest">Play Reel 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;