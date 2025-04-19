
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-display font-bold text-center mb-12">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
