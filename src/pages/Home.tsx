import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap, Award, BookOpen, UserCheck, ShieldCheck, Star, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';

export default function Home() {
  const featuredCourses = COURSES.slice(0, 3);

  const advantages = [
    { title: "Industry-Aligned Curriculum", desc: "Our programs are designed with inputs from top hospitality leaders.", icon: <Briefcase className="w-6 h-6" /> },
    { title: "UGC Approved Degrees", desc: "Earn fully recognized degrees that hold global value.", icon: <Award className="w-6 h-6" /> },
    { title: "Flexibility & Convenience", desc: "Learn at your own pace with our cutting-edge online learning platform.", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Dedicated Placement Support", desc: "Get assistance from our dedicated team to land your dream job.", icon: <UserCheck className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-primary pt-10">
      <Hero />
      
      {/* Featured Programs Section */}
      <section className="py-24 bg-primary text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block flex items-center gap-2">
                <Star className="w-3 h-3 text-accent fill-accent" />
                Explore Programs
              </span>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-white">
                Learn from the <span className="text-accent italic font-serif">Best</span> in Hospitality.
              </h2>
            </div>
            <Link to="/courses" className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-white hover:text-accent transition-colors group">
              View All Programs
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course, i) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-500"
              >
                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                    {course.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{course.title}</h3>
                  <p className="text-white/60 text-sm font-light mt-4 line-clamp-2">{course.description || "A comprehensive professional program."}</p>
                </div>
                
                <div className="flex justify-between items-center mb-6 text-sm text-white/80 font-medium">
                  <span>{course.duration}</span>
                  <span>{course.eligibility}</span>
                </div>
                
                <Link to="/admission" className="w-full py-4 bg-white text-primary text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FIHM Online Section */}
      <section className="py-24 bg-[#050C17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">The FIHM Advantage</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
                Why Choose <br />
                <span className="text-accent font-serif italic">FIHM ONLINE?</span>
              </h2>
              <p className="text-white/60 mb-10 text-lg font-light leading-relaxed">
                We bridge the gap between traditional education and modern industry demands through our comprehensive online learning ecosystem tailored for the luxury and hospitality sectors.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {advantages.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover grayscale brightness-90 z-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white text-primary p-8 rounded-[2rem] max-w-[240px] shadow-2xl z-20">
                <ShieldCheck className="w-8 h-8 text-accent mb-4" />
                <p className="font-bold text-lg mb-1">Trusted Globally</p>
                <p className="text-primary/60 text-xs font-bold uppercase tracking-widest leading-relaxed">By Top Hotel Chains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Marquee / Partners Section */}
      <section className="py-20 bg-primary border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <p className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Our Accreditations & Hiring Partners</p>
        </div>
        <div className="flex gap-16 items-center px-4 animate-marquee opacity-60 hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
          {/* Duplicating for marquee effect */}
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <h3 className="text-2xl font-bold font-serif italic text-white/40">UGC Approved</h3>
              <h3 className="text-2xl font-bold font-serif italic text-white/40">NAAC A+</h3>
              <h3 className="text-2xl font-bold font-serif italic text-white/40">OTHM UK</h3>
              <h3 className="text-2xl font-bold font-serif italic text-white/40">Taj Hotels</h3>
              <h3 className="text-2xl font-bold font-serif italic text-white/40">Marriott</h3>
              <h3 className="text-2xl font-bold font-serif italic text-white/40">Hilton</h3>
              <h3 className="text-2xl font-bold font-serif italic text-white/40">Hyatt</h3>
              <h3 className="text-2xl font-bold font-serif italic text-white/40">ITC Hotels</h3>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center bg-accent relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000" alt="CTA Background" className="w-full h-full object-cover mix-blend-multiply" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <span className="font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block text-white/80">Admissions 2026-27</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.05]">
            Ready to <span className="font-serif italic text-white">Transform</span> <br /> your Career?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/admission" className="btn-premium bg-primary text-white border border-primary hover:bg-white hover:text-primary hover:border-white shadow-2xl transition-all duration-500 w-full md:w-auto">
              Apply Online Now
            </Link>
            <a href="tel:+919358333333" className="btn-premium bg-transparent border border-white/50 text-white hover:bg-white hover:text-primary transition-all duration-500 w-full md:w-auto">
              Call Us: +91 9358-333-333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
