import React, { useEffect, useState } from 'react';
import { Eye, ThumbsUp, Heart, Play } from 'lucide-react';
import { PROJECTS } from '../constants';
import { supabase } from '@/lib/supabaseClient';

const formatNumber = (num: number | string | null | undefined): string => {
  if (num === null || num === undefined) return '0';

  const n = Number(num);
  if (isNaN(n)) return '0';

  if (n >= 1000000000) return (n / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B+';
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
  return n.toString();
}

const Projects: React.FC = () => {
  const [projectsData, setProjectsData] = useState(PROJECTS);

  useEffect(() => {
    const fetchLiveStats = async () => {
      // console.log("Start fetching live stats from Supabase..."); // Clean log for production

      const { data, error } = await supabase
        .from('project_stats')
        .select('*');

      if (error) {
        console.error('Error Supabase:', error.message);
        return;
      }

      if (data) {
        const updatedProjects = PROJECTS.map((project) => {
          const match = project.playUrl?.match(/\/games\/(\d+)/);
          const placeId = match ? match[1] : null;
          
          if (!placeId) return project;

          const targetId = `game_${placeId}`;
          const liveStat = data.find((item: any) => item.id === targetId);

          if (liveStat) {
            return {
              ...project,
              visits: formatNumber(liveStat.visits),
              likes: formatNumber(liveStat.likes),
              favs: formatNumber(liveStat.favorites),
            };
          } else {
            return project;
          }
        });

        setProjectsData(updatedProjects);
      }
    };

    fetchLiveStats();
  }, []);
  
  return (
    <section id="games" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-0 bg-hex-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            OUR <span className="text-gradient">PROJECTS</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end mx-auto"></div>
          <p className="mt-4 text-gray-400">Explore our latest immersive experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
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
                    {/* FIX 1: Ubah text-gray-500 ke text-gray-400 untuk kontras */}
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs uppercase font-bold mb-1">
                      <Eye className="w-4 h-4 text-primary" aria-hidden="true" /> Visits
                    </div>
                    <div className="text-white font-display font-bold text-xl tracking-wide">{project.visits}</div>
                  </div>
                  <div className="flex-1 border-l border-gray-800">
                    {/* FIX 2: Ubah text-gray-500 ke text-gray-400 */}
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs uppercase font-bold mb-1">
                      <ThumbsUp className="w-4 h-4 text-primary" aria-hidden="true" /> Likes
                    </div>
                    <div className="text-white font-display font-bold text-xl tracking-wide">{project.likes}</div>
                  </div>
                  <div className="flex-1 border-l border-gray-800">
                    {/* FIX 3: Ubah text-gray-500 ke text-gray-400 */}
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs uppercase font-bold mb-1">
                      <Heart className="w-4 h-4 text-primary" aria-hidden="true" /> Favs
                    </div>
                    <div className="text-white font-display font-bold text-xl tracking-wide">{project.favs}</div>
                  </div>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  {/* FIX 4: Ubah text-gray-500 ke text-gray-400 */}
                  <span className="text-xs text-gray-400 font-bold uppercase">Status</span>
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
                  // FIX 5: Tambahkan aria-label spesifik
                  aria-label={`Play ${project.title} on Roblox now`}
                  className="w-full clip-hex-button bg-gray-800 text-white hover:bg-primary hover:text-white font-bold py-3 transition-colors flex items-center justify-center gap-2 cursor-pointer no-underline"
                >
                  <Play className="w-5 h-5 fill-current" aria-hidden="true" /> PLAY NOW
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