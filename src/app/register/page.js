'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



export default function RegisterPage() {
  const [showUserTypePopup, setShowUserTypePopup] = useState(true);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    // Employee fields
    firstName: '',
    lastName: '',
    // Client fields
    companyName: '',
    // Common fields
    email: '',
    phoneNumber: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [cv, setCv] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCvUpload = (e) => {
    if (e.target.files[0]) {
      setCv(e.target.files[0]);
    }
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Store user type in localStorage
    localStorage.setItem('userType', userType);
    
    // Simulate successful registration
    alert('Registration successful! You can now log in.');
    router.push('/login');
  };

  const selectUserType = (type) => {
    setUserType(type);
    setShowUserTypePopup(false);
  };

  return (
    <div className="bg-[#040404] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* User Type Selection Popup */}
      {showUserTypePopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#121212] rounded-xl p-8 max-w-md w-full border border-white/10 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">Register as</h2>
              <p className="mt-2 text-gray-400">Please select your account type</p>
            </div>
            
            <div className="mt-8 space-y-4">
              <button
                onClick={() => selectUserType('employee')}
                className="w-full flex items-center justify-center px-4 py-4 border border-transparent rounded-lg shadow-sm text-white bg-[#ff2e85] hover:bg-[#ff2e85]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff2e85] transition-colors"
              >
                <span className="text-lg font-medium">I'm looking for a job</span>
              </button>
              
              <button
                onClick={() => selectUserType('client')}
                className="w-full flex items-center justify-center px-4 py-4 border border-white/10 rounded-lg shadow-sm text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff2e85] transition-colors"
              >
                <span className="text-lg font-medium">I'm hiring</span>
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-[#ff2e85] hover:text-[#ff2e85]/80 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form */}
      {!showUserTypePopup && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {userType === 'employee' ? 'Employee Registration' : 'Client Registration'}
              </h2>
              <p className="mt-2 text-gray-400">
                {userType === 'employee' ? 'Create your job seeker account' : 'Create your employer account'}
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Employee-specific fields */}
                {userType === 'employee' && (
                  <>
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    
                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    
                    {/* CV Upload */}
                    <div className="md:col-span-2">
                      <label htmlFor="cv" className="block text-sm font-medium text-gray-300">Upload Your CV</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/10 border-dashed rounded-lg">
                        <div className="space-y-1 text-center">
                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="flex text-sm text-gray-400">
                            <label htmlFor="cv-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-[#ff2e85] hover:text-[#ff2e85]/80 focus-within:outline-none">
                              <span>Upload a file</span>
                              <input id="cv-upload" name="cv-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={handleCvUpload} />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-400">
                            PDF, DOC up to 10MB
                          </p>
                          {cv && <p className="text-sm text-[#ff2e85]">{cv.name}</p>}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Client-specific fields */}
                {userType === 'client' && (
                  <div className="md:col-span-2">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">Company or Business Name</label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                )}
                
                {/* Common fields for both user types */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">Phone Number</label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                {/* Profile Photo */}
                <div>
                  <label htmlFor="photo" className="block text-sm font-medium text-gray-300">
                    {userType === 'employee' ? 'Profile Photo' : 'Company Logo'}
                  </label>
                  <div className="mt-1 flex items-center space-x-4">
                    <div className="h-24 w-24 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      {photoPreview ? (
                        <img src={photoPreview} alt="Profile preview" className="h-full w-full object-cover" />
                      ) : (
                        <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>
                    <label htmlFor="photo-upload" className="cursor-pointer py-2 px-3 border border-white/10 rounded-md shadow-sm text-sm leading-4 font-medium text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff2e85]">
                      Change
                      <input id="photo-upload" name="photo-upload" type="file" className="sr-only" accept="image/*" onChange={handlePhotoUpload} />
                    </label>
                  </div>
                </div>
                
                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="mt-1 w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setShowUserTypePopup(true)}
                  className="text-sm text-[#ff2e85] hover:text-[#ff2e85]/80"
                >
                  ← Back to selection
                </button>
                <button
                  type="submit"
                  className="group relative flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff2e85] hover:bg-[#ff2e85]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff2e85]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}