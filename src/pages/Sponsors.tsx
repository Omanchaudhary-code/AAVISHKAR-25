
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-display font-bold text-center mb-12">Our Sponsors</h1>
        <div className="text-center text-lg text-muted-foreground mb-8">
          Sponsorship details for Aavishkar 2025 will be announced soon.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Placeholder for sponsor logos */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Sponsor Space</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
