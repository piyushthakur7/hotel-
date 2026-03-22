import React from 'react';
import AdmissionForm from '../components/AdmissionForm';
import { FileText, CreditCard, Upload, CheckCircle, Cpu, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Admission() {
  const steps = [
    { icon: FileText, title: 'Application', desc: 'Fill in your basic, education & work experience details and pay the application fee.' },
    { icon: CreditCard, title: 'Fee Payment', desc: 'Pay the admission fee for the first semester/year or the full program.' },
    { icon: Upload, title: 'Document Upload', desc: 'Upload supporting documents & submit your application for university verification.' },
    { icon: CheckCircle, title: 'Admission Approval', desc: 'The university will evaluate your documents to confirm your final admission.' },
    { icon: Cpu, title: 'LMS Activation', desc: 'Receive your Learning Management System credentials over email and start learning.' },
  ];

  const advantages = [
    "Recorded & Live Lectures",
    "Various Specializations Available",
    "Placement Assistance & Recruitment",
    "24/7 Student Support",
    "Career-Focused Curriculum",
    "Digital Library Resources",
    "100% Online Degree",
    "Global Accreditation"
  ];

  return (
    <div className="pt-32 pb-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block underline decoration-accent/30 underline-offset-8">Admissions 2026-27</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] text-primary">
              Begin Your <br />
              <span className="text-accent italic font-serif">Academic Journey.</span>
            </h1>
            <p className="text-xl text-primary/60 mb-12 font-light leading-relaxed">
              Join <span className="text-primary font-medium">Mangalayatan University Online</span> thru FIHM. Hurry! Admissions for the session 2026-27 are now open.
            </p>

            <div className="space-y-10 mb-16 relative">
              <div className="absolute left-7 top-0 bottom-0 w-px bg-accent/20 -z-10" />
              {steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-premium border border-accent/10 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-lg font-bold mb-2 text-primary group-hover:text-accent transition-colors">Step 0{i+1}: {step.title}</h4>
                    <p className="text-primary/50 text-sm leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden mb-12">
              <h4 className="text-2xl font-bold mb-8 text-accent font-serif italic">Why Choose MU Online?</h4>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-white/70 font-light">{adv}</span>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 bg-white p-8 rounded-3xl border border-accent/10 shadow-premium">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">Support Centre</p>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <a href="tel:+919319888888" className="text-xl font-bold text-primary hover:text-accent transition-colors">+91-9319-888-888</a>
                </div>
              </div>
              <div className="flex-1 bg-white p-8 rounded-3xl border border-accent/10 shadow-premium">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">Email Admissions</p>
                <a href="mailto:admissions@muonline.ac.in" className="text-lg font-bold text-primary hover:text-accent transition-colors break-all">admissions@muonline.ac.in</a>
              </div>
            </div>
          </div>

          <div className="sticky top-32">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <AdmissionForm />
              </div>
            </div>
            <p className="text-center mt-8 text-primary/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              Already registered? <span className="text-accent cursor-pointer border-b border-accent/30 hover:border-accent">Login Securely</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
