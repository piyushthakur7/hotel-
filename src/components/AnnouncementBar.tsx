import React from 'react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0A2240] text-white py-2.5 px-4 text-sm flex flex-wrap items-center justify-between md:justify-center gap-2 md:gap-8 z-[60] relative">
      <span className="text-white/90 text-xs md:text-sm">Admissions for the Session 2026-27.</span>
      <span className="text-xs md:text-sm">
        Hurry!{' '}
        <Link to="/admission" className="text-[#E8A723] font-semibold hover:underline">
          Enquire Now
        </Link>
      </span>
      <span className="text-xs md:text-sm hidden md:inline">
        Call Us{' '}
        <a href="tel:+919358333333" className="text-[#E8A723] font-semibold hover:underline">
          +91-9358-333-333
        </a>
      </span>
    </div>
  );
}
