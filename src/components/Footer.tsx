
import React from 'react';
import { cn } from "@/lib/utils";
import { Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-aavishkar-darkblue text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6 min-w-0">
              <div className="rounded-xl bg-glass shadow-xl border border-aavishkar-blue p-2 w-16 h-16 flex items-center justify-center">
                <img
                  src="/uploads/ruchi.png"
                  alt="Aavishkar Owl Mascot"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                  draggable={false}
                  style={{ background: 'transparent' }}
                />
              </div>
              <span className="text-lg md:text-xl font-display font-semibold whitespace-nowrap">
                Aavishkar<span className="text-aavishkar-green">25</span>
              </span>
            </div>
            <p className="text-white/70 mb-6 text-sm md:text-base">
              The annual technical festival of Kathmandu University Robotics Club (KURC).
            </p>
            <div className="text-white/70 text-sm">
              April 2025
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Connect Us</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Kathmandu University Robotics Club<br />Dhulikhel, Kavre Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:kurc@ku.edu.np" className="hover:text-white transition-colors">kurc@ku.edu.np</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={18} />
                <a href="https://kurc.ku.edu.np" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">kurc.ku.edu.np</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors">Register</a>
              </li>
            </ul>
          </div>

          <div className="w-full h-64 relative flex flex-col">
            <span className="text-base font-semibold text-white mb-2 z-20">Visit Us:</span>
            <iframe
              title="Kathmandu University Robotics Club Map"
              className="absolute top-7 left-0 w-full h-[calc(100%-1.5rem)] border-0 rounded-xl shadow-lg z-10"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Kathmandu+University+Robotics+club&output=embed"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Kathmandu University Robotics Club. All rights reserved.</p>
          <p className="mt-2 text-white/40">Developed by Oman Chaudhary</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
