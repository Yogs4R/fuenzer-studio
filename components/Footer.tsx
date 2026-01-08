import React from 'react';
import { Mail } from 'lucide-react';
import { FaYoutube as Youtube } from 'react-icons/fa';
import { FaXTwitter as Twitter } from 'react-icons/fa6'; 
import { Images } from '@/assets/images';

interface FooterProps {
  onNavigate: (destination: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Fungsi helper untuk keyboard navigation pada logo
  const handleKeyDown = (e: React.KeyboardEvent, destination: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onNavigate(destination);
    }
  };

  return (
    <footer className="bg-[#020202] border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div 
              className="flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1" 
              onClick={() => onNavigate('home')}
              // FIX 1: Tambahkan aksesibilitas keyboard untuk div yang clickable
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, 'home')}
              aria-label="Back to Homepage"
            >
              <img
                src={Images.fuenzerStudio}
                alt="Fuenzer Studio Logo"
                className="h-8 w-8 rounded-lg"
              />
              <div>
                <span className="block font-display font-bold text-lg tracking-wider text-white">
                  FUENZER STUDIO
                </span>
                {/* FIX 2: text-gray-500 terlalu gelap, ubah ke gray-400 */}
                <span className="block text-xs text-gray-400">
                  © {new Date().getFullYear()} Fuenzer Studio. All Rights Reserved.
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 flex justify-center gap-6 text-sm font-medium text-gray-400">
            <button 
              onClick={() => onNavigate('privacy')} 
              className="hover:text-primary transition-colors focus:outline-none focus:text-primary"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms')} 
              className="hover:text-primary transition-colors focus:outline-none focus:text-primary"
            >
              Terms of Service
            </button>
          </div>

          {/* Socials */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4">
            <a
              href="mailto:dedekculesrbx@gmail.com"
              // FIX 3: Tambahkan aria-label
              aria-label="Send us an email"
              className="w-10 h-10 rounded bg-surface-dark flex items-center justify-center text-white hover:bg-[#5865F2] hover:text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com/@fuenzerstudio?si=2s_5EFd6NmdX_kbP"
              // FIX 4: Tambahkan aria-label
              aria-label="Visit our YouTube Channel"
              className="w-10 h-10 rounded bg-surface-dark flex items-center justify-center text-white hover:bg-[#EA4335] hover:text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#EA4335]"
            >
              <Youtube size={20} aria-hidden="true" />
            </a>
            <a
              href="https://x.com/FuenzerStudio?t=_Xf5iDCIpu6VEDOmy8u9kg&s=09"
              // FIX 5: Tambahkan aria-label
              aria-label="Follow us on X (Twitter)"
              className="w-10 h-10 rounded bg-surface-dark flex items-center justify-center text-white hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            >
              <Twitter size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;