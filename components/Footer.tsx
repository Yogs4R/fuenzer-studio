import React from 'react';
import { Twitter, Youtube, Disc } from 'lucide-react';

interface FooterProps {
  onNavigate: (destination: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#020202] border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo - Left aligned on desktop */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDZi1zDns8QME8e1ytwvtE_0IiDYNkBGnVGEd8NwR8v0mldpAXAhaRtAnSptqCTWCApNRkCGN5qvt2cdwFaxn-Sc3kDP-VVaTYh5N-w48RSCtYGAtuqXuC3sW6OmH5OFR7noa6n3osUUmuzxBvMRih6oqRy36TKCAboDqtdyD54EfG66rqqEIOFOy8riKHqYVCUAuChv-xNzz5RI2OSZXaKWbIiiTtoxToa1jh8WbH8lOiHb8sRNdCkN_8d28TV0_j--ZpE4am28M"
                alt="Footer Logo"
                className="h-8 w-8 rounded-lg"
              />
              <div>
                <span className="block font-display font-bold text-lg tracking-wider text-white">
                  FUENZER STUDIO
                </span>
                <span className="block text-xs text-gray-500">
                  © 2023 All Rights Reserved
                </span>
              </div>
            </div>
          </div>

          {/* Links - Perfectly centered on desktop */}
          <div className="w-full md:w-1/3 flex justify-center gap-6 text-sm font-medium text-gray-400">
            <button 
              onClick={() => onNavigate('privacy')} 
              className="hover:text-primary transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms')} 
              className="hover:text-primary transition-colors focus:outline-none"
            >
              Terms of Service
            </button>
          </div>

          {/* Socials - Right aligned on desktop */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded bg-surface-dark flex items-center justify-center text-white hover:bg-[#5865F2] hover:text-white transition-all transform hover:scale-110"
            >
              <Disc className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded bg-surface-dark flex items-center justify-center text-white hover:bg-[#EA4335] hover:text-white transition-all transform hover:scale-110"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded bg-surface-dark flex items-center justify-center text-white hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;