import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Top Companies - JobPortal',
  description: 'Browse top companies hiring on JobPortal',
};

export default function CompaniesPage() {
  // Sample company data - in a real app, this would come from an API or database
  const companies = [
    {
      id: 1,
      name: 'Google',
      logo: '/company/google.png',
      industry: 'Technology',
      location: 'Mountain View, CA',
      employees: '100,000+',
      openPositions: 42,
      description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products.',
    },
    {
      id: 2,
      name: 'Microsoft',
      logo: '/company/microsoft.png',
      industry: 'Technology',
      location: 'Redmond, WA',
      employees: '150,000+',
      openPositions: 56,
      description: 'Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, and personal computers.',
    },
    {
      id: 3,
      name: 'Amazon',
      logo: '/company/amazon.png',
      industry: 'E-commerce, Cloud Computing',
      location: 'Seattle, WA',
      employees: '1,000,000+',
      openPositions: 78,
      description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    },
    {
      id: 4,
      name: 'Apple',
      logo: '/company/apple.png',
      industry: 'Technology, Consumer Electronics',
      location: 'Cupertino, CA',
      employees: '147,000+',
      openPositions: 35,
      description: 'Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.',
    },
    {
      id: 5,
      name: 'Facebook',
      logo: '/company/facebook.png',
      industry: 'Social Media, Technology',
      location: 'Menlo Park, CA',
      employees: '60,000+',
      openPositions: 29,
      description: 'Facebook, Inc. is an American social media conglomerate corporation that builds technologies that help people connect, find communities, and grow businesses.',
    },
    {
      id: 6,
      name: 'Netflix',
      logo: '/company/netflix.png',
      industry: 'Entertainment, Technology',
      location: 'Los Gatos, CA',
      employees: '12,000+',
      openPositions: 18,
      description: 'Netflix, Inc. is an American content platform and production company that offers subscription-based streaming service.',
    },
    {
      id: 7,
      name: 'Tesla',
      logo: '/company/tesla.png',
      industry: 'Automotive, Energy',
      location: 'Palo Alto, CA',
      employees: '70,000+',
      openPositions: 24,
      description: 'Tesla, Inc. is an American electric vehicle and clean energy company that designs and manufactures electric cars, battery energy storage, solar panels, and related products and services.',
    },
    {
      id: 8,
      name: 'IBM',
      logo: '/company/ibm.png',
      industry: 'Technology, Consulting',
      location: 'Armonk, NY',
      employees: '350,000+',
      openPositions: 47,
      description: 'International Business Machines Corporation is an American multinational technology company that produces and sells computer hardware, middleware, and software.',
    },
  ];

  // Industry filters
  const industries = [
    'All Industries',
    'Technology',
    'E-commerce',
    'Entertainment',
    'Automotive',
    'Consulting',
    'Social Media',
  ];

  return (
    <div className="bg-[#040404] min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Companies Hiring Now</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover leading companies across various industries with exciting career opportunities
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search companies..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85]"
              />
            </div>
            <div>
              <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] appearance-none">
                {industries.map((industry, index) => (
                  <option key={index} value={industry === 'All Industries' ? '' : industry} className="bg-[#121212] text-white">
                    {industry}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button className="w-full bg-[#ff2e85] hover:bg-[#ff2e85]/90 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                Search Companies
              </button>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {companies.map((company) => (
            <Link href={`/companies/${company.id}`} key={company.id} className="block">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#ff2e85]/50 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 relative mr-4 bg-white/10 rounded-lg overflow-hidden flex items-center justify-center p-2">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white hover:text-[#ff2e85] transition-colors">{company.name}</h3>
                    <p className="text-gray-400 text-sm">{company.industry}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{company.description}</p>
                
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#ff2e85]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{company.employees} employees</span>
                  </div>
                  <div className="flex items-center text-white font-medium">
                    <span className="px-3 py-1 bg-[#ff2e85]/10 text-[#ff2e85] text-sm rounded-full">
                      {company.openPositions} open positions
                    </span>
                  </div>
                </div>
              </div>
            </Link>
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