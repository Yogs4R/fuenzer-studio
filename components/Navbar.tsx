import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Images } from '@/assets/images';

interface NavbarProps {
  onNavigate: (destination: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const destination = href.replace('#', '');
    onNavigate(destination);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 glass-nav transition-all duration-300">
      <div className="w-full px-6 sm:px-10 lg:px-12 relative">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0 flex items-center gap-3 z-20 cursor-pointer" onClick={() => onNavigate('home')}>
            <img
              src={Images.fuenzerStudio}
              alt="Fuenzer Studio Logo"
              className="h-10 w-10 rounded-lg"
            />
            <span className="font-display font-bold text-xl tracking-wider text-white">
              FUENZER STUDIO
            </span>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex flex-1 items-center justify-center px-4">
             <div className="flex items-baseline space-x-6 lg:space-x-8 bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5 whitespace-nowrap">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1 rounded-md text-base lg:text-lg font-medium transition-colors ${
                    link.name === 'Home'
                      ? 'text-primary hover:text-primary-dark'
                      : 'text-gray-300 hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Action Buttons - Right */}
          <div className="hidden md:flex items-center gap-4 z-20 flex-shrink-0">
            <a
              href="https://www.roblox.com/share/g/32462874"
              className="clip-hex-button bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-white px-6 py-2.5 font-bold tracking-wide hover:shadow-[0_0_20px_rgba(255,69,0,0.5)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              JOIN GROUP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-dark border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="block w-full text-center mt-4 bg-primary text-white px-4 py-2 rounded-md font-bold"
            >
              JOIN GROUP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;