import React from 'react';
import { Eye, ThumbsUp, Heart, Play } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="games" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-0 bg-hex-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            OUR <span className="text-gradient">PROJECTS</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end mx-auto"></div>
          <p className="mt-4 text-gray-400">Explore our latest immersive worlds</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-surface-dark border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,69,0,0.15)] flex flex-col h-full"
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                {project.badge && (
                  <div
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded clip-hex-button shadow-lg ${project.badge.colorClass}`}
                  >
                    {project.badge.text}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-center mb-4 pt-4 border-t border-gray-800/50 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase font-bold mb-1">
                      <Eye className="w-4 h-4 text-primary" /> Visits
                    </div>
                    <div className="text-white font-display font-bold text-xl tracking-wide">{project.visits}</div>
                  </div>
                  <div className="flex-1 border-l border-gray-800">
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase font-bold mb-1">
                      <ThumbsUp className="w-4 h-4 text-primary" /> Likes
                    </div>
                    <div className="text-white font-display font-bold text-xl tracking-wide">{project.likes}</div>
                  </div>
                  <div className="flex-1 border-l border-gray-800">
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase font-bold mb-1">
                      <Heart className="w-4 h-4 text-primary" /> Favs
                    </div>
                    <div className="text-white font-display font-bold text-xl tracking-wide">{project.favs}</div>
                  </div>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-bold uppercase">Status</span>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${project.statusColorClass}`}
                  >
                    {project.status}
                  </span>
                </div>
                <a 
                  href={project.playUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full clip-hex-button bg-gray-800 text-white hover:bg-primary hover:text-white font-bold py-3 transition-colors flex items-center justify-center gap-2 cursor-pointer no-underline"
                >
                  <Play className="w-5 h-5 fill-current" /> PLAY NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;