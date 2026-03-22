import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    "Fee Structure", "Programme & Structure", "Library", "International", 
    "Newsletter", "Tathastu ICS - BA & MA (Adminstration)", "Vocational Programmes", "DAKSH"
  ];

  const importantLinks = [
    "Community Radio Narad", "Catch the Rain", "Other Facilities", 
    "E Content Development Facilities", "MU ERP", "PhD Supervisors in the Organization",
    "Feedback Analysis Report", "Strategic Plan", "NEP-2020", "Multiple Entry and Multiple Exit",
    "Study in India (SII)", "KADAM: Let's Step Forward Together", "Career Enhancement Initiatives",
    "Annual Reports Of The University", "MOU", "Ph.D. - Awarded",
    "Student Grievance Redressal Committee", "Course with MediCOLL Learning",
    "Sustainable Living Practices", "Gender Audit Report 2025-26"
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-2">
              FIHM <span className="text-accent underline decoration-accent/20">ONLINE</span>
            </h2>
            <p className="text-primary/60 max-w-sm mb-8 leading-relaxed font-light text-sm">
              Vocational Training Partner with Mangalayatan University. Offering UGC & NAAC A+ accredited Online Degrees for the leaders of tomorrow.
            </p>
            <div className="space-y-4 mb-8">
              <h4 className="font-bold text-primary uppercase tracking-widest text-[10px]">Connect With Us</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl border border-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-primary uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-primary/60 text-[11px] font-medium">
              {quickLinks.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-primary uppercase tracking-widest text-xs">Important Links</h4>
            <ul className="space-y-3 text-primary/60 text-[11px] font-medium h-[240px] overflow-y-auto scrollbar-thin">
              {importantLinks.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-primary uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-6 text-primary/60 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <div className="text-[11px] leading-relaxed">
                  <p className="font-bold text-primary mb-1">Corporate Office:</p>
                  <span className="block">A60 C Sector 63 Noida 201301</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="text-[11px]">
                  <p className="font-bold text-primary mb-1">Call Us:</p>
                  <a href="tel:+919870599777" className="hover:text-accent block font-bold text-lg text-primary">+91 98705-99777</a>
                  <a href="tel:+919358333333" className="hover:text-accent block mt-1">+91 93583-33333</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <div className="text-[11px]">
                  <p className="font-bold text-primary mb-1">Email Us:</p>
                  <a href="mailto:shikhasharma@ucplgroup.com" className="hover:text-accent block font-bold">shikhasharma@ucplgroup.com</a>
                  <a href="mailto:admission@mangalayatan.edu.in" className="hover:text-accent block">admission@mangalayatan.edu.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <p>© {new Date().getFullYear()} Mangalayatan University. All Rights Reserved.</p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-accent">Careers</a>
            <a href="#" className="hover:text-accent">Disclaimer</a>
            <a href="#" className="hover:text-accent">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
