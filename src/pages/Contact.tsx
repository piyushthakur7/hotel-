import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Direct Admissions',
      desc: 'Connect with our corporate admissions desk in Noida.',
      linkTitle: '+91-98705-99777',
      link: 'tel:+919870599777'
    },
    {
      icon: Mail,
      title: 'Academic Queries',
      desc: 'Email our academic counselors for course details.',
      linkTitle: 'shikhasharma@ucplgroup.com',
      link: 'mailto:shikhasharma@ucplgroup.com'
    },
    {
      icon: MapPin,
      title: 'Corporate Office',
      desc: 'Visit our Noida office for face-to-face counseling.',
      linkTitle: 'Sector 63, Noida, UP',
      link: '#'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            Connect With Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-primary"
          >
            Always within <br />
            <span className="text-accent italic font-serif">Reach.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Whether you have questions about online degrees, offline hospitality courses, or the admission process, our elite counseling team is ready to guide you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {contactInfo.map((info, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border border-accent/10 shadow-premium group hover:bg-primary transition-all duration-700"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                <info.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-white transition-colors">{info.title}</h3>
              <p className="text-primary/50 mb-6 text-sm leading-relaxed group-hover:text-white/50 transition-colors">{info.desc}</p>
              <a 
                href={info.link} 
                className="text-lg font-bold text-accent hover:text-primary group-hover:text-white group-hover:underline underline-offset-8 decoration-accent/30 flex items-center gap-2 transition-all"
              >
                {info.linkTitle}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-[4rem] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-12 font-serif italic text-accent">Office Locations</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Corporate Office (Noida)</h4>
                  <p className="text-white/50 text-sm leading-relaxed">A60 C Sector 63 Noida 201301</p>
                  <p className="text-accent text-sm mt-2 font-bold">+91 98705-99777</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Mangalayatan University Campus</h4>
                  <p className="text-white/50 text-sm leading-relaxed">Aligarh-Mathura Highway, Beswan, Aligarh, UP</p>
                  <p className="text-accent text-sm mt-2 font-bold">+91 9358-333333</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-6">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold">Live Support</h4>
                <p className="text-sm text-white/40">Available Mon-Sat, 9AM to 6PM</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[4rem] overflow-hidden shadow-premium border border-accent/10 min-h-[500px] relative group"
          >
            <div className="absolute inset-0 bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-1000">
              <div className="text-center group-hover:scale-110 transition-transform duration-1000">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-6 animate-bounce" />
                <p className="text-primary/40 font-bold uppercase tracking-widest text-xs group-hover:text-white/40">Campus Map Navigation</p>
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.45422847!2d77.387342!3d28.614603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c335e69b!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
