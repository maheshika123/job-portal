'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ClientDashboard() {
  const [jobs, setJobs] = useState([]);
  const [showPostJobForm, setShowPostJobForm] = useState(false);
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: '',
    salary: '',
    contactEmail: ''
  });
  const router = useRouter();

  // Check if user is logged in as client
  useEffect(() => {
    const userType = localStorage.getItem('userType');
    if (userType !== 'client') {
      router.push('/login');
    }
    
    // In a real app, you would fetch the client's posted jobs from an API
    // For now, we'll use mock data
    setJobs([
      { id: 1, title: 'Senior Developer', applicants: 12, status: 'active', postedDate: '2023-05-15' },
      { id: 2, title: 'UI/UX Designer', applicants: 8, status: 'active', postedDate: '2023-05-10' },
    ]);
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    const newJob = {
      id: jobs.length + 1,
      title: jobData.title,
      applicants: 0,
      status: 'active',
      postedDate: new Date().toISOString().split('T')[0]
    };
    
    setJobs([...jobs, newJob]);
    setShowPostJobForm(false);
    setJobData({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      description: '',
      requirements: '',
      salary: '',
      contactEmail: ''
    });
    
    alert('Job posted successfully!');
  };

  return (
    <div className="bg-[#040404] min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Client Dashboard</h1>
          <button
            onClick={() => setShowPostJobForm(true)}
            className="bg-[#ff2e85] text-[#040404] px-6 py-3 rounded-lg font-medium hover:bg-[#ff2e85]/90 transition-colors"
          >
            Post New Job
          </button>
        </div>
        
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-gray-300">Active Jobs</h3>
            <p className="text-3xl font-bold text-white mt-2">{jobs.filter(job => job.status === 'active').length}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-gray-300">Total Applicants</h3>
            <p className="text-3xl font-bold text-white mt-2">{jobs.reduce((sum, job) => sum + job.applicants, 0)}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-gray-300">Total Jobs Posted</h3>
            <p className="text-3xl font-bold text-white mt-2">{jobs.length}</p>
          </div>
        </div>
        
        {/* Jobs Table */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 overflow-hidden">
          <h2 className="text-xl font-bold text-white mb-4">Your Job Listings</h2>
          
          {jobs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Job Title</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Posted Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Applicants</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="px-4 py-4 text-sm text-white">{job.title}</td>
                      <td className="px-4 py-4 text-sm text-gray-300">{job.postedDate}</td>
                      <td className="px-4 py-4 text-sm text-gray-300">{job.applicants}</td>
                      <td className="px-4 py-4 text-sm">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-300">
                        <button className="text-[#ff2e85] hover:text-[#ff2e85]/80 mr-3">Edit</button>
                        <button className="text-[#ff2e85] hover:text-[#ff2e85]/80 mr-3">View Applicants</button>
                        <button className="text-red-500 hover:text-red-400">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">You haven't posted any jobs yet.</p>
          )}
        </div>
      </div>
      
      {/* Post Job Form Modal */}
      {showPostJobForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-[#121212] rounded-xl p-8 max-w-2xl w-full border border-white/10 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowPostJobForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6">Post a New Job</h2>
            
            <form onSubmit={handlePostJob} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Job Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={jobData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={jobData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={jobData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">Job Type</label>
                  <select
                    id="type"
                    name="type"
                    value={jobData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-300 mb-1">Salary Range (optional)</label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={jobData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g. $50,000 - $70,000"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Job Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={jobData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-1">Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={jobData.requirements}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="List the key requirements for this position"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-300 mb-1">Contact Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={jobData.contactEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                />
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPostJobForm(false)}
                  className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#ff2e85] text-[#040404] font-medium hover:bg-[#ff2e85]/90 transition-colors"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}