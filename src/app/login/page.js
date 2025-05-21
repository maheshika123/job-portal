'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(''); // Store user type (employee or client)
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log('Login attempt with:', { email, password, userType });
    
    // Store user type in localStorage for navbar to check
    if (userType) {
      localStorage.setItem('userType', userType);
    }
    
    // Simulate successful login
    alert('Login successful!');
    router.push('/');
  };

  return (
    <div className="bg-[#040404] min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        {/* Login Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="mt-2 text-gray-400">Sign in to your account</p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md -space-y-px">
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2e85] focus:border-transparent"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* User Type Selection */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  id="employee-type"
                  name="user-type"
                  type="radio"
                  value="employee"
                  checked={userType === 'employee'}
                  onChange={() => setUserType('employee')}
                  className="h-4 w-4 text-[#ff2e85] focus:ring-[#ff2e85] border-white/10"
                  required
                />
                <label htmlFor="employee-type" className="ml-2 block text-sm text-gray-400">
                  I am an Employee
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="client-type"
                  name="user-type"
                  type="radio"
                  value="client"
                  checked={userType === 'client'}
                  onChange={() => setUserType('client')}
                  className="h-4 w-4 text-[#ff2e85] focus:ring-[#ff2e85] border-white/10"
                />
                <label htmlFor="client-type" className="ml-2 block text-sm text-gray-400">
                  I am a Client
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#ff2e85] focus:ring-[#ff2e85] border-white/10 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-[#ff2e85] hover:text-[#ff2e85]/80">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-[#ff2e85] hover:bg-[#ff2e85]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff2e85] transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Do not have an account?{' '}
              <Link href="/register" className="text-[#ff2e85] hover:text-[#ff2e85]/80 font-medium">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
