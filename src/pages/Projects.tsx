
import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/Projects';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
