import React from 'react';
import { CheckCircle, Code, Palette, Users, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface-dark relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              ABOUT <span className="text-gradient">FUENZER</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in 2023, Fuenzer Studio is a Roblox developer dedicated to creating new experiences, not brain-rotating games. 
                Led by <span className="font-semibold">Ridwan Yoga Suryantara</span>, a solo developer, 
                I'm currently the only one at Fuenzer Studio.
              </p>
              <p>
                Our mission is to create immersive, high-quality experiences that bring communities together.  
                Whether it's exploring the Mosque, Heaven or Hell, finding out about Roblox items for the latest event, 
                or learning about the history of Roblox, we make the games as detailed as possible.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white font-bold">
                <CheckCircle className="text-primary w-5 h-5" />
                <span>High Fidelity</span>
              </div>
              <div className="flex items-center gap-2 text-white font-bold">
                <CheckCircle className="text-primary w-5 h-5" />
                <span>Community Driven</span>
              </div>
              <div className="flex items-center gap-2 text-white font-bold">
                <CheckCircle className="text-primary w-5 h-5" />
                <span>Constant Updates</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end opacity-20 blur-xl rounded-2xl"></div>
            <div className="relative bg-background-dark border border-gray-800 rounded-2xl p-4 sm:p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-surface-dark p-3 sm:p-6 rounded-lg border border-gray-800 text-center hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center">
                  <Code className="text-primary w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                  <div className="font-display font-bold text-white text-base sm:text-lg">Development</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Lua & Systems</div>
                </div>
                <div className="bg-surface-dark p-3 sm:p-6 rounded-lg border border-gray-800 text-center hover:border-white transition-colors duration-300 flex flex-col items-center justify-center">
                  <Palette className="text-white w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                  <div className="font-display font-bold text-white text-base sm:text-lg">Design</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">UI & Environment</div>
                </div>
                <div className="bg-surface-dark p-3 sm:p-6 rounded-lg border border-gray-800 text-center hover:border-white transition-colors duration-300 flex flex-col items-center justify-center">
                  <Users className="text-white w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                  <div className="font-display font-bold text-white text-base sm:text-lg">Community</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Events & Support</div>
                </div>
                <div className="bg-surface-dark p-3 sm:p-6 rounded-lg border border-gray-800 text-center hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center">
                  <Rocket className="text-primary w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2" />
                  <div className="font-display font-bold text-white text-base sm:text-lg">Innovation</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">New Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;