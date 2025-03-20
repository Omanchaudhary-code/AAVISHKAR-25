
import React from 'react';
import { cn } from "@/lib/utils";

const About = () => {
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
            A Little Bit Of AAVISHKAR
          </h2>
          <div className="h-1 w-20 bg-aavishkar-green mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-6">
                Aavishkar, the pyrrole of innovators and tech-geeks is the annual technical festival of Kathmandu University Robotics Club. It is a platform to showcase radiant ideas and to promote skills to reach the pinnacle of the human mind. 
              </p>
              <p className="text-foreground/80 mb-6">
                Carrying on the legacy since 2017, Aavishkar has established a name for itself among intellectuals and professionals from various fields across the country. It will be a 2-day voyage towards cerebral awakening and technical excellence, comprising various competitions and fun events.
              </p>

              <h3 className="text-2xl font-display font-semibold text-aavishkar-darkblue mb-4">Objectives</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-aavishkar-green rounded-full mt-2 mr-3"></span>
                  <span>To gather participants from different parts to showcase their skills, technical expertise and problem-solving abilities through teamwork.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-aavishkar-green rounded-full mt-2 mr-3"></span>
                  <span>To entice people in the field of robotics and serve as a common learning hub for participants from all areas of Nepal.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-aavishkar-green rounded-full mt-2 mr-3"></span>
                  <span>To solve community problems through various competition and act as a platform to promote young minds.</span>
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
