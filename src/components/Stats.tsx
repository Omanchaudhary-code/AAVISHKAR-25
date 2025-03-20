
import React from 'react';
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Social Media Reach:",
    value: "50,000+",
    icon: "💬"
  },
  {
    title: "Attending Audience:",
    value: "4,000+",
    icon: "👥"
  },
  {
    title: "Event Participants:",
    value: "500+",
    icon: "🏆"
  },
  {
    title: "Stalls:",
    value: "60+",
    icon: "🏪"
  },
  {
    title: "School/College Visitors:",
    value: "45+",
    icon: "🎓"
  }
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-aavishkar-blue text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-aavishkar-blue to-aavishkar-darkblue opacity-50" />
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-aavishkar-darkblue to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-aavishkar-darkblue to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Outreach
          </h2>
          <div className="h-1 w-20 bg-aavishkar-yellow mx-auto mb-6 rounded-full" />
          <p className="text-white/70">
            The impact of Aavishkar across Nepal
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.title}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-colors duration-300 border border-white/10"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto text-2xl">
                {stat.icon}
              </div>
              <h3 className="text-base font-medium text-white/80 mb-2">
                {stat.title}
              </h3>
              <p className="text-2xl md:text-3xl font-display font-bold text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
