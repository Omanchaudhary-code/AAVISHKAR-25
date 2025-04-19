
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mainEvents = [
  {
    title: "Robotics Challenge",
    category: "Competition",
    description: "Design and build robots to complete complex challenges in this prestigious competition.",
    image: "/images/hardware-hackathon.jpg",
  },
  {
    title: "Hackathon",
    category: "Marathon",
    description: "A 36-hour coding marathon to solve real-world problems with innovative tech solutions.",
    image: "/images/battlebot.jpg",
  },
  {
    title: "Tech Talks",
    category: "Conference",
    description: "Insightful presentations by industry leaders on emerging technologies and future trends.",
    image: "/images/cansat.jpg",
  },
  {
    title: "Project Exhibition",
    category: "Showcase",
    description: "Showcase your innovative projects and prototypes to industry experts and investors.",
    image: "/images/ideation.jpg",
  }
];

const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-aavishkar-blue/5 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Main Events
          </h2>
          <div className="h-1 w-20 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainEvents.map((event, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10">
                  <span className="inline-block px-3 py-1 bg-white/90 text-sm font-medium rounded-full m-4">
                    {event.category}
                  </span>
                </div>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="group/btn text-aavishkar-blue hover:text-aavishkar-darkblue"
                >
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
