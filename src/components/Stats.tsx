
import React from 'react';
import { cn } from "@/lib/utils";
import { TrendingUp, Users, ArrowUp, ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Social Media Reach",
    value: "50,000+",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Attending Audience",
    value: "4,000+",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Event Participants",
    value: "500+",
    icon: <ArrowUp className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Stalls",
    value: "60+",
    icon: <ArrowRight className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "School/College Visitors",
    value: "45+",
    icon: <ArrowUp className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-500"
  }
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-aavishkar-darkblue to-aavishkar-blue relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-96 h-96 -top-48 -left-48 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Our Outreach
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-aavishkar-yellow to-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-white/70 text-lg">
            The growing impact of Aavishkar across Nepal
          </p>
        </motion.div>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee">
            {[...stats, ...stats].map((stat, index) => (
              <div 
                key={`${stat.title}-${index}`}
                className="flex-none w-72 mx-4"
              >
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur" />
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-white/20">
                    <div className={cn(
                      "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
                      stat.gradient
                    )}>
                      {stat.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white/80 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-3xl font-display font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Stats;
