
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Events from '@/components/Events';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Timeline />
      <Events />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
