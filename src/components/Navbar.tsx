
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Remove white bg by using transparent PNG, add glass effect, border, dropShadow
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 min-w-0 group">
          <div className="rounded-full bg-glass shadow-lg border border-aavishkar-blue p-1.5 md:p-2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 ring-2 ring-aavishkar-blue/30 group-hover:ring-4">
            <img
              src="/lovable-uploads/cf369733-58a1-440f-abc9-61ce6398c6ee.png"
              alt="KURC Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg"
              style={{ background: "transparent" }}
              draggable={false}
            />
          </div>
          <span className="text-lg md:text-xl font-display font-semibold whitespace-nowrap ml-1">
            Aavishkar<span className="text-aavishkar-green">25</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        <button
          className="md:hidden text-foreground p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-aavishkar-blue/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-100 animate-fade-in z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
