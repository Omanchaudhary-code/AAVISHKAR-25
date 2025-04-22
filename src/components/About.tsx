
import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, Lightbulb, Target } from 'lucide-react';

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

  const statistics = [
    { value: "7+", label: "Editions", icon: <Award className="h-5 w-5 text-aavishkar-blue" /> },
    { value: "4000+", label: "Participants", icon: <Users className="h-5 w-5 text-aavishkar-green" /> },
    { value: "50+", label: "Events", icon: <Lightbulb className="h-5 w-5 text-aavishkar-yellow" /> },
    { value: "20+", label: "Partnerships", icon: <Target className="h-5 w-5 text-aavishkar-darkblue" /> }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-10 right-0 w-96 h-96 bg-aavishkar-yellow/5 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-48 w-96 h-96 bg-aavishkar-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-aavishkar-darkblue to-aavishkar-blue font-display text-3xl md:text-4xl font-bold mb-6">
            About AAVISHKAR
          </h2>
          <div className="h-1 w-20 bg-aavishkar-green mx-auto mb-8 rounded-full" />
          <p className="text-foreground/80 mb-6">
            Aavishkar, the flagship event of Kathmandu University Robotics Club, has been at the forefront of technological innovation since its inception in 2017. It has grown from a small campus event to one of Nepal's premier technical festivals.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          {statistics.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md border border-white/40"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-aavishkar-darkblue mb-1">{stat.value}</h3>
              <p className="text-foreground/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-display font-semibold text-aavishkar-darkblue mb-4">Our Journey</h3>
              <p className="text-foreground/80 mb-4">
                Founded with the vision of promoting robotics and technical innovation among students, Aavishkar has evolved into a comprehensive platform that bridges the gap between theoretical knowledge and practical applications.
              </p>
              
              <p className="text-foreground/80 mb-4">
                Over the years, we have hosted various events ranging from robotics competitions and hackathons to workshops and technical exhibitions. Our events have attracted participants from across Nepal and beyond, creating a vibrant community of tech enthusiasts.
              </p>

              <h3 className="text-2xl font-display font-semibold text-aavishkar-darkblue mb-4 mt-8">Our Vision</h3>
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
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-aavishkar-green rounded-full mt-2 mr-3"></span>
                  <span>Building bridges between academia and industry</span>
                </li>
              </ul>

              <div className="mt-8">
                <a href="/past-events" className="inline-flex items-center text-aavishkar-blue hover:text-aavishkar-darkblue font-semibold transition-colors">
                  Explore our history <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl animate-float">
                <img 
                  src="/lovable-uploads/7c9482d8-1cf4-47b8-9b69-8f14d394b401.png" 
                  alt="Aavishkar Logo" 
                  className="w-full h-full object-contain bg-gradient-to-br from-aavishkar-blue/10 to-aavishkar-green/10 p-8" 
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-aavishkar-green/30 rounded-2xl -z-10 scale-105" />
            <div className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-aavishkar-blue/10 rounded-full blur-md" />
            <div className="absolute bottom-0 right-0 w-20 h-20 translate-x-1/3 translate-y-1/3 bg-aavishkar-yellow/20 rounded-full blur-md" />
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={fadeIn}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-aavishkar-darkblue mb-4">Organizing Team</h2>
            <div className="h-1 w-16 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Aavishkar is organized by a dedicated team of students from Kathmandu University Robotics Club, who work tirelessly to make each edition better than the last.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/30">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-aavishkar-blue/20">
                  <img src="/lovable-uploads/3b4906c4-0330-49d8-8bc7-06de5a224192.png" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-aavishkar-darkblue">Aaditya Sharma</h3>
                <p className="text-sm text-foreground/70">Event Coordinator</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-aavishkar-green/20">
                  <img src="/lovable-uploads/67bb11fe-a984-4aec-8687-f7114234aeb3.png" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-aavishkar-darkblue">Priya Joshi</h3>
                <p className="text-sm text-foreground/70">Technical Lead</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-aavishkar-yellow/20">
                  <img src="/lovable-uploads/3b4906c4-0330-49d8-8bc7-06de5a224192.png" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-aavishkar-darkblue">Binod Poudel</h3>
                <p className="text-sm text-foreground/70">Marketing Head</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-aavishkar-darkblue/20">
                  <img src="/lovable-uploads/e330865f-5aec-48fb-ab63-62950900dfa0.png" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-aavishkar-darkblue">Suman Khadka</h3>
                <p className="text-sm text-foreground/70">Logistics Manager</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="#" className="inline-flex items-center text-aavishkar-blue hover:text-aavishkar-darkblue font-semibold transition-colors">
                Meet the entire team <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
