
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Modernized navbar with glassmorphism and better link styling
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' }, // Changed to dedicated events page
    { name: 'Past Events', href: '/past-events' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl py-2"
          : "bg-white/40 backdrop-blur-lg py-4"
      )}
      style={{
        // Subtle glass effect border highlight
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-[72px] relative">
        <Link to="/" className="flex items-center gap-2 min-w-0 group">
          <div className="rounded-full bg-glass shadow-lg border border-aavishkar-blue/70 p-1.5 md:p-2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center ring-2 ring-aavishkar-blue/40 group-hover:ring-4 transition-all duration-200">
            <img
              src="/lovable-uploads/cf369733-58a1-440f-abc9-61ce6398c6ee.png"
              alt="KURC Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg"
              style={{ background: "transparent" }}
              draggable={false}
            />
          </div>
          <span className="text-lg md:text-2xl font-display font-extrabold tracking-tight whitespace-nowrap ml-1 text-gradient bg-gradient-to-r from-aavishkar-blue via-aavishkar-green to-aavishkar-yellow bg-clip-text text-transparent">
            Aavishkar
            <span className="ml-0.5 text-aavishkar-green drop-shadow-[0_1px_0_rgba(101,179,46,0.08)]">25</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200",
                "text-foreground/80",
                "hover:bg-aavishkar-blue/10 hover:text-aavishkar-blue",
                "focus-visible:ring focus-visible:ring-aavishkar-green/30 focus:outline-none",
                "group",
                // Animated underline
                "after:content-[''] after:absolute after:left-2 after:bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-aavishkar-blue after:to-aavishkar-green after:transition-all after:duration-300 group-hover:after:w-[60%]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className={cn(
            "md:hidden text-foreground rounded-full focus:outline-none focus:ring-2 focus:ring-aavishkar-blue/40 p-2 transition active:scale-95 bg-white/60 backdrop-blur-[3px] shadow-md border border-white/30"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in bg-white/90 backdrop-blur-xl py-4 px-4 border-t border-gray-100 shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "py-2 px-4 w-full rounded-md text-foreground text-base font-medium transition-colors",
                  "hover:bg-aavishkar-blue/10 hover:text-aavishkar-blue",
                  "active:bg-aavishkar-green/10"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
