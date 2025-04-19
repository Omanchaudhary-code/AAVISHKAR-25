
import React from 'react';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';

const PastEvents = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default PastEvents;
