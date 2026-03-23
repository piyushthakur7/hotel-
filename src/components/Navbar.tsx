import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Apply Online', path: '/admission' },
    { name: 'About FIHM', path: '/about' },
    { name: 'UG Programs', path: '/courses' },
    { name: 'Diploma', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img src="/logo.png" alt="FIHM Logo" className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-[#1B3A5C] tracking-wide">FIHM</span>
                <span className="text-[10px] font-bold text-[#E8A723] uppercase tracking-[0.15em]">ONLINE</span>
              </div>
            </Link>

            {/* Desktop Navigation - Blue buttons like Mangalayatan */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm
                    ${isActive(link.path) 
                      ? 'bg-[#E8A723] text-white' 
                      : 'bg-[#1B3A5C] text-white hover:bg-[#E8A723]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-[#1B3A5C]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl lg:hidden border-t border-gray-100">
          <div className="px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all
                  ${isActive(link.path) ? 'bg-[#E8A723] text-white' : 'text-[#1B3A5C] hover:bg-gray-50'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
