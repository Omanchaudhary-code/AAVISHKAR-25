
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center space-y-3"
  >
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-aavishkar-blue to-aavishkar-green rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-aavishkar-blue/20 relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
    <h3 className="font-semibold text-xl text-aavishkar-darkblue">{name}</h3>
    <p className="text-sm text-foreground/70">{role}</p>
  </motion.div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Aaditya Sharma",
      role: "Event Coordinator",
      image: "/lovable-uploads/3b4906c4-0330-49d8-8bc7-06de5a224192.png"
    },
    {
      name: "Priya Joshi",
      role: "Technical Lead",
      image: "/lovable-uploads/67bb11fe-a984-4aec-8687-f7114234aeb3.png"
    },
    {
      name: "Binod Poudel",
      role: "Marketing Head",
      image: "/lovable-uploads/3b4906c4-0330-49d8-8bc7-06de5a224192.png"
    },
    {
      name: "Suman Khadka",
      role: "Logistics Manager",
      image: "/lovable-uploads/e330865f-5aec-48fb-ab63-62950900dfa0.png"
    },
    {
      name: "Ram Kumar",
      role: "Technical Team",
      image: "/lovable-uploads/3b4906c4-0330-49d8-8bc7-06de5a224192.png"
    },
    {
      name: "Sita Devi",
      role: "Design Lead",
      image: "/lovable-uploads/67bb11fe-a984-4aec-8687-f7114234aeb3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Team</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-aavishkar-blue to-aavishkar-green mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated individuals who work tirelessly to make Aavishkar a success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
