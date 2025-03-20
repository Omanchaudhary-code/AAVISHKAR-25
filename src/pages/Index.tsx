
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Events from '@/components/Events';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Timeline />
      <Projects />
      <Events />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
