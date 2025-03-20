
import React from 'react';
import { cn } from "@/lib/utils";

const Mission = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white/50 to-aavishkar-green/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-aavishkar-green/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-aavishkar-green">
              Our Mission & Values
            </h2>
            <div className="h-1 w-16 bg-aavishkar-yellow mb-8 rounded-full" />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-6">
                KURC's mission is to empower students in STEM through hands-on experiences, cultivating innovation and excellence in robotics education.
              </p>
              <p className="text-foreground/80 mb-6">
                We uphold values of collaboration, inclusivity, and sustainability, fostering a community that embraces diversity, strives for excellence, and leverages technology for positive societal impact.
              </p>

              <div className="mt-10 py-6 px-8 bg-white rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="absolute -top-4 -left-2 text-5xl text-aavishkar-green opacity-30 font-serif">
                  "
                </div>
                <p className="text-lg italic text-foreground/90 mb-4">
                  "Humanizing the machines, carving the future"
                </p>
                <div className="absolute -bottom-4 -right-2 text-5xl text-aavishkar-green opacity-30 font-serif rotate-180">
                  "
                </div>
              </div>
            </div>
          </div>

          <div className="md:order-1 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/0144588e-95f1-4eae-9b0d-fbda59523016.png" 
                alt="KURC Team" 
                className="w-full h-auto" 
              />
            </div>

            <div className="absolute inset-0 bg-aavishkar-green/10 rounded-2xl -z-10 blur-xl transform translate-x-4 translate-y-4" />

            <div className="mt-6">
              <h3 className="text-xl font-display font-semibold mb-3">About</h3>
              <p className="text-foreground/70">
                The Kathmandu University Robotics Club (KURC) has a rich history dating back to its establishment in 2014. Founded by a group of passionate students with a shared interest in robotics and technology, the club has gained momentum and became a hub for innovation and learning within the university. KURC organizes a variety of activities, including workshops, seminars, and hands-on projects, with a passion for innovation, robotics and community development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
