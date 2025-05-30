import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TechBackground from './TechBackground';

const Hero = () => {
  // Set the one minute countdown (60 seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Convert current time left to total seconds
      let totalSeconds =
        timeLeft.days * 24 * 60 * 60 +
        timeLeft.hours * 60 * 60 +
        timeLeft.minutes * 60 +
        timeLeft.seconds;

      if (totalSeconds > 0) {
        // Decrease by 1 second
        totalSeconds -= 1;

        // Convert back to days, hours, minutes, seconds
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      } else {
        // If countdown is over
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setEventStarted(true);
        handleEventStart();
      }
    };

    // Set up interval to update the countdown
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleEventStart = () => {
    // Function to handle any additional actions when the event starts
    console.log("Event has started!");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-aavishkar-white/30"
    >
      {/* Tech-inspired animated background */}
      <TechBackground />

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16 z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block animate-fade-in">
              <span className="bg-aavishkar-green/10 text-aavishkar-green text-sm font-medium px-3 py-1 rounded-full">
                April 2025
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-aavishkar-darkblue to-aavishkar-blue">
                AAVISHKAR 25
              </span>
            </h1>

            <div
              className="h-1 w-24 bg-aavishkar-yellow rounded-full origin-left animate-reveal"
              style={{ animationDelay: '0.3s' }}
            />

            <h2
              className="text-2xl md:text-3xl font-display font-semibold text-aavishkar-yellow animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              ANNUAL FLAGSHIP EVENT
            </h2>

            {/* Enhanced Event Status Container with better animations */}
            {!eventStarted ? (
              <div 
                className="grid grid-cols-4 gap-2 md:gap-4 animate-fade-in-up relative"
                style={{ animationDelay: '0.3s' }}
              >
                {/* Background decorative element */}
                <div className="absolute -inset-4 bg-white/30 rounded-2xl backdrop-blur-sm -z-10 transform rotate-1 animate-pulse" style={{ animationDuration: '8s' }}></div>
                
                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-lg shadow-lg rounded-lg p-2 md:p-4 w-full border border-aavishkar-blue/10 hover:border-aavishkar-blue/30 transition-all duration-300">
                    <div className="text-2xl md:text-4xl font-bold text-aavishkar-darkblue text-center animate-pulse" style={{ animationDuration: '2s' }}>
                      {timeLeft.days}
                    </div>
                  </div>
                  <div className="text-sm mt-1 font-medium text-gray-700">Days</div>
                </div>

                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-lg shadow-lg rounded-lg p-2 md:p-4 w-full border border-aavishkar-blue/10 hover:border-aavishkar-blue/30 transition-all duration-300">
                    <div className="text-2xl md:text-4xl font-bold text-aavishkar-blue text-center animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.2s' }}>
                      {timeLeft.hours}
                    </div>
                  </div>
                  <div className="text-sm mt-1 font-medium text-gray-700">Hours</div>
                </div>

                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-lg shadow-lg rounded-lg p-2 md:p-4 w-full border border-aavishkar-green/10 hover:border-aavishkar-green/30 transition-all duration-300">
                    <div className="text-2xl md:text-4xl font-bold text-aavishkar-green text-center animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.4s' }}>
                      {timeLeft.minutes}
                    </div>
                  </div>
                  <div className="text-sm mt-1 font-medium text-gray-700">Minutes</div>
                </div>

                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-lg shadow-lg rounded-lg p-2 md:p-4 w-full border border-aavishkar-yellow/10 hover:border-aavishkar-yellow/30 transition-all duration-300">
                    <div className="text-2xl md:text-4xl font-bold text-aavishkar-yellow text-center animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.6s' }}>
                      {timeLeft.seconds}
                    </div>
                  </div>
                  <div className="text-sm mt-1 font-medium text-gray-700">Seconds</div>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in relative">
                <div className="absolute inset-0 bg-gradient-to-r from-aavishkar-darkblue to-aavishkar-blue opacity-90 blur-sm transform -rotate-1 animate-pulse"></div>
                <div className="py-6 px-8 rounded-lg shadow-lg backdrop-blur-md border border-white/20 relative z-10">
                  <div className="text-2xl md:text-4xl font-bold text-white text-center animate-pulse">
                    Event Happening Now!
                  </div>
                  <div className="text-sm md:text-base text-white/80 mt-2 text-center">
                    Join us at Kathmandu University
                  </div>
                  <Link to="/past-events#gallery" className="mt-4 w-full py-2 flex items-center justify-center text-center bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors">
                    See Live Updates <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            <p
              className="text-lg md:text-xl text-foreground/80 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Showcasing the best of innovation and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/events"
                className="bg-aavishkar-blue hover:bg-aavishkar-blue/90 text-white px-6 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors"
              >
                Explore Events
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="bg-transparent hover:bg-gray-100 text-foreground border border-gray-300 px-6 py-3 rounded-full inline-flex items-center justify-center font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="rounded-2xl overflow-hidden border-2 border-aavishkar-green/20 shadow-lg aspect-square">
                  <img
                    src="/uploads/aavishkar-25.png"
                    alt="Aavishkar-25"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105 mt-8">
                <div className="rounded-2xl overflow-hidden border-2 border-aavishkar-yellow/20 shadow-lg aspect-square">
                  <img
                    src="/uploads/speaker_podium.jpg"
                    alt="Speaker in the podium"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105 -mt-8">
                <div className="rounded-2xl overflow-hidden border-2 border-aavishkar-blue/20 shadow-lg aspect-square">
                  <img
                    src="/uploads/scripting.jpg"
                    alt="Student preparing script"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="group transform transition-all duration-300 hover:scale-105">
                <div className="rounded-2xl overflow-hidden border-2 border-aavishkar-darkblue/20 shadow-lg aspect-square">
                  <img
                    src="/uploads/aquabot-2.jpg"
                    alt="Aquabot competition-2024"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Logos */}
            <div className="absolute bottom-0 md:bottom-6 left-0 right-0 flex justify-center space-x-3">
              <img src="/uploads/ku_logo.png" alt="KU-LOGO" className="h-10 w-auto" />
              <img src="/uploads/AA_logo.png" alt="Aavishkar-LOGO" className="h-10 w-auto" />
              <img src="/uploads/kurc-logo-trans.png" alt="Kurc-Logo" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
