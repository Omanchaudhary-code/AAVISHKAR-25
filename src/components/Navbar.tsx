
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
    { name: 'Events', href: '/#events' },
    { name: 'Past Events', href: '/past-events' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 px-4 md:px-0",
        "rounded-2xl border border-white/30 shadow-[0_4px_32px_0_rgba(46,54,80,0.16)]",
        scrolled
          ? "bg-white/70 backdrop-blur-xl"
          : "bg-white/40 backdrop-blur-2xl",
        "max-w-4xl w-[95vw] md:w-4/5"
      )}
      style={{
        // Subtle glass effect border highlight
        boxShadow: "0 6px 36px 0 rgba(58,64,89,0.11), 0 1.5px 7px 0 rgba(0,0,0,0.07)",
        borderTop: "1.5px solid rgba(140,168,255,0.10)",
        borderLeft: "1.5px solid rgba(140,168,255,0.10)",
        // Optional soft gradient border glow
        borderImage: "linear-gradient(to right, #4AA5EB, #65B32E, #FEC045) 1",
      }}
    >
      <div className="flex items-center justify-between h-16 md:h-[72px] relative">
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
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.href}
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
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200",
                  "text-foreground/80",
                  "hover:bg-aavishkar-blue/10 hover:text-aavishkar-blue",
                  "focus-visible:ring focus-visible:ring-aavishkar-green/30 focus:outline-none",
                  "group",
                  "after:content-[''] after:absolute after:left-2 after:bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-aavishkar-blue after:to-aavishkar-green after:transition-all after:duration-300 group-hover:after:w-[60%]"
                )}
              >
                {link.name}
              </Link>
            )
          )}
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
        <div className="md:hidden animate-fade-in bg-white/90 backdrop-blur-xl rounded-xl border border-gray-100 shadow-lg absolute top-[110%] left-0 right-0 py-4 mt-2 z-50">
          <div className="flex flex-col gap-2 px-3">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "py-2 px-4 w-full rounded-md text-foreground text-base font-medium transition-colors",
                    "hover:bg-aavishkar-blue/10 hover:text-aavishkar-blue",
                    "active:bg-aavishkar-green/10"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
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
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
