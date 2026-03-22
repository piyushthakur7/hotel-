import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Award, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-8">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Excellence in Hospitality</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 text-primary">
              Shaping the <br />
              <span className="text-accent italic font-serif">Luxury</span> of <br />
              Tomorrow.
            </h1>
            
            <p className="text-xl text-primary/60 mb-12 max-w-lg leading-relaxed font-light">
              Empowering the next generation of global hospitality leaders through 
              <span className="text-primary font-medium italic"> world-class training</span> and prestigious international affiliations.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link to="/admission" className="btn-premium bg-primary text-white hover:bg-accent group">
                Begin Your Journey
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/courses" className="btn-premium border border-primary/20 text-primary hover:bg-primary hover:text-white">
                View Curriculum
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-12 border-t border-primary/5 pt-12">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Placements</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">20+</p>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Industry Awards</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">5k+</p>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Global Alumni</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" 
                alt="Hospitality" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 -left-8 glass p-8 rounded-[2rem] z-20 max-w-[240px]"
            >
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-bold text-primary mb-1">Best Hospitality Institute</p>
              <p className="text-xs text-primary/60 leading-relaxed italic">Awarded for Academic Excellence 2025</p>
            </motion.div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full -z-10 animate-spin-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
