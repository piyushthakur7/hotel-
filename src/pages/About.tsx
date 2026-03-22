import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Globe, Award, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

export default function About() {
  const recognitions = [
    { title: 'UGC Entitled', subtitle: 'University Grants Commission', icon: <CheckCircle className="w-6 h-6 text-accent" /> },
    { title: 'NAAC A+', subtitle: 'Accredited with highest grade', icon: <Award className="w-6 h-6 text-accent" /> },
    { title: 'AICTE Approved', subtitle: 'Technical Education Council', icon: <ShieldCheck className="w-6 h-6 text-accent" /> },
    { title: 'AIU Member', subtitle: 'Association of Indian Universities', icon: <Globe className="w-6 h-6 text-accent" /> }
  ];

  return (
    <div className="pt-32 pb-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-primary">
              Crafting Excellence in <br />
              <span className="text-accent italic font-serif text-6xl md:text-8xl">Education.</span>
            </h1>
            <p className="text-xl text-primary/60 leading-relaxed mb-8 font-light">
              FIHMONLINE is promoted by FIHM Noida under Maa Ambey Education Trust, with over 20 years of excellence in education and hospitality.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-primary/70 leading-relaxed">
                While FIHM Noida offers premier <span className="font-bold text-primary">Offline courses</span> in the field of hospitality, <span className="font-bold text-primary">FIHM Online</span> serves as the Vocational Training Partner with <span className="font-bold text-accent">Mangalayatan University</span>.
              </p>
              <p className="text-lg text-primary/70 leading-relaxed">
                Together, we offer UG and PG courses in different streams through Online and Distance Mode, accepted globally and eligible for government jobs worldwide.
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-premium rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" 
                alt="Institute" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full -z-10 animate-pulse" />
          </div>
        </div>

        {/* Mangalayatan University Section */}
        <div className="mb-32">
          <div className="bg-primary text-white rounded-[4rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
            <div className="max-w-4xl relative z-10">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Academic Partner</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif italic text-accent">Mangalayatan University</h2>
              <p className="text-2xl text-white/80 font-light mb-12 leading-relaxed">
                Leading the way in Online Courses in India, Offering quality education that transforms professional paths.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <p className="text-white/60 leading-relaxed">
                  Mangalayatan University Online offers a unique opportunity for students to study at their own pace. It is the ultimate gateway to a world-class education system, offering a wide range of online programs in Business Studies, Computer Applications, Arts & Humanities, Science & Technology, and more.
                </p>
                <p className="text-white/60 leading-relaxed">
                  As one of the best online colleges in India, it provides quality courses that match students' career goals. Interactive learning platforms, discussion groups, and expert faculty ensure a flexible and deep learning experience.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {recognitions.map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-bold text-accent mb-1">{item.title}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
          </div>
        </div>

        {/* Mission & Vision - Brutalist Glass Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[3rem]"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-primary/60 leading-relaxed font-light">
              To empower students with professional skills and ethical values through innovative online teaching and global industry exposure.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[3rem]"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-primary/60 leading-relaxed font-light">
              To be a globally recognized center of excellence in digital education, fostering leadership and accessible learning for all.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-12 rounded-[3rem]"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
              <GraduationCap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
            <p className="text-primary/60 leading-relaxed font-light">
              Quality, Accessibility, and Professional Growth guide our partnership in delivering world-class university education.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

