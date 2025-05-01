
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, ChevronLeft, Calendar } from "lucide-react";

const PastEvents = () => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState("recent");

  const recentGallery = [
    {
      src: "/lovable-uploads/67bb11fe-a984-4aec-8687-f7114234aeb3.png",
      alt: "Award ceremony",
      year: "2024",
      caption: "Winners of the Robotics Competition"
    },
    {
      src: "/lovable-uploads/3b4906c4-0330-49d8-8bc7-06de5a224192.png",
      alt: "Team Photo",
      year: "2024",
      caption: "KURC Team Members"
    },
    {
      src: "/lovable-uploads/e330865f-5aec-48fb-ab63-62950900dfa0.png",
      alt: "Aquabot Competition",
      year: "2024",
      caption: "Aquabot Competition Finals"
    },
    {
      src: "/lovable-uploads/d553e50d-8757-408f-853c-7bd93298485f.png",
      alt: "Innovation Exhibition",
      year: "2024",
      caption: "Innovation Showcase"
    },
    {
      src: "/lovable-uploads/e67b9874-91e4-45ea-bfdf-b706e1b03282.png",
      alt: "Hardware Hackathon",
      year: "2024",
      caption: "24-hour Hardware Hackathon"
    },
    {
      src: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png",
      alt: "Workshop Session", 
      year: "2024",
      caption: "Pre-event Workshop Session"
    }
  ];

  const archiveGallery = [
    {
      src: "/lovable-uploads/0144588e-95f1-4eae-9b0d-fbda59523016.png",
      alt: "Aavishkar 2023",
      year: "2023",
      caption: "Opening Ceremony"
    },
    {
      src: "/lovable-uploads/67bb11fe-a984-4aec-8687-f7114234aeb3.png",
      alt: "Aavishkar 2023",
      year: "2023",
      caption: "Award Ceremony"
    },
    {
      src: "/lovable-uploads/3b4906c4-0330-49d8-8bc7-06de5a224192.png",
      alt: "Aavishkar 2022",
      year: "2022",
      caption: "Team Photo"
    },
    {
      src: "/lovable-uploads/e330865f-5aec-48fb-ab63-62950900dfa0.png",
      alt: "Aavishkar 2021",
      year: "2021",
      caption: "Aquabot Prototype Testing"
    }
  ];

  const galleryData = {
    recent: recentGallery,
    archive: archiveGallery
  };

  const openLightbox = (index: number) => {
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setImageIndex(null);
  };

  const goToPrevious = () => {
    const activeGalleryItems = galleryData[activeGallery as keyof typeof galleryData];
    setImageIndex((prevIndex) => 
      prevIndex === 0 ? activeGalleryItems.length - 1 : prevIndex ? prevIndex - 1 : 0
    );
  };

  const goToNext = () => {
    const activeGalleryItems = galleryData[activeGallery as keyof typeof galleryData];
    setImageIndex((prevIndex) => 
      prevIndex === activeGalleryItems.length - 1 ? 0 : prevIndex !== null ? prevIndex + 1 : 0
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-aavishkar-darkblue">Past Events</h1>
            <div className="h-1 w-20 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Relive the moments from previous Aavishkar events through our timeline and gallery. Witness the journey of innovation and creativity.
            </p>
          </motion.div>
        </div>

        <Timeline />
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-aavishkar-darkblue">Event Gallery</h2>
            <div className="h-1 w-16 bg-aavishkar-green mx-auto mb-6 rounded-full" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Browse through our collection of moments captured during past Aavishkar events.
            </p>
          </motion.div>

          <Tabs defaultValue="recent" className="w-full max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="recent" onClick={() => setActiveGallery("recent")} className="data-[state=active]:bg-aavishkar-blue data-[state=active]:text-white">
                  Recent Events
                </TabsTrigger>
                <TabsTrigger value="archive" onClick={() => setActiveGallery("archive")} className="data-[state=active]:bg-aavishkar-blue data-[state=active]:text-white">
                  Event Archive
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="recent" className="focus-visible:outline-none focus-visible:ring-0">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {recentGallery.map((image, index) => (
                  <motion.div
                    key={`recent-${index}`}
                    variants={item}
                    whileHover={{ scale: 1.03 }}
                    className="group cursor-pointer overflow-hidden rounded-xl shadow-md relative aspect-square bg-gray-100"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Aavishkar {image.year}</span>
                      </div>
                      <h3 className="text-white text-lg font-medium leading-tight">{image.caption}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="archive" className="focus-visible:outline-none focus-visible:ring-0">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {archiveGallery.map((image, index) => (
                  <motion.div
                    key={`archive-${index}`}
                    variants={item}
                    whileHover={{ scale: 1.03 }}
                    className="group cursor-pointer overflow-hidden rounded-xl shadow-md relative aspect-square bg-gray-100"
                    onClick={() => {
                      setActiveGallery("archive");
                      openLightbox(index);
                    }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Aavishkar {image.year}</span>
                      </div>
                      <h3 className="text-white text-lg font-medium leading-tight">{image.caption}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={imageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="sm:max-w-4xl bg-black/95 border-none text-white p-0">
          {imageIndex !== null && (
            <>
              <div className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden">
                <img 
                  src={galleryData[activeGallery as keyof typeof galleryData][imageIndex].src} 
                  alt={galleryData[activeGallery as keyof typeof galleryData][imageIndex].alt}
                  className="w-full h-full object-contain"
                />
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-4">
                <DialogTitle className="text-xl text-white">
                  {galleryData[activeGallery as keyof typeof galleryData][imageIndex].caption}
                </DialogTitle>
                <DialogDescription className="text-white/70">
                  Aavishkar {galleryData[activeGallery as keyof typeof galleryData][imageIndex].year}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PastEvents;
