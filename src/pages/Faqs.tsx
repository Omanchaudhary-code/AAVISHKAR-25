
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Modern FAQ animation: entry fade + scale, accent border, icon
const FAQ_COLORS = [
  "border-aavishkar-blue",
  "border-aavishkar-green",
  "border-aavishkar-yellow",
  "border-aavishkar-darkblue",
];

const Faqs = () => {
  const faqItems = [
    {
      question: "What is Aavishkar?",
      answer: "Aavishkar is the annual technical festival of Kathmandu University Robotics Club (KURC). It serves as a platform for innovators and tech enthusiasts to showcase their ideas and skills."
    },
    {
      question: "When is Aavishkar 2025?",
      answer: "Aavishkar 2025 is scheduled to take place in April 2025. The exact dates will be announced soon."
    },
    {
      question: "Who can participate in Aavishkar?",
      answer: "Aavishkar is open to all students, tech enthusiasts, and innovators. We welcome participants from all educational institutions across Nepal."
    },
    {
      question: "What kind of events can I expect?",
      answer: "Aavishkar features various technical events including Hardware Hackathon, Robo Race, CanSat competition, and more. Each event is designed to challenge and inspire participants in different areas of robotics and technology."
    },
    {
      question: "How can I register for events?",
      answer: "Registration details for specific events will be announced on our website and social media channels. Each event may have different registration requirements and deadlines."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-aavishkar-white/40">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in-up">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`
                  bg-white/80 border-l-4 rounded-xl shadow-md mb-4 px-4 transition-transform duration-200
                  ${FAQ_COLORS[index % FAQ_COLORS.length]}
                  animate-fade-in-up
                `}
                style={{
                  animationDelay: `${0.1 + index * 0.07}s`,
                }}
              >
                <AccordionTrigger className="text-lg font-display font-semibold py-4 flex items-center gap-2 focus:outline-none">
                  <span className="inline-flex items-center rounded-full bg-aavishkar-blue/10 text-aavishkar-blue px-2.5 py-0.5 mr-2 text-sm font-medium">{index + 1}</span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pl-7 pb-4 text-foreground/80 text-base transition-all duration-300 animate-fade-in">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center animate-float">
          <img
            src="/lovable-uploads/e7bca271-75d7-48e4-a811-6b7681706463.png"
            alt="Aesthetic mascot"
            className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl animate-fade-in delay-200"
            draggable={false}
            style={{ background: 'transparent' }}
          />
          <span className="mt-2 text-aavishkar-blue font-display text-base md:text-lg">Still have questions? <a href="mailto:kurc@ku.edu.np" className="text-aavishkar-green underline hover:opacity-80">Contact Us</a></span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
