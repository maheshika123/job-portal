import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (


    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-8">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#040404] opacity-80"></div>
    
    {/* Content container */}
    <div className="relative max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left column - Text and search */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">FIND YOUR </span>
            <span className="text-[#ff2e85]">JOB HERE!</span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Provides a wide range of job options in various fields around
            the world
          </p>
          
          {/* Search form */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Job Type */}
              <div className="relative">
                <div className="flex items-center bg-white/5 rounded-full px-4 py-2 cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#ff2e85]/20 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300">Job Type</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Salary Range */}
              <div className="relative">
                <div className="flex items-center bg-white/5 rounded-full px-4 py-2 cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#ff2e85]/20 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300">Salary Range</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Location */}
              <div className="relative">
                <div className="flex items-center bg-white/5 rounded-full px-4 py-2 cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#ff2e85]/20 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300">Location</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Search button */}
            <button className="w-full md:w-auto bg-[#ff2e85] hover:bg-[#ff2e85]/90 text-white font-medium py-2 px-8 rounded-full transition-colors cursor-pointer">
              SEARCH
            </button>
          </div>
          
          {/* Popular categories */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 uppercase">POPULAR CATEGORIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {/* Category items */}
              <Link href="/jobs/marketing" className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#ff2e85]/20 flex items-center justify-center mb-2 group-hover:bg-[#ff2e85]/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <p className="text-xs text-center group-hover:text-[#ff2e85] transition-colors">Marketing &<br />Communication</p>
              </Link>
              
              <Link href="/jobs/finance" className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#ff2e85]/20 flex items-center justify-center mb-2 group-hover:bg-[#ff2e85]/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs text-center group-hover:text-[#ff2e85] transition-colors">Finance</p>
              </Link>
              
              <Link href="/jobs/business" className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#ff2e85]/20 flex items-center justify-center mb-2 group-hover:bg-[#ff2e85]/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs text-center group-hover:text-[#ff2e85] transition-colors">Business<br />Development</p>
              </Link>
              
              <Link href="/jobs/customer-service" className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#ff2e85]/20 flex items-center justify-center mb-2 group-hover:bg-[#ff2e85]/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-xs text-center group-hover:text-[#ff2e85] transition-colors">Customer<br />Service</p>
              </Link>
              
              <Link href="/jobs/finance-management" className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#ff2e85]/20 flex items-center justify-center mb-2 group-hover:bg-[#ff2e85]/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-xs text-center group-hover:text-[#ff2e85] transition-colors">Software Field</p>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right column - Image */}
        <div className="hidden md:block">
          <div className="relative h-[500px] w-full">
            <Image 
              src="/proffessional.jpg" 
              alt="Professionals reviewing documents" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    </section>

  );
};
export default Hero;