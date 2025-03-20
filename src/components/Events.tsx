
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const preEvents = [
  {
    title: "Robotics Workshop",
    description: "4 DAYS BASIC ROBOTICS FOR KU STUDENTS",
    icon: "🤖"
  },
  {
    title: "Lecture Series",
    description: "IN COLLABORATION WITH WENTWORTH INSTITUTE OF TECHNOLOGY",
    icon: "🎓"
  },
  {
    title: "Tech 4 Community",
    description: "WORKSHOP FOR COMMUNITY SCHOOLS",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Raspberry Pi Workshop",
    description: "INTRODUCE STUDENTS WITH RASPBERRY PI ALONG WITH ITS APPLICATION",
    icon: "🥧"
  },
  {
    title: "AI vs Human",
    description: "COMPETITION WHERE PARTICIPANTS CHALLENGE AGAINST AI TOOLS",
    icon: "🧠"
  },
  {
    title: "Tech For Girls 5.0",
    description: "2 DAYS WORKSHOP FOR THE GIRLS BY THE GIRLS",
    icon: "👩‍💻"
  },
  {
    title: "Hardware Hackathon Workshop",
    description: "PREPARE FOR THE MAIN HACKATHON EVENT",
    icon: "🔧"
  },
  {
    title: "Robo Race Workshop",
    description: "LEARN ROBOTICS NAVIGATION AND CONTROL",
    icon: "🏎️"
  }
];

const mainEvents = [
  {
    title: "HARDWARE HACKATHON",
    description: "A hardware hackathon is an event where teams design and build hardware projects within 24 hours. Participants can use tools such as microcontrollers, sensors and 3D printers to build prototypes and proof-of-concepts for new hardware products.",
    budget: "327k",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "ROBO RACE",
    description: "Robo Race is a competition where teams design, build and race autonomous robots on a set course, using sensors and computer vision. The goal is to complete the course quickly and accurately.",
    budget: "185k",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "AQUABOT",
    description: "Aquaboat, trash-cleaning boats are made to compete with each other. For round, two robots will be competing with each other reaching the opposite base by crossing through different checkpoints and collecting the slits.",
    budget: "188k",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "IDEATION",
    description: "With a strong belief \"Degree doesn't define YOU\", KURC is organizing an inclusive event for people of all fields. Introvert or extrovert, your idea and your opinion do matter. This will be an interactive journey of finding the minds-alike striving towards innovation and start ups.",
    budget: "140k",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "3LBS BATTLEBOT",
    description: "For the first time in Nepal, a 3 lbs Battle Bot Competition — a miniature version of the immensely popular Robowar competition is being organized. This exciting event promises to be a must-watch attraction, drawing numerous participants eager to showcase their engineering skills.",
    budget: "278k",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "CANSAT",
    description: "A 'CanSat' is a miniature satellite the size of a soda can, designed to perform missions like real satellites but at a lower altitude. It is often used for educational and research purposes, helping students learn about space technology, electronics, and programming.",
    budget: "347k",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  }
];

const highlights = [
  { text: "200K+ Pool Prize", icon: "🏆" },
  { text: "4000+ Audience", icon: "👥" },
  { text: "500+ Competitors", icon: "👨‍💻" },
  { text: "80+ Projects", icon: "💡" },
  { text: "50+ Stalls", icon: "🏪" },
  { text: "45+ College Visitors", icon: "🎓" }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-aavishkar-blue/5 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-aavishkar-darkblue">
            Aavishkar 25 Events
          </h2>
          <div className="h-1 w-20 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
          <p className="text-foreground/70">
            Join us for a series of exciting events that showcase innovation, creativity, and technical excellence
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button 
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeTab === 'main' 
                  ? "bg-aavishkar-blue text-white" 
                  : "bg-transparent text-foreground/70 hover:text-foreground"
              )}
              onClick={() => setActiveTab('main')}
            >
              Main Events
            </button>
            <button 
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeTab === 'pre' 
                  ? "bg-aavishkar-green text-white" 
                  : "bg-transparent text-foreground/70 hover:text-foreground"
              )}
              onClick={() => setActiveTab('pre')}
            >
              Pre-Events
            </button>
          </div>
        </div>

        {/* Pre-Events Grid */}
        {activeTab === 'pre' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preEvents.map((event) => (
              <div 
                key={event.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="w-12 h-12 bg-aavishkar-green/10 rounded-full flex items-center justify-center mb-4 text-2xl">
                  {event.icon}
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {event.title}
                </h3>
                <p className="text-foreground/60 text-xs font-medium">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Main Events */}
        {activeTab === 'main' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {mainEvents.map((event) => (
                <div 
                  key={event.title}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] flex flex-col md:flex-row"
                >
                  <div className="md:w-1/4 aspect-square md:aspect-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h3 className="text-xl font-display font-semibold mb-2 text-aavishkar-darkblue">
                      {event.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {event.description}
                    </p>
                    <div className="text-xs font-medium text-aavishkar-green">
                      Budget: {event.budget}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 rounded-xl p-8 h-fit sticky top-24">
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold mb-2 text-center">
                  Main Event Highlights
                </h3>
                <div className="h-1 w-12 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
              </div>

              <div className="space-y-4">
                {highlights.map((item) => (
                  <div 
                    key={item.text}
                    className="flex items-center gap-4 border-b border-gray-200 pb-4 last:border-0"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-foreground/80 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="text-foreground/70 mb-2">
                  Additional Activities
                </div>
                <div className="text-aavishkar-blue font-medium">
                  Open Mic & Fun Events
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
