
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  // Close mobile menu when switching from mobile to desktop view
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Past Events', href: '/past-events' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white py-3 sm:py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14 sm:h-16 md:h-[72px] relative">
        <Link to="/" className="flex items-center gap-2 min-w-0 group z-10">
          <div className="rounded-full bg-white shadow-lg border border-aavishkar-blue/70 p-1.5 sm:p-1.5 md:p-2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center ring-2 ring-aavishkar-blue/40 group-hover:ring-4 transition-all duration-200">
            <img
              src="/uploads/kurc-logo.png"
              alt="KURC Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain drop-shadow-lg"
              style={{ background: "transparent" }}
              draggable={false}
            />
          </div>
          <span className="text-md sm:text-lg md:text-2xl font-display font-extrabold tracking-tight whitespace-nowrap ml-1 text-gradient bg-gradient-to-r from-aavishkar-blue via-aavishkar-green to-aavishkar-yellow bg-clip-text text-transparent">
            Aavishkar
            <span className="ml-0.5 text-aavishkar-green drop-shadow-[0_1px_0_rgba(101,179,46,0.08)]">25</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 lg:gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "relative px-3 lg:px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200",
                "text-foreground/80",
                "hover:bg-aavishkar-blue/10 hover:text-aavishkar-blue",
                "focus-visible:ring focus-visible:ring-aavishkar-green/30 focus:outline-none",
                "group",
                "after:content-[''] after:absolute after:left-2 after:bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-aavishkar-blue after:to-aavishkar-green after:transition-all after:duration-300 hover:after:w-[60%]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden text-foreground rounded-full focus:outline-none focus:ring-2 focus:ring-aavishkar-blue/40 p-2 transition active:scale-95 bg-white shadow-md border border-gray-200 z-10"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out z-[5]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-3 items-start">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "w-full py-3 px-4 border-l-2 text-lg font-medium rounded-r-lg transition-all duration-200",
                "border-transparent text-foreground/80",
                "hover:border-aavishkar-blue hover:bg-aavishkar-blue/5 hover:text-aavishkar-blue",
                "active:bg-aavishkar-green/10"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/5 md:hidden z-[4]" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
