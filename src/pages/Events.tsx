
import React from 'react';
import Navbar from '@/components/Navbar';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="pt-24 md:pt-28"
      >
        <div className="container mx-auto px-4 py-8 md:py-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-aavishkar-darkblue">Events</h1>
            <div className="h-1 w-20 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Explore our exciting lineup of events and pre-events for Aavishkar 25. From robotics competitions to innovative 
              hackathons, there's something for everyone interested in technology and innovation.
            </p>
          </motion.div>
        </div>
        <Events />
      </motion.div>
      <Footer />
    </div>
  );
};

export default EventsPage;
