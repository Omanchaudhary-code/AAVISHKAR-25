
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/About';
import Mission from '@/components/Mission';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <AboutSection />
        <Mission />
      </div>
      <Footer />
    </div>
  );
};

export default About;
