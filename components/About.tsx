import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-brand-black relative overflow-hidden">
      {/* Decorative massive text */}
      <div className="absolute top-20 left-0 text-[200px] font-serif font-bold text-white/5 leading-none select-none whitespace-nowrap z-0 pointer-events-none">
        EVA BANKS
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-5/12 relative">
            <div className="absolute -inset-4 border border-white/20 rounded-full opacity-0 lg:opacity-100 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
           <img 
             src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
             alt="Eva Banks Portrait" 
             className="w-full h-[600px] object-cover object-top rounded-none grayscale contrast-125"
           />
        </div>
        <div className="lg:w-7/12">
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
            "Cinema is truth at <br/> <span className="italic text-gray-500">24 frames per second.</span>"
          </h2>
          
          <div className="space-y-8 text-gray-300 text-lg font-light leading-relaxed max-w-xl">
            <p>
              Born in London and based in Los Angeles, Eva Banks operates at the intersection of performance and production. 
            </p>
            <p>
              Starting her career in experimental theater, she quickly transitioned to film, gaining recognition for her visceral acting style and later, her directorial debut which premiered at Sundance.
            </p>
            <p>
              Whether she is producing a large-scale commercial or directing an intimate indie drama, Eva brings an obsession with detail and a deep empathy for the human condition.
            </p>
          </div>

          <div className="mt-16 flex gap-12">
            <div>
              <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-4">Awards</h4>
              <ul className="text-gray-500 font-serif text-lg space-y-2 italic">
                <li>Sundance — Best Directing (2023)</li>
                <li>Cannes — Un Certain Regard (Nominee)</li>
                <li>BAFTA — Rising Star</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-4">Representation</h4>
              <ul className="text-gray-500 font-serif text-lg space-y-2 italic">
                <li>CAA (USA)</li>
                <li>United Agents (UK)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;