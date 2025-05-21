import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const How = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#060606]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">HOW IT </span>
              <span className="text-[#ff2e85]">WORKS</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow these simple steps to find your dream job
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-[#ff2e85]/30 transition-all duration-300 text-center relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff2e85] flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff2e85]/20 flex items-center justify-center group-hover:bg-[#ff2e85]/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#ff2e85] transition-colors">Create Account</h3>
              <p className="text-gray-400 text-sm">
                Sign up for free and create your professional profile with your skills and experience
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-[#ff2e85]/30 transition-all duration-300 text-center relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff2e85] flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff2e85]/20 flex items-center justify-center group-hover:bg-[#ff2e85]/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#ff2e85] transition-colors">Upload CV</h3>
              <p className="text-gray-400 text-sm">
                Upload your resume or create one using our templates to showcase your qualifications
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-[#ff2e85]/30 transition-all duration-300 text-center relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff2e85] flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff2e85]/20 flex items-center justify-center group-hover:bg-[#ff2e85]/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#ff2e85] transition-colors">Apply for Jobs</h3>
              <p className="text-gray-400 text-sm">
                Search and apply for jobs that match your skills, experience, and career goals
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:border-[#ff2e85]/30 transition-all duration-300 text-center relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff2e85] flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff2e85]/20 flex items-center justify-center group-hover:bg-[#ff2e85]/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#ff2e85] transition-colors">Get Interviews</h3>
              <p className="text-gray-400 text-sm">
                Prepare for interviews with our resources and land your dream job opportunity
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/register" className="inline-block bg-[#ff2e85] hover:bg-[#ff2e85]/90 text-white font-medium py-3 px-8 rounded-full transition-colors mr-4">
              Get Started
            </Link>
            <Link href="/how-it-works" className="inline-block bg-transparent hover:bg-white/5 text-white font-medium py-3 px-8 rounded-full transition-colors border border-white/20">
              Learn More
            </Link>
          </div>
        </div>
      </section>     
    );
};
export default How;