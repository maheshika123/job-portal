import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Find Jobs - JobPortal',
  description: 'Browse all available job opportunities on JobPortal',
};

export default function JobsPage() {
  // Sample job data - in a real app, this would come from an API or database
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Google',
      logo: '/company/google.png',
      location: 'Mountain View, CA',
      salary: '$120,000 - $150,000',
      type: 'Full-time',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'Microsoft',
      logo: '/company/microsoft.png',
      location: 'Redmond, WA',
      salary: '$110,000 - $140,000',
      type: 'Full-time',
      posted: '1 week ago',
    },
    {
      id: 3,
      title: 'DevOps Specialist',
      company: 'Amazon',
      logo: '/company/amazon.png',
      location: 'Seattle, WA',
      salary: '$125,000 - $155,000',
      type: 'Full-time',
      posted: '3 days ago',
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      company: 'Google',
      logo: '/company/google.png',
      location: 'New York, NY',
      salary: '$95,000 - $120,000',
      type: 'Full-time',
      posted: '5 days ago',
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Microsoft',
      logo: '/company/microsoft.png',
      location: 'Boston, MA',
      salary: '$130,000 - $160,000',
      type: 'Full-time',
      posted: '1 day ago',
    },
    {
      id: 6,
      title: 'Product Manager',
      company: 'Amazon',
      logo: '/company/amazon.png',
      location: 'Austin, TX',
      salary: '$115,000 - $145,000',
      type: 'Full-time',
      posted: '4 days ago',
    },
    {
        id: 7,
        title: 'Senior Frontend Developer',
        company: 'Google',
        logo: '/company/google.png',
        location: 'Mountain View, CA',
        salary: '$120,000 - $150,000',
        type: 'Full-time',
        posted: '2 days ago',
      },
      {
        id: 8,
        title: 'Backend Engineer',
        company: 'Microsoft',
        logo: '/company/microsoft.png',
        location: 'Redmond, WA',
        salary: '$110,000 - $140,000',
        type: 'Full-time',
        posted: '1 week ago',
      },
      {
        id: 9,
        title: 'DevOps Specialist',
        company: 'Amazon',
        logo: '/company/amazon.png',
        location: 'Seattle, WA',
        salary: '$125,000 - $155,000',
        type: 'Full-time',
        posted: '3 days ago',
      },
      {
        id: 10,
        title: 'UX/UI Designer',
        company: 'Google',
        logo: '/company/google.png',
        location: 'New York, NY',
        salary: '$95,000 - $120,000',
        type: 'Full-time',
        posted: '5 days ago',
      },
      {
        id: 11,
        title: 'Data Scientist',
        company: 'Microsoft',
        logo: '/company/microsoft.png',
        location: 'Boston, MA',
        salary: '$130,000 - $160,000',
        type: 'Full-time',
        posted: '1 day ago',
      },
      {
        id: 12,
        title: 'Product Manager',
        company: 'Amazon',
        logo: '/company/amazon.png',
        location: 'Austin, TX',
        salary: '$115,000 - $145,000',
        type: 'Full-time',
        posted: '4 days ago',
      },
  ];

  return (
    <div className="bg-[#040404] min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Browse through hundreds of job opportunities from top companies around the world.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85]"
              />
            </div>
            <div>
              <button className="w-full bg-[#ff2e85] hover:bg-[#ff2e85]/90 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#ff2e85]/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4 bg-white/10 rounded-lg overflow-hidden">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-[#ff2e85] transition-colors">{job.title}</h3>
                  <p className="text-gray-400">{job.company}</p>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                <div className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{job.posted}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-[#ff2e85]/10 text-[#ff2e85] text-sm rounded-full">{job.type}</span>
                <Link href={`/jobs/${job.id}`} className="text-[#ff2e85] hover:text-[#ff2e85]/80 font-medium transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff2e85]/20 flex items-center justify-center text-gray-400 hover:text-[#ff2e85] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-[#ff2e85] flex items-center justify-center text-white">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff2e85]/20 flex items-center justify-center text-gray-400 hover:text-[#ff2e85] transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff2e85]/20 flex items-center justify-center text-gray-400 hover:text-[#ff2e85] transition-colors">
            3
          </button>
          <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff2e85]/20 flex items-center justify-center text-gray-400 hover:text-[#ff2e85] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}