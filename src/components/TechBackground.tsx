
import React from "react";

const TechBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Grid patterns */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="grid-pattern w-full h-full"></div>
      </div>
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full bg-gradient-to-br from-aavishkar-blue/30 to-aavishkar-green/40 animate-float`}
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Digital circuit lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path 
                d="M20,0 L20,100 M40,0 L40,100 M60,0 L60,100 M80,0 L80,100 M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80" 
                stroke="currentColor" 
                strokeWidth="0.5"
                className="text-aavishkar-blue"
              />
              <circle cx="20" cy="20" r="2" className="fill-aavishkar-yellow animate-pulse" style={{animationDuration: '3s'}} />
              <circle cx="60" cy="60" r="2" className="fill-aavishkar-green animate-pulse" style={{animationDuration: '4s'}} />
              <circle cx="40" cy="80" r="2" className="fill-aavishkar-blue animate-pulse" style={{animationDuration: '5s'}} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
      
      {/* Moving light effect */}
      <div className="absolute -inset-[100px] bg-gradient-radial from-aavishkar-blue/10 to-transparent opacity-50 blur-3xl animate-pulse" 
        style={{animationDuration: '15s'}} />
        
      {/* Digital noise overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light">
        <div className="w-full h-full bg-noise opacity-[0.04]"></div>
      </div>
      
      {/* Gradient background */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white to-transparent"></div>
    </div>
  );
};

export default TechBackground;
