import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#050505] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            OUR <span className="text-gradient">TEAM</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end mx-auto"></div>
          <p className="mt-4 text-gray-400">The minds behind the magic</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <a
              key={member.id}
              href={member.profileLink}
              className="bg-surface-dark border border-gray-800 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-primary hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-gray-800 overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {member.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;