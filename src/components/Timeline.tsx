
import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const pastEvents = [
  {
    year: "2017",
    theme: "Yatra ko Prarambha",
    description: "Aavishkar 17 was organized. Several pre-events and main events were conducted based on the theme. 'Enigma: Finding the way' and 'Hardware Hackathon' Was the main events that involved enthusiasts from all over Nepal to compete to develop the technology.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    year: "2018",
    theme: "Clean Nepal: A Robotics Initiative",
    description: "Aavishkar 18 was based on the theme \"Clean Nepal: A Robotics Initiative\", where the events focused to make robotics environment-friendly. \"Aquabot: A Cleaning Ro-boat Competition\", and Hardware Hackathon were directed towards robotics for a clean environment.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    year: "2019",
    theme: "Innovation For Development",
    description: "Aavishkar 19 at Kathmandu University emphasized \"Innovation For Development.\" Main events introduced Can-Sat for young space enthusiasts, a Hardware Hackathon for innovative products, and Aquabot to tackle environmental pollution with robotics. Pre-events offered workshops for skill-building and preparation.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    year: "2023",
    theme: "Nurturing vision",
    description: "Aavishkar 23 with the theme \"Nurturing vision\" was aimed to nurture the ideas, and grow the culture of healthy competition engaging towards the future. ideation aimed at nurturing young minds, hardware hackathon aimed at agriculture health sector and smart security. Robowar-clashing of the giants. roborace finding the path.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    year: "2024",
    theme: "Innovation Nexus",
    description: "With a theme of 'Innovation Nexus', Aavishkar 24 was organized. Several pre-events and main events were conducted based on the theme. Robo race, Hardware hackathon, Aqua Bot, Bhajan night were the main events. Ruchi (Mascot) as the main center of attraction was introduced in Aavishkar 25.",
    image: "/lovable-uploads/e67b9874-91e4-45ea-bfdf-b706e1b03282.png"
  }
];

const Timeline = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_120%,#4AA5EB,transparent_50%),radial-gradient(circle_at_80%_20%,#65B32E,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-aavishkar-darkblue via-aavishkar-blue to-aavishkar-green"
          >
            Our Journey Through Time
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-aavishkar-blue to-aavishkar-green mx-auto mb-6 rounded-full" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600"
          >
            A journey through innovation and excellence since 2017
          </motion.p>
        </div>

        <div className="relative">
          {/* Center line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-aavishkar-blue via-aavishkar-green to-aavishkar-yellow hidden md:block" />

          <div className="space-y-20">
            {pastEvents.map((event, index) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                key={event.year}
                className={cn(
                  "grid md:grid-cols-2 gap-8 md:gap-16 items-center relative",
                  index % 2 === 1 ? "md:rtl" : ""
                )}
              >
                {/* Timeline dot with ring effect */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-aavishkar-blue rounded-full relative">
                    <div className="absolute inset-0 bg-aavishkar-blue rounded-full animate-ping opacity-75" />
                  </div>
                </div>
                
                <div className={cn(
                  "md:text-right space-y-4",
                  index % 2 === 1 ? "md:ltr md:text-left" : ""
                )}>
                  <Card className="inline-block bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-aavishkar-darkblue mb-2">
                        {event.year}
                      </h3>
                      <h4 className="text-xl text-aavishkar-blue font-semibold mb-4">
                        {event.theme}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl shadow-aavishkar-blue/10 hover:shadow-aavishkar-blue/20 transition-shadow duration-300">
                    <img 
                      src={event.image} 
                      alt={`Aavishkar ${event.year}`} 
                      className="w-full h-auto" 
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
