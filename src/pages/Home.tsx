import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Star, ShieldCheck, Quote, GraduationCap, Award, BookOpen, UserCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const momentsOfPride = [
    { title: "Vow to End Unlawfulness Propels Agam Jain to join IPS", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Mangalayatan University's Rishab Sethi Commissioned into Indian Army", icon: <UserCheck className="w-6 h-6" /> },
    { title: "Global Nagpur Award in Education – 2015", icon: <Award className="w-6 h-6" /> },
    { title: "Engineering Students Won Zonal Round of IIT – Delhi's Robotryst", icon: <Globe className="w-6 h-6" /> },
    { title: "27 Engineering Graduates Qualified GATE", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Students reach pre-final round of National Business Plan competition", icon: <Star className="w-6 h-6" /> },
    { title: "Ms. Garima Kumari Pursuing Research in Boston University, USA", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Life Time Achievement Award", icon: <Award className="w-6 h-6" /> }
  ];

  const features = [
    { title: 'Culinary Mastery', desc: 'Advanced professional training in global cuisines and pastry arts.', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
    { title: 'Luxury Management', desc: 'Strategic training in five-star hotel operations and guest relations.', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
    { title: 'Global Internships', desc: 'Exclusive opportunities in premium properties across Maldives & Europe.', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className="bg-secondary">
      <Hero />
      
      {/* Introduction Principles */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Foundation</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-primary mb-12">
              To be a leader in education, an institution must be founded on <span className="text-accent italic font-serif">two basic principles:</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="glass p-10 rounded-[3rem] border border-accent/10">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary">Student Interest First</h4>
                <p className="text-primary/60 font-light leading-relaxed">
                  Keeping the interest of students as its foremost priority in every decision and initiative we undertake.
                </p>
              </div>
              <div className="glass p-10 rounded-[3rem] border border-accent/10">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary">Ever-Growing Knowledge</h4>
                <p className="text-primary/60 font-light leading-relaxed">
                  Recognizing that knowledge is ever-growing, omnipresent and requires the opening of minds to new possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Mangalayatan University</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9] text-primary">
                A Culture of <span className="text-accent font-serif italic">Hardwork & Change.</span>
              </h2>
              <p className="text-xl text-primary/60 mb-8 font-light leading-relaxed">
                Situated 20 km from the Yamuna Expressway in Uttar Pradesh, Mangalayatan University was founded in 2006 and has graduated over 7000+ students.
              </p>
              <div className="space-y-6 mb-10">
                <p className="text-primary/60 leading-relaxed">
                  Mangalayatan (translated as the germinal bed of positive thought) aims to perpetuate a culture of hardwork, embracing change and preparing oneself for the fast progressing world with the latest skills and the highest level of social and personal values.
                </p>
                <div className="flex gap-12 pt-6">
                  <div>
                    <h4 className="text-4xl font-bold text-primary mb-1">7000+</h4>
                    <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Graduated</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-primary mb-1">3500+</h4>
                    <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Current Students</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-premium">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" 
                  alt="University Campus" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-12 -left-12 glass p-8 rounded-[2rem] border-accent/20 max-w-[240px]">
                <p className="text-accent text-3xl font-bold mb-1 italic">Est. 2006</p>
                <p className="text-primary/60 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Founded on Principles of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vice Chancellor Welcome */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Prof. PK Dashora" 
                  className="w-full h-full object-cover transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2rem] border-accent/20 max-w-[320px]">
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-primary text-xl font-serif italic mb-4 leading-relaxed">"Learn Today to Lead Tomorrow"</p>
                <div className="border-t border-primary/10 pt-4">
                  <p className="text-primary font-bold text-lg">Prof. PK Dashora</p>
                  <p className="text-primary/40 text-[10px] font-bold uppercase tracking-widest">Vice-Chancellor</p>
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Welcome Note</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9]">
                Quest for <br />
                <span className="text-accent font-serif italic">Excellence.</span>
              </h2>
              <div className="space-y-8 text-white/70 font-light leading-relaxed">
                <p className="text-xl">
                  We endeavour to shape our students to lead by example in their chosen careers by imparting the required knowledge as also imbibing a sense of self-belief and confidence.
                </p>
                <p>
                  I'm sanguine to the fact that our initiatives in devising our curriculum smiting to the industry requirements coupled with career oriented training and development modules are bearing the desired fruit by providing employment opportunities to our students in the corporate sector.
                </p>
                <p>
                  I invite the budding youngsters to join us in our journey for realizing their dreams.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/admission" className="btn-premium border border-accent/20 text-white hover:bg-accent hover:border-accent group">
                  Start Your Journey
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments of Pride */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Recognition</span>
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-[0.9]">
              Moments of <br />
              <span className="text-accent italic font-serif">Pride.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {momentsOfPride.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-secondary border border-transparent hover:border-accent/20 transition-all duration-500 hover:shadow-premium"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-sm text-accent">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-primary leading-relaxed opacity-80 group-hover:opacity-100 italic">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Featured Section - The Programs */}
      <section className="py-32 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Elite Programs</span>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] text-primary">
                A Curriculum <br />
                <span className="text-accent italic font-serif">Without Boundaries.</span>
              </h2>
            </div>
            <Link to="/courses" className="btn-premium border border-primary/10 text-primary hover:bg-primary hover:text-white mb-2 group">
              Explore All Programs
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-premium">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Final Word */}
      <section className="py-44 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Admissions 2026-27</span>
          <h2 className="text-6xl md:text-8xl font-bold text-primary mb-12 leading-[0.9]">
            Realize your <br />
            <span className="text-accent italic font-serif text-5xl md:text-7xl block mt-4">Dreams Today.</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/admission" className="btn-premium bg-primary text-white px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold hover:bg-accent shadow-2xl transition-all duration-700">
              Apply Online Now
            </Link>
            <a href="tel:+919358333333" className="btn-premium border border-primary/10 text-primary px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold hover:bg-secondary transition-all duration-700">
              Call Us: +91 9358-333-333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
