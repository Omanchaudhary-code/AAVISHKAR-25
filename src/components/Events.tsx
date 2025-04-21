import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight, CircuitBoard, Bot, Waves, Lightbulb, Dumbbell, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";

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
    image: "/images/hardware-hackathon.jpg",
    icon: <CircuitBoard className="h-6 w-6 text-aavishkar-blue" />,
    color: "from-aavishkar-blue/20 to-aavishkar-blue/5",
    fullDescription: "A hardware hackathon is an intensive 24-hour competition where teams collaborate to design and build innovative hardware solutions. Participants will have access to a variety of components, including microcontrollers, sensors, actuators, and 3D printers. The event encourages creative problem-solving and rapid prototyping, allowing teams to transform their ideas into functional prototypes. Mentors from industry will be available to provide guidance, and projects will be judged based on innovation, technical complexity, and practical application. The Hardware Hackathon is an excellent opportunity for students and enthusiasts to gain hands-on experience with hardware development while competing for prizes and recognition.",
    requirements: "Basic knowledge of electronics, laptop with required software, and a creative mindset. Teams of 3-4 members are recommended.",
    timeline: "24 hours of non-stop innovation, with regular checkpoints for team progress assessment."
  },
  {
    title: "ROBO RACE",
    description: "Robo Race is a competition where teams design, build and race autonomous robots on a set course, using sensors and computer vision. The goal is to complete the course quickly and accurately.",
    budget: "185k",
    image: "/images/robo-race.jpg",
    icon: <Bot className="h-6 w-6 text-aavishkar-green" />,
    color: "from-aavishkar-green/20 to-aavishkar-green/5",
    fullDescription: "Robo Race is an exciting competition that challenges teams to design, build, and race autonomous robots on a challenging track. Participants must create robots that can navigate obstacles, make turns, and reach the finish line in the shortest time possible. The robots must use sensors and computer vision to detect the track boundaries and obstacles without human intervention during the race. This event tests participants' skills in mechanical design, electronics, programming, and AI implementation. Teams will compete in multiple rounds, with the fastest robots advancing to the finals.",
    requirements: "Teams need to bring their own robot components, including motors, controllers, sensors, and power sources. A detailed rulebook will be provided prior to the event.",
    timeline: "Qualifying rounds followed by knockout stages leading to the finals."
  },
  {
    title: "AQUABOT",
    description: "Aquaboat, trash-cleaning boats are made to compete with each other. For round, two robots will be competing with each other reaching the opposite base by crossing through different checkpoints and collecting the slits.",
    budget: "188k",
    image: "/images/aquabot.jpg",
    icon: <Waves className="h-6 w-6 text-blue-500" />,
    color: "from-blue-500/20 to-blue-500/5",
    fullDescription: "Aquabot is a unique competition focused on designing boats that can clean trash from water bodies. Teams will create remote-controlled or autonomous boats equipped with systems to collect floating debris. During each round, two robots will compete against each other, navigating through various checkpoints while collecting waste materials (represented by floating slits). The challenge combines environmental consciousness with technical innovation, as participants must design vessels that are both maneuverable and effective at waste collection. The competition promotes solutions to real-world problems like water pollution while testing engineering skills.",
    requirements: "Teams must build waterproof boats with collection mechanisms, remote control systems, and proper power management.",
    timeline: "Multiple rounds of head-to-head competition with increasing difficulty levels."
  },
  {
    title: "IDEATION",
    description: "With a strong belief \"Degree doesn't define YOU\", KURC is organizing an inclusive event for people of all fields. Introvert or extrovert, your idea and your opinion do matter. This will be an interactive journey of finding the minds-alike striving towards innovation and start ups.",
    budget: "140k",
    image: "/images/ideation.jpg",
    icon: <Lightbulb className="h-6 w-6 text-aavishkar-yellow" />,
    color: "from-aavishkar-yellow/20 to-aavishkar-yellow/5",
    fullDescription: "Ideation is an inclusive platform for individuals from all educational backgrounds and disciplines to share innovative ideas. The event is built on the philosophy that 'Degree doesn't define YOU,' welcoming both introverts and extroverts to express their thoughts and concepts. Participants will present their ideas related to innovation, technology, sustainability, or social impact, followed by constructive feedback from a panel of experts. This interactive journey helps connect like-minded individuals who are passionate about innovation and entrepreneurship, potentially leading to future collaborations and startups.",
    requirements: "Prepare a 5-minute pitch presentation. Open to individuals and teams from any field or background.",
    timeline: "One-day event with multiple sessions for different categories of ideas."
  },
  {
    title: "3LBS BATTLEBOT",
    description: "For the first time in Nepal, a 3 lbs Battle Bot Competition — a miniature version of the immensely popular Robowar competition is being organized. This exciting event promises to be a must-watch attraction, drawing numerous participants eager to showcase their engineering skills.",
    budget: "278k",
    image: "/images/battlebot.jpg",
    icon: <Dumbbell className="h-6 w-6 text-red-500" />,
    color: "from-red-500/20 to-red-500/5",
    fullDescription: "The 3LBS Battlebot Competition brings the excitement of robot combat to Nepal for the first time in a miniature format. Participants will design and build combat robots weighing up to 3 pounds, equipped with various weapons and defensive mechanisms. These battlebots will compete in an arena, attempting to disable opponents' robots while protecting their own. The competition tests skills in mechanical design, power management, and strategy. With matches lasting 3 minutes each, robots will be judged on aggression, control, and damage inflicted. This spectator-friendly event showcases the thrill of robot combat while demonstrating engineering excellence.",
    requirements: "Robots must weigh no more than 3 pounds and comply with safety regulations. Teams must bring spare parts for repairs between matches.",
    timeline: "Tournament-style competition with group stages followed by elimination rounds."
  },
  {
    title: "CANSAT",
    description: "A 'CanSat' is a miniature satellite the size of a soda can, designed to perform missions like real satellites but at a lower altitude. It is often used for educational and research purposes, helping students learn about space technology, electronics, and programming.",
    budget: "347k",
    image: "/images/cansat.jpg",
    icon: <Rocket className="h-6 w-6 text-purple-500" />,
    color: "from-purple-500/20 to-purple-500/5",
    fullDescription: "The CanSat competition challenges teams to design and build a small satellite that fits within the volume of a standard soda can. These miniature satellites are launched to an altitude of about 1 kilometer and must perform a specific mission while descending. Typical missions include measuring atmospheric data, capturing images, or testing novel deployment mechanisms. Teams are responsible for the entire system, including the satellite, communication systems, ground station, and data analysis. The competition simulates a real space mission on a smaller scale, teaching participants about systems engineering, project management, and interdisciplinary collaboration. CanSat provides hands-on experience with space technology at an accessible level.",
    requirements: "Teams need knowledge of electronics, programming, and basic aerodynamics. All components must fit within a standard soda can volume.",
    timeline: "Design review, pre-flight check, launch day, and post-mission data analysis presentation."
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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isMobile = useIsMobile();

  const openEventDetails = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const getPreviewText = (text, max = 120) => {
    if (!text) return '';
    return text.length > max ? text.slice(0, max) + '...' : text;
  };

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

        {activeTab === 'pre' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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

        {activeTab === 'main' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {mainEvents.map((event) => (
                <Card 
                  key={event.title}
                  className="overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] group"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className={`sm:w-1/3 md:w-1/4 aspect-video sm:aspect-square bg-gradient-to-br ${event.color} flex items-center justify-center p-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/30 opacity-50"></div>
                      <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        {event.icon}
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6 sm:w-2/3 md:w-3/4 flex flex-col justify-between">
                      <h3 className="text-xl font-display font-semibold mb-4 text-aavishkar-darkblue">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 text-sm min-h-[44px]">
                        {getPreviewText(event.description, 120)}
                      </p>
                      <div className="mt-auto flex items-center justify-end">
                        <Button 
                          variant="outline" 
                          className="text-aavishkar-blue border-aavishkar-blue/30 hover:bg-aavishkar-blue/10 group-hover:border-aavishkar-blue"
                          onClick={() => openEventDetails(event)}
                        >
                          Read More <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-gray-100 rounded-xl p-6 md:p-8 h-fit sticky top-24 order-first lg:order-last mb-8 lg:mb-0">
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold mb-2 text-center">
                  Main Event Highlights
                </h3>
                <div className="h-1 w-12 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4">
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className={cn(
          "sm:max-w-2xl overflow-y-auto",
          isMobile && "max-h-[90vh]"
        )}>
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-aavishkar-darkblue flex items-center gap-3">
                  {selectedEvent.icon && <span className="inline-block">{selectedEvent.icon}</span>}
                  {selectedEvent.title}
                </DialogTitle>
                <DialogDescription className="text-foreground/70">
                  Budget: {selectedEvent.budget}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-6 py-4">
                <div className="aspect-video overflow-hidden rounded-md bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  {selectedEvent.icon && (
                    <div className="absolute w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center z-10 shadow-lg">
                      {selectedEvent.icon}
                    </div>
                  )}
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-aavishkar-blue">About the Event</h4>
                  <p className="text-foreground/80">{selectedEvent.description}</p>
                  <p className="text-foreground/80 mt-2">{selectedEvent.fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-aavishkar-blue">Requirements</h4>
                  <p className="text-foreground/80">{selectedEvent.requirements}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-aavishkar-blue">Timeline</h4>
                  <p className="text-foreground/80">{selectedEvent.timeline}</p>
                </div>

                <Button 
                  className="w-full bg-aavishkar-blue hover:bg-aavishkar-darkblue"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Register Now
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Events;
