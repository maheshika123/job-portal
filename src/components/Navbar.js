'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [userType, setUserType] = useState(null); // 'employee' or 'client'
  const router = useRouter();

  // Check user type on component mount and when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserType = localStorage.getItem('userType');
      setUserType(storedUserType);
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    // Here you would typically handle registration
    console.log('Register attempt with:', { registerName, registerEmail, registerPassword });
    
    // Simulate successful registration
    alert('Registration successful! You can now log in.');
    setShowRegisterPopup(false);
    router.push('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('userType');
    setUserType(null);
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="relative max-w-7xl mx-auto">
        {/* Gradient border overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/25 via-black/0 to-white/25 p-[5px] -m-[1px]">
          <div className="h-full w-full rounded-full backdrop-blur-md bg-black/10" />
        </div>
        
        {/* Navbar content */}
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl">
            <span className="text-[#ff2e85] pl-[20px]" >Job</span> Portal
          </Link>
          
          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/jobs" className="text-white hover:text-[#ff2e85] transition-colors">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-white hover:text-[#ff2e85] transition-colors">
              Companies
            </Link>
            
            {userType ? (
              // Logged in state
              <>
                <button 
                  onClick={handleLogout}
                  className="text-white hover:text-[#ff2e85] transition-colors"
                >
                  Logout
                </button>
                {userType === 'client' ? (
                  <Link href="/client-dashboard" className="bg-[#ff2e85] text-[#040404] px-4 py-2 rounded-full font-medium hover:bg-[#ff2e85]/90 transition-colors">
                    Post a Job
                  </Link>
                ) : (
                  <Link href="/jobs" className="bg-[#ff2e85] text-[#040404] px-4 py-2 rounded-full font-medium hover:bg-[#ff2e85]/90 transition-colors">
                    Find a Job
                  </Link>
                )}
              </>
            ) : (
              // Logged out state
              <>
                <Link href="/login" className="text-white hover:text-[#ff2e85] transition-colors">
                  Login
                </Link>
                <Link href="/register" className="text-white hover:text-[#ff2e85] transition-colors">
                  Register
                </Link>
                <Link href="/login" className="bg-[#ff2e85] text-[#040404] px-4 py-2 rounded-full font-medium hover:bg-[#ff2e85]/90 transition-colors">
                  Post a Job
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Register Popup */}
      {showRegisterPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#121212] rounded-xl p-8 max-w-md w-full border border-white/10 relative">
            <button 
              onClick={() => setShowRegisterPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Create an Account</h2>
              <p className="mt-2 text-gray-400">Join our job portal community</p>
            </div>
            
            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label htmlFor="register-name" className="sr-only">Full Name</label>
                <input
                  id="register-name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  placeholder="Full Name"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="register-email" className="sr-only">Email address</label>
                <input
                  id="register-email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  placeholder="Email address"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="register-password" className="sr-only">Password</label>
                <input
                  id="register-password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  placeholder="Password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-[#ff2e85] hover:bg-[#ff2e85]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff2e85] transition-colors"
                >
                  Register
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <Link 
                  href="/login" 
                  className="text-[#ff2e85] hover:text-[#ff2e85]/80 font-medium"
                  onClick={() => setShowRegisterPopup(false)}
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;