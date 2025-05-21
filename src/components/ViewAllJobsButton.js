'use client';

import Link from 'next/link';

export default function ViewAllJobsButton() {
  const handleClick = () => {
    console.log('View All Jobs button clicked');
    // Add any additional functionality here
  };

  return (
    <div className="text-center mt-10">
    <Link href="/jobs" className="inline-block bg-[#ff2e85] hover:bg-[#ff2e85]/90 text-white font-medium py-3 px-8 rounded-full transition-colors">
  View All Jobs
</Link>
    </div>
  );
} 

