
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Image } from 'lucide-react';
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const sponsorImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&auto=format&fit=crop",
];

const SponsorCarousel = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="w-full max-w-4xl mx-auto mb-20"
  >
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {sponsorImages.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Card className="overflow-hidden border-none rounded-xl h-full">
                <CardContent className="p-0 aspect-square relative">
                  <img
                    src={image} 
                    alt={`Sponsor ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">Technology Partner {index + 1}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-2">
        <CarouselPrevious className="static mx-2 transform-none bg-white" />
        <CarouselNext className="static mx-2 transform-none bg-white" />
      </div>
    </Carousel>
  </motion.div>
);

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

// Staggered photo grid with animations
const PhotoGrid = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="max-w-6xl mx-auto mb-20"
  >
    <h3 className="text-2xl font-display font-bold mb-6 text-center">Our Technology Partners</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
      {[...Array(6)].map((_, i) => {
        const randomImage = sponsorImages[i % sponsorImages.length];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ 
              scale: 1.03, 
              rotate: i % 2 === 0 ? 1 : -1 
            }}
            className={cn(
              "overflow-hidden rounded-lg shadow-md aspect-[4/3]",
              i === 0 && "col-span-2 row-span-2 md:aspect-square",
              i === 3 && "md:col-span-2"
            )}
          >
            <img 
              src={randomImage}
              alt={`Technology partner ${i+1}`}
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </motion.div>
        );
      })}
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

          {/* New animated carousel section */}
          <SponsorCarousel />
          
          {/* New animated photo grid */}
          <PhotoGrid />

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
