import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'The Silent Echo',
    category: 'Feature Film / Director',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: '2',
    title: 'Neon Boulevard',
    category: 'Music Video / Producer',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: '3',
    title: 'Glass Houses',
    category: 'Short Film / Actress',
    image: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2070&auto=format&fit=crop',
    year: '2022'
  },
  {
    id: '4',
    title: 'Vogue: Reborn',
    category: 'Commercial / Director',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop',
    year: '2022'
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-serif">Selected Works</h2>
          <div className="mt-4 md:mt-0 text-right">
             <p className="text-gray-400">Feature Films &middot; Short Films &middot; Commercials</p>
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative flex flex-col ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}
            >
              <div className="w-full md:w-4/5 relative overflow-hidden">
                 {/* Cinematic Aspect Ratio Container */}
                <div className="aspect-video relative">
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
              
              <div className={`mt-6 md:absolute md:bottom-[-40px] ${index % 2 !== 0 ? 'md:left-0 md:text-left' : 'md:right-0 md:text-right'} z-20 mix-blend-difference`}>
                <h3 className="text-4xl md:text-6xl font-serif italic mb-2">{project.title}</h3>
                <div className={`flex flex-col ${index % 2 !== 0 ? 'items-start' : 'items-end'}`}>
                    <span className="text-sm uppercase tracking-widest text-gray-300">{project.category}</span>
                    <span className="text-xs font-mono text-gray-500 mt-1">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
          <button className="px-8 py-4 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs">
            View Complete Filmography
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;