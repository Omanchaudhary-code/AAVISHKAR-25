
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SponsorSection = ({ title, icon, description, color }: { 
  title: string; 
  icon: React.ReactNode; 
  description: string;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <div className="text-center mb-8">
      <div className={cn(
        "inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4",
        color
      )}>
        {icon}
      </div>
      <h2 className="text-3xl font-display font-bold mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[1, 2, 3].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform" />
          <div className="relative bg-white rounded-lg shadow-lg flex items-center justify-center p-8 border border-gray-200 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <span className="text-muted-foreground font-medium relative z-10">Coming Soon</span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative overflow-hidden py-10 mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-aavishkar-blue/5 to-aavishkar-green/5 z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#4AA5EB10,transparent_60%),radial-gradient(circle_at_70%_20%,#65B32E10,transparent_60%)] z-0"></div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center relative z-10"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-aavishkar-darkblue">
                Our Supporters
              </h1>
              <div className="h-1.5 w-32 md:w-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-aavishkar-blue via-aavishkar-green to-aavishkar-blue/70"></div>
              <p className="text-foreground/70 max-w-2xl mx-auto text-base md:text-lg px-4">
                Meet the amazing organizations and partners who make Aavishkar possible through their generous support and collaboration.
              </p>
            </motion.div>
          </motion.div>

          <SponsorSection
            title="Our Sponsors"
            icon={<TrendingUp className="w-8 h-8 text-white" />}
            description="Leading organizations that support our vision financially and help make Aavishkar a reality."
            color="bg-gradient-to-r from-amber-500 to-orange-500"
          />

          <SponsorSection
            title="Our Partners"
            icon={<Users className="w-8 h-8 text-white" />}
            description="Strategic collaborators who work alongside us to create impactful technological experiences."
            color="bg-gradient-to-r from-blue-500 to-cyan-500"
          />

          <SponsorSection
            title="Supported By"
            icon={<ArrowRight className="w-8 h-8 text-white" />}
            description="Organizations and institutions that provide valuable resources and support to our initiatives."
            color="bg-gradient-to-r from-violet-500 to-purple-500"
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
