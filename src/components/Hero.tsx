import React from 'react';
import { motion } from 'motion/react';
import { ArrowRoundForward, Award, PlayCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-primary flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[-10%] w-[60%] h-[100%] bg-accent/10 blur-[130px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[70%] bg-white/5 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[#0A192F]/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000" 
          alt="Campus Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">UGC & NAAC A+ Accredited</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 text-white tracking-tight">
              Master the Craft of <br />
              <span className="text-accent italic font-serif relative">
                Global Hospitality
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span> <br />
              Online.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
              Elevate your career with FIHM ONLINE. Learn from industry experts and earn a degree that sets you apart in the luxury segment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/courses" className="btn-premium bg-accent text-white px-8 py-5 text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors flex items-center gap-3">
                Explore Programs
                <ArrowRoundForward className="w-5 h-5" />
              </Link>
              <button className="flex items-center gap-3 text-white group">
                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <PlayCircle className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Watch Video</span>
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-4xl font-bold text-white mb-1">50+</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Global Partners</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">10k+</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Success Stories</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">100%</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Placement Assist</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">24/7</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Learning Access</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
