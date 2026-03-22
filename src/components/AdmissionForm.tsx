import React, { useState } from 'react';
import { COURSES } from '../constants';
import { Send, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', courseId: '', message: '' });
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 rounded-[3rem] shadow-premium text-center border border-primary/5 animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <CheckCircle className="w-12 h-12 text-accent" />
          <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping opacity-25" />
        </div>
        <h3 className="text-4xl font-bold mb-4 text-primary">Application Received</h3>
        <p className="text-primary/60 mb-10 leading-relaxed font-light">
          Thank you for choosing FIHM. Our admissions committee will review your application and contact you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-accent font-bold uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all duration-500"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div id="admission" className="bg-white p-12 md:p-16 rounded-[3rem] shadow-premium border border-primary/5">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-3 text-primary">Secure Your Seat</h2>
        <p className="text-primary/60 font-light italic">Admissions are currently open for the 2026 academic session.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent ml-1">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Ex: Alexander Pierce"
              className="w-full px-0 py-4 bg-transparent border-b border-primary/10 focus:border-accent outline-none transition-colors placeholder:text-primary/20 text-lg font-light"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent ml-1">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="alex@luxury-hospitality.com"
              className="w-full px-0 py-4 bg-transparent border-b border-primary/10 focus:border-accent outline-none transition-colors placeholder:text-primary/20 text-lg font-light"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent ml-1">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="+91 98765 43210"
              className="w-full px-0 py-4 bg-transparent border-b border-primary/10 focus:border-accent outline-none transition-colors placeholder:text-primary/20 text-lg font-light"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent ml-1">Interested Course</label>
            <select 
              required
              className="w-full px-0 py-4 bg-transparent border-b border-primary/10 focus:border-accent outline-none transition-colors appearance-none text-lg font-light"
              value={formData.courseId}
              onChange={e => setFormData({ ...formData, courseId: e.target.value })}
            >
              <option value="" className="text-primary/20">Select Professional Program</option>
              {COURSES.map(course => (
                <option key={course.id} value={course.id} className="text-primary">{course.title}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent ml-1">Message (Optional)</label>
          <textarea 
            rows={2}
            placeholder="Any specific career goals or questions?"
            className="w-full px-0 py-4 bg-transparent border-b border-primary/10 focus:border-accent outline-none transition-colors resize-none placeholder:text-primary/20 text-lg font-light"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        
        <button 
          disabled={status === 'submitting'}
          type="submit" 
          className="btn-premium w-full bg-primary text-white hover:bg-accent group py-5"
        >
          {status === 'submitting' ? (
            <div className="flex items-center gap-3">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-xs uppercase tracking-widest font-bold">Processing Application</span>
            </div>
          ) : (
            <>
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Submit Admission Form</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
