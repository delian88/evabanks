import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Directing",
    description: "Orchestrating vision from script to screen. Specializing in narrative-driven visual storytelling and actor performance."
  },
  {
    title: "Production",
    description: "End-to-end production management. Budgeting, location scouting, and team assembly for features and commercials."
  },
  {
    title: "Acting",
    description: "Method-based performance for film and television. Experienced in dramatic lead roles and character studies."
  },
  {
    title: "Screenwriting",
    description: "Developing compelling narratives and shooting scripts that resonate with modern audiences."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-brand-dark-gray border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-sm text-gray-400 uppercase tracking-widest block mb-6">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Behind the scenes & <br/> in front of the lens.</h2>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="h-[1px] w-full bg-white/10 mb-6 group-hover:bg-white transition-colors duration-500"></div>
                <span className="text-xs font-mono text-gray-500 mb-4 block">0{index + 1}</span>
                <h3 className="text-2xl font-serif mb-4 text-gray-200 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;