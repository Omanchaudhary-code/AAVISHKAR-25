
import React, { useRef, useEffect } from "react";

// Color palette (based on project colors): purple, yellow, green, blue, light purple
const PARTICLE_COLORS = [
  "#9b87f5", // Primary purple
  "#FEC045", // Yellow (brand)
  "#65B32E", // Green (brand)
  "#4AA5EB", // Blue (brand)
  "#D6BCFA", // Light purple
  "#8E9196", // Neutral gray
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Particle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
  drift: number;
};

const ParticlesBackground: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Responsive: more particles for larger screens
    const particleCount =
      window.innerWidth > 1200
        ? 72
        : window.innerWidth > 600
        ? 42
        : 24;

    function createParticles() {
      const arr: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        arr.push({
          x: random(0, canvas.width),
          y: random(0, canvas.height),
          size: random(6, 18),
          vx: random(-0.26, 0.26),
          vy: random(-0.14, 0.18),
          color: PARTICLE_COLORS[Math.floor(random(0, PARTICLE_COLORS.length))],
          opacity: random(0.5, 0.8),
          drift: random(-0.06, 0.06),
        });
      }
      return arr;
    }

    particles.current = createParticles();

    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Move particle
        p.x += p.vx + p.drift;
        p.y += p.vy;

        // Infinite loop edges
        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = canvas.height + p.size;
        if (p.y > canvas.height + p.size) p.y = -p.size;
      });
      ctx.globalAlpha = 1;

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className || ""}`}
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
