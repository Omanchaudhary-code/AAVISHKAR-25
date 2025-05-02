
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Image } from 'lucide-react';
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const sponsorImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&auto=format&fit=crop",
];

const SponsorSection = ({ title, icon, description, color, images }: { 
  title: string; 
  icon: React.ReactNode; 
  description: string;
  color: string;
  images: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-24"
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
    
    {/* Staggered photo grid with animations */}
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.15,
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              rotate: i % 2 === 0 ? 1 : -1 
            }}
            className={cn(
              "group overflow-hidden rounded-lg shadow-md",
              i === 0 && "md:col-span-2 md:row-span-2"
            )}
          >
            <div className="overflow-hidden w-full h-full aspect-[4/3]">
              <img 
                src={image}
                alt={`${title} ${i+1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white font-medium text-lg">Partner {i + 1}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Sponsors = () => {
  // Images for each section
  const sponsorImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
  ];

  const partnerImages = [
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
  ];

  const supportedByImages = [
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
  ];

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
            images={sponsorImages}
          />

          <SponsorSection
            title="Our Partners"
            icon={<Users className="w-8 h-8 text-white" />}
            description="Strategic collaborators who work alongside us to create impactful technological experiences."
            color="bg-gradient-to-r from-blue-500 to-cyan-500"
            images={partnerImages}
          />

          <SponsorSection
            title="Supported By"
            icon={<ArrowRight className="w-8 h-8 text-white" />}
            description="Organizations and institutions that provide valuable resources and support to our initiatives."
            color="bg-gradient-to-r from-violet-500 to-purple-500"
            images={supportedByImages}
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
