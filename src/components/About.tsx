import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";

const About = () => {
  useEffect(() => {
    // Check if the URL has #about hash
    if (window.location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-10 right-0 w-96 h-96 bg-aavishkar-yellow/5 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-48 w-96 h-96 bg-aavishkar-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-aavishkar-darkblue to-aavishkar-blue font-display text-3xl md:text-4xl font-bold mb-6">
            About AAVISHKAR
          </h2>
          <div className="h-1 w-20 bg-aavishkar-green mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-6">
                Aavishkar, the annual technical festival of Kathmandu University Robotics Club, is a platform for innovators and tech enthusiasts to showcase their ideas and skills. Since 2017, it has been bringing together the brightest minds from across Nepal for a 2-day celebration of technical excellence.
              </p>

              <h3 className="text-2xl font-display font-semibold text-aavishkar-darkblue mb-4">Our Vision</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-aavishkar-green rounded-full mt-2 mr-3"></span>
                  <span>Fostering innovation and technical expertise through hands-on competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-aavishkar-green rounded-full mt-2 mr-3"></span>
                  <span>Creating a collaborative learning environment for robotics enthusiasts</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-aavishkar-green rounded-full mt-2 mr-3"></span>
                  <span>Promoting sustainable technological solutions for community development</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl animate-float">
                <img 
                  src="/lovable-uploads/7c9482d8-1cf4-47b8-9b69-8f14d394b401.png" 
                  alt="Aavishkar Logo" 
                  className="w-full h-full object-contain bg-aavishkar-green/20 p-8" 
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-aavishkar-green/30 rounded-2xl -z-10 scale-105" />
            <div className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-aavishkar-blue/10 rounded-full blur-md" />
            <div className="absolute bottom-0 right-0 w-20 h-20 translate-x-1/3 translate-y-1/3 bg-aavishkar-yellow/20 rounded-full blur-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
