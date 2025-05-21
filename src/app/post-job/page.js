'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PostJob() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in as client
    const userType = localStorage.getItem('userType');
    
    if (userType === 'client') {
      // If client is logged in, redirect to dashboard with post job form open
      router.push('/client-dashboard');
    } else {
      // If not logged in or not a client, redirect to login
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="bg-[#040404] min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <p>Redirecting...</p>
      </div>
    </div>
  );
}