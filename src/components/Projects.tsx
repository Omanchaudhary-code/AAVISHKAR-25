
import React from 'react';
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "KU-HOVER",
    description: "A next-generation drone designed for mapping, surveillance, and logistics. It focuses on enhancing aerial mobility with AI-driven stability and precision control, making it useful for environmental monitoring, disaster response, and geographic surveys.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "GO KART",
    description: "An racing kart built for performance, efficiency, and sustainability. This project aims to foster innovation in racing technology while promoting competitive engineering among students.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "KU-ROVER",
    description: "A fully functional rover prototype designed for exploration and research. This project aims to develop autonomous navigation and terrain adaptability, with potential applications in planetary exploration, disaster relief, and remote area accessibility in Nepal.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "ROBOTIC ARM",
    description: "A versatile robotic arm built for industrial automation and medical assistance. Designed with precision control and machine learning capabilities, this project explores applications in manufacturing, prosthetics, and rehabilitation technology.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "RC PLANE",
    description: "A fixed-wing remote-controlled aircraft designed for research, surveillance, and aerial data collection. The project explores real-world applications in search-and-rescue operations, agricultural monitoring, and atmospheric research.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  },
  {
    title: "SUBMARINE",
    description: "A remotely operated underwater vehicle (ROV) designed for dam inspections and underwater exploration. The project focuses on enhancing Nepal's water resource management and deep-water infrastructure maintenance.",
    image: "/lovable-uploads/f6f6748d-a62f-46dd-973b-e6fa648649c2.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-aavishkar-blue/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-aavishkar-darkblue">
            Ongoing Projects
          </h2>
          <div className="h-1 w-20 bg-aavishkar-green mx-auto mb-6 rounded-full" />
          <p className="text-foreground/70">
            Innovation in action: Our cutting-edge projects showcase student creativity and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:translate-y-[-4px]"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 text-aavishkar-blue">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
