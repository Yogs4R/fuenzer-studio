import React from 'react';
import { Users } from 'lucide-react';
import { STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-hex-pattern opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-hero-glow z-0 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-20 blur-[100px] rounded-full z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-600 opacity-20 blur-[100px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter mb-4 text-white">
          WELCOME TO <br className="md:hidden" />
          <span className="text-gradient">FUENZER</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light tracking-wide">
          Creating Immersive <span className="text-primary font-bold">Roblox</span> Experiences
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#games"
            className="clip-hex-button bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-white px-8 py-4 text-lg font-bold tracking-wider hover:shadow-[0_0_30px_rgba(255,69,0,0.6)] transition-all transform hover:scale-105 w-full sm:w-auto text-center"
          >
            PLAY NOW
          </a>
          <a
            href="#discord"
            className="rounded-full bg-black hover:bg-gray-900 text-white px-8 py-4 text-lg font-bold tracking-wider transition-all transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-black/20 border border-gray-800"
          >
            <Users className="w-5 h-5 fill-current" /> COMMUNITY
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full bg-transparent border-t border-gray-800/50 pt-10 pb-10 mt-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:flex md:flex-row md:justify-center gap-8 md:gap-24 px-4">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-transform duration-300 cursor-default"
            >
              <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-primary font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;