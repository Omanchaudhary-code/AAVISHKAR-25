
import React from 'react';
import { cn } from "@/lib/utils";
import { Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-aavishkar-darkblue text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-aavishkar-green rounded-full flex items-center justify-center">
                <div className="w-6 h-6 text-white">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L6 12L12 22L18 12L12 2Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-display font-semibold">Aavishkar<span className="text-aavishkar-green">25</span></span>
            </div>
            <p className="text-white/70 mb-6">
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

          <div className="w-full h-64 relative">

  <iframe
    title="Kathmandu University Robotics Club Map"
    className="absolute top-0 left-0 w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    src="https://maps.google.com/maps?q=Kathmandu+University+Robotics+club&output=embed"
  ></iframe>
</div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Kathmandu University Robotics Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
