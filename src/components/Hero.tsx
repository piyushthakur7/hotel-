import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero Banner */}
      <div className="relative bg-white overflow-hidden">
        {/* Blue curved section */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <div className="w-[65%] h-full bg-[#1B3A5C] relative" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[360px] md:min-h-[420px]">
              {/* Left Text */}
              <div className="py-12 md:py-16 pr-4">
                <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.15] tracking-tight">
                  Explore Online Programmes for{' '}
                  <span className="text-[#E8A723] italic font-serif block mt-2 text-4xl md:text-6xl lg:text-[4rem]">
                    Working Professionals
                  </span>
                </h1>
              </div>

              {/* Right Image */}
              <div className="relative hidden lg:flex items-end justify-end h-full">
                {/* Decorative chevrons */}
                <div className="absolute top-8 left-8 flex items-center text-[#1B3A5C] z-20">
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
                    <path d="M10 5L25 20L10 35" stroke="#1B3A5C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25 5L40 20L25 35" stroke="#1B3A5C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Gold circle decoration */}
                <div className="absolute top-4 left-[40%] w-16 h-16 bg-gradient-to-br from-[#E8A723] to-[#D4941F] rounded-full z-20 shadow-lg" />
                
                {/* Yellow chevrons bottom */}
                <div className="absolute bottom-16 left-[30%] flex items-center z-20">
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <path d="M5 5L20 20L5 35" stroke="#E8A723" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 5L35 20L20 35" stroke="#E8A723" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M35 5L50 20L35 35" stroke="#E8A723" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Woman Image */}
                <div className="relative z-10 self-end">
                  <img 
                    src="/hero-woman.png" 
                    alt="Professional working on laptop" 
                    className="h-[380px] md:h-[420px] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
