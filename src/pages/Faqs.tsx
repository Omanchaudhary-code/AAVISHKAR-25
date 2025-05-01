
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { CircleHelp, Mail, PhoneCall, MapPin } from 'lucide-react';

// Modern FAQ animation: entry fade + scale, accent border, icon
const FAQ_COLORS = [
  "border-aavishkar-blue",
  "border-aavishkar-green",
  "border-aavishkar-yellow",
  "border-aavishkar-darkblue",
  "border-aavishkar-blue",
  "border-aavishkar-green",
  "border-aavishkar-yellow",
  "border-aavishkar-darkblue",
];

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  
  const faqCategories = [
    { id: "general", name: "General" },
    { id: "participation", name: "Participation" },
    { id: "events", name: "Events" },
    { id: "logistics", name: "Logistics" },
  ];

  const faqItems = {
    general: [
      {
        question: "What is Aavishkar?",
        answer: "Aavishkar is the annual technical festival of Kathmandu University Robotics Club (KURC). It serves as a platform for innovators and tech enthusiasts to showcase their ideas and skills. Started in 2017, it has grown to become one of the most prestigious technical festivals in Nepal, attracting participants from all over the country."
      },
      {
        question: "When is Aavishkar 2025?",
        answer: "Aavishkar 2025 is scheduled to take place in April 2025. The exact dates will be announced soon through our official website and social media channels. Stay tuned for the official announcement!"
      },
      {
        question: "Where will Aavishkar 2025 be held?",
        answer: "Aavishkar 2025 will be held at the Kathmandu University campus in Dhulikhel, Nepal. The venue provides ample space for all our events, competitions, and exhibitions."
      }
    ],
    participation: [
      {
        question: "Who can participate in Aavishkar?",
        answer: "Aavishkar is open to all students, tech enthusiasts, and innovators. We welcome participants from all educational institutions across Nepal and even international participants for some of our online events. There are separate categories for school students, undergraduate students, and professionals in many events."
      },
      {
        question: "Is there a registration fee for participating in events?",
        answer: "Most events at Aavishkar have a nominal registration fee which helps us in organizing the event and providing better prizes. The fee varies depending on the event. Some pre-events and workshops may be free of charge. Detailed fee information is provided during the registration process for each event."
      },
      {
        question: "How can I register for events?",
        answer: "Registration details for specific events will be announced on our website and social media channels. Each event may have different registration requirements and deadlines. You can register online through our website or in-person at designated registration booths before the event dates."
      }
    ],
    events: [
      {
        question: "What kind of events can I expect?",
        answer: "Aavishkar features various technical events including Hardware Hackathon, Robo Race, Aquabot competition, 3LBS Battlebot, CanSat, Ideation competition, and more. Each event is designed to challenge and inspire participants in different areas of robotics and technology. We also organize pre-events like workshops, lecture series, and community outreach programs."
      },
      {
        question: "Are there any prizes for the winners?",
        answer: "Yes, Aavishkar offers a prize pool of over NPR 200,000 distributed across various events. Winners receive cash prizes, trophies, certificates, and sometimes sponsorship opportunities or internship offers from our partner companies. The prize distribution for each event is announced before the competition begins."
      },
      {
        question: "Do I need prior experience to participate in the events?",
        answer: "The level of experience required varies by event. Some events like the Hardware Hackathon and Robo Race benefit from prior experience, while others like Ideation are more accessible to beginners. We also offer pre-event workshops to help participants prepare for the main competitions. Check the specific event requirements on our website for more details."
      }
    ],
    logistics: [
      {
        question: "Is accommodation available for outstation participants?",
        answer: "Limited accommodation facilities are available on a first-come, first-served basis for outstation participants. You can request accommodation during the registration process. There is a nominal fee for accommodation which includes basic amenities. Alternatively, there are several hotels and guesthouses near the venue."
      },
      {
        question: "Will food be provided during the events?",
        answer: "Food stalls will be set up at the venue offering a variety of food and beverages at reasonable prices. For certain events like the 24-hour Hardware Hackathon, complementary meals are provided to participants. This information is specified in the event details."
      }
    ]
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-aavishkar-white/40">
      <Navbar />
      <div className="container mx-auto px-4 py-24 md:py-28">
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
              Frequently Asked Questions
            </h1>
            <div className="h-1.5 w-32 md:w-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-aavishkar-yellow via-aavishkar-yellow to-aavishkar-yellow/70"></div>
            <p className="text-foreground/70 max-w-2xl mx-auto text-base md:text-lg px-4">
              Find answers to common questions about Aavishkar 25, our events, registration process, and more.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"
        >
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-aavishkar-blue text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {faqItems[activeCategory].map((faq, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`
                  bg-white/80 border-l-4 rounded-xl shadow-md mb-4 px-4 transition-transform duration-200
                  ${FAQ_COLORS[index % FAQ_COLORS.length]}
                `}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="text-lg font-display font-semibold py-4 flex items-center gap-2 focus:outline-none">
                      <CircleHelp className="h-5 w-5 text-aavishkar-blue flex-shrink-0" />
                      <span>{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-7 pb-4 text-foreground/80 text-base transition-all duration-300 animate-fade-in">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/40">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-aavishkar-darkblue mb-2">Still Have Questions?</h2>
              <p className="text-foreground/70">Our team is here to help you with any other questions you might have</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-aavishkar-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-aavishkar-blue" />
                </div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-foreground/70 mb-3">Send us your questions</p>
                <a href="mailto:kurc@ku.edu.np" className="text-aavishkar-blue hover:underline text-sm font-medium">kurc@ku.edu.np</a>
              </div>
              
              <div className="bg-white/80 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-aavishkar-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="h-6 w-6 text-aavishkar-green" />
                </div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-sm text-foreground/70 mb-3">Mon-Fri from 10am to 5pm</p>
                <a href="tel:+9779841234567" className="text-aavishkar-green hover:underline text-sm font-medium">+977 9841234567</a>
              </div>
              
              <div className="bg-white/80 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-aavishkar-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-aavishkar-yellow" />
                </div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-sm text-foreground/70 mb-3">Kathmandu University</p>
                <span className="text-aavishkar-yellow text-sm font-medium">Dhulikhel, Kavre, Nepal</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-center animate-float">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            src="/lovable-uploads/e7bca271-75d7-48e4-a811-6b7681706463.png"
            alt="Ruchii mascot"
            className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl"
            draggable={false}
            style={{ background: 'transparent' }}
          />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-2 text-aavishkar-blue font-display text-base md:text-lg"
          >
            Still have questions? <a href="mailto:kurc@ku.edu.np" className="text-aavishkar-green underline hover:opacity-80">Contact Us</a>
          </motion.span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
