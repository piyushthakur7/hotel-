import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

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
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-full px-6 py-2 transition-all duration-500 ${isScrolled ? 'shadow-premium bg-white/90' : 'bg-white/40'}`}>
          <div className="flex justify-between h-14 items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img src="/logo.png" alt="FIHM Logo" className="w-10 h-10 object-contain transition-transform duration-500 group-hover:rotate-[360deg]" />
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight uppercase tracking-tighter text-primary">Federal Institute</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">of Hotel Management</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 
                    ${isActive(link.path) ? 'text-primary' : 'text-primary/60 hover:text-primary'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left 
                    ${isActive(link.path) ? 'scale-x-100' : ''}`} />
                </Link>
              ))}
              <Link to="/admission" className="btn-premium bg-primary text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-accent hover:text-white group">
                Apply Now
                <ArrowRight className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white rounded-[2rem] shadow-premium p-8 md:hidden flex flex-col gap-6 animate-in fade-in slide-in-from-top-5 duration-500">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className="text-lg font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/admission" 
            className="btn-premium bg-primary text-white w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
