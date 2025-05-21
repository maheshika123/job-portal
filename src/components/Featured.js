import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Featured = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">FEATURED </span>
              <span className="text-[#ff2e85]">JOBS</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our handpicked selection of top job opportunities from leading companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Card 1 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-[#ff2e85]/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                    <Image 
                      src="/company/google.png" 
                      alt="Google" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Google</h3>
                    <p className="text-xs text-gray-400">Mountain View, CA</p>
                  </div>
                </div>
                <div className="bg-[#ff2e85]/10 text-[#ff2e85] text-xs font-medium py-1 px-3 rounded-full">
                  Full-time
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-2 group-hover:text-[#ff2e85] transition-colors">
                Senior Frontend Developer
              </h4>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                Join our team to build next-generation web applications using React, TypeScript, and cutting-edge technologies.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Remote / On-site
                </div>
                <div className="flex items-center text-sm font-medium text-[#ff2e85]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  $120K - $150K
                </div>
              </div>
              
              <Link href="/jobs/senior-frontend-developer" className="block w-full bg-transparent hover:bg-[#ff2e85] text-[#ff2e85] hover:text-white text-center py-2 px-4 border border-[#ff2e85] rounded-full transition-colors">
                Apply Now
              </Link>
            </div>
            
            {/* Job Card 2 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-[#ff2e85]/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                    <Image 
                      src="/company/microsoft.png" 
                      alt="Microsoft" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Microsoft</h3>
                    <p className="text-xs text-gray-400">Redmond, WA</p>
                  </div>
                </div>
                <div className="bg-[#ff2e85]/10 text-[#ff2e85] text-xs font-medium py-1 px-3 rounded-full">
                  Contract
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-2 group-hover:text-[#ff2e85] transition-colors">
                UX/UI Designer
              </h4>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                Design intuitive and accessible user interfaces for our cloud products. Experience with Figma and design systems required.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Hybrid
                </div>
                <div className="flex items-center text-sm font-medium text-[#ff2e85]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  $90K - $110K
                </div>
              </div>
              
              <Link href="/jobs/ux-ui-designer" className="block w-full bg-transparent hover:bg-[#ff2e85] text-[#ff2e85] hover:text-white text-center py-2 px-4 border border-[#ff2e85] rounded-full transition-colors">
                Apply Now
              </Link>
            </div>
            
            {/* Job Card 3 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-[#ff2e85]/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                    <Image 
                      src="/company/amazon.png" 
                      alt="Amazon" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Amazon</h3>
                    <p className="text-xs text-gray-400">Seattle, WA</p>
                  </div>
                </div>
                <div className="bg-[#ff2e85]/10 text-[#ff2e85] text-xs font-medium py-1 px-3 rounded-full">
                  Full-time
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-2 group-hover:text-[#ff2e85] transition-colors">
                Data Scientist
              </h4>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                Analyze large datasets to extract insights and build predictive models. Strong background in statistics and machine learning required.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  On-site
                </div>
                <div className="flex items-center text-sm font-medium text-[#ff2e85]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  $130K - $160K
                </div>
              </div>
              
              <Link href="/jobs/data-scientist" className="block w-full bg-transparent hover:bg-[#ff2e85] text-[#ff2e85] hover:text-white text-center py-2 px-4 border border-[#ff2e85] rounded-full transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
          
         
        </div>
      </section>
    
    );
};
export default Featured;