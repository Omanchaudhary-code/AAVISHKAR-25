
import React from 'react';
import { cn } from "@/lib/utils";

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
    <section className="py-16 md:py-24 bg-aavishkar-darkblue text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Past Events
          </h2>
          <div className="h-1 w-20 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
          <p className="text-white/70">
            A journey through innovation and excellence since 2017
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-aavishkar-blue/30 hidden md:block" />

          <div className="space-y-20">
            {pastEvents.map((event, index) => (
              <div key={event.year} className={cn(
                "grid md:grid-cols-2 gap-8 md:gap-16 items-center relative",
                index % 2 === 1 ? "md:rtl" : ""
              )}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-aavishkar-blue rounded-full border-4 border-aavishkar-darkblue hidden md:block" />
                
                <div className={cn(
                  "md:text-right space-y-4",
                  index % 2 === 1 ? "md:ltr md:text-left" : ""
                )}>
                  <div className="inline-block bg-aavishkar-blue/20 rounded-full px-4 py-1">
                    <h3 className="text-2xl md:text-3xl font-display font-bold">
                      {event.year}
                    </h3>
                  </div>
                  <h4 className="text-xl text-aavishkar-yellow font-semibold">
                    {event.theme}
                  </h4>
                  <p className="text-white/70">
                    {event.description}
                  </p>
                </div>

                <div>
                  <div className="rounded-xl overflow-hidden shadow-lg shadow-aavishkar-darkblue/50 transition-transform hover:scale-[1.02] duration-300">
                    <img 
                      src={event.image} 
                      alt={`Aavishkar ${event.year}`} 
                      className="w-full h-auto" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
