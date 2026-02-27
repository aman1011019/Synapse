import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Neural brain nodes
    const nodeCount = 120;
    const nodes: { x: number; y: number; z: number; vx: number; vy: number; vz: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 100 + Math.random() * 40;
      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
      });
    }

    // Floating particles
    const particles: { x: number; y: number; speed: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        speed: 0.2 + Math.random() * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      const cx = w / 2;
      const cy = h / 2 - 20;
      const cosT = Math.cos(time);
      const sinT = Math.sin(time);

      // Project nodes with rotation
      const projected = nodes.map((n) => {
        // Rotate around Y
        const rx = n.x * cosT - n.z * sinT;
        const rz = n.x * sinT + n.z * cosT;
        // Slight X rotation
        const ry2 = n.y * Math.cos(time * 0.3) - rz * Math.sin(time * 0.3);
        const rz2 = n.y * Math.sin(time * 0.3) + rz * Math.cos(time * 0.3);

        const scale = 300 / (300 + rz2);
        return {
          x: cx + rx * scale,
          y: cy + ry2 * scale,
          z: rz2,
          scale,
        };
      });

      // Draw connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const alpha = (1 - dist / 80) * 0.25;
            const pulse = Math.sin(time * 3 + i * 0.1) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `hsla(185, 100%, 55%, ${alpha * (0.5 + pulse * 0.5)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projected.forEach((p, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
        const size = (1.5 + pulse * 1.5) * p.scale;
        const alpha = 0.4 + pulse * 0.6;

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4);
        gradient.addColorStop(0, `hsla(185, 100%, 70%, ${alpha * 0.3})`);
        gradient.addColorStop(1, `hsla(265, 70%, 55%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        const coreColor = i % 3 === 0 ? `hsla(265, 70%, 65%, ${alpha})` : `hsla(185, 100%, 65%, ${alpha})`;
        ctx.fillStyle = coreColor;
        ctx.fill();
      });

      // Draw floating particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -5) {
          p.y = h + 5;
          p.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(185, 100%, 70%, ${p.opacity})`;
        ctx.fill();
      });

      // Firing neurons (random bright pulses along connections)
      if (Math.random() < 0.03) {
        const i = Math.floor(Math.random() * projected.length);
        const p = projected[i];
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 20);
        gradient.addColorStop(0, `hsla(185, 100%, 80%, 0.8)`);
        gradient.addColorStop(1, `hsla(185, 100%, 55%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollDown = () => {
    document.getElementById("workshops")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060814]">
      {/* Deep gradient background */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, hsla(220, 60%, 12%, 1) 0%, #060814 70%)",
      }} />

      {/* Light arcs behind brain */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{
          border: "1px solid hsl(185 100% 55%)",
          boxShadow: "0 0 80px hsl(185 100% 55% / 0.15), inset 0 0 80px hsl(185 100% 55% / 0.05)",
        }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[450px] h-[450px] rounded-full opacity-[0.1]" style={{
          border: "1px solid hsl(265 70% 55%)",
          boxShadow: "0 0 60px hsl(265 70% 55% / 0.15), inset 0 0 60px hsl(265 70% 55% / 0.05)",
        }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] rounded-full opacity-[0.12]" style={{
          border: "1px solid hsl(185 100% 55%)",
          boxShadow: "0 0 40px hsl(185 100% 55% / 0.2), inset 0 0 40px hsl(185 100% 55% / 0.08)",
        }} />
      </div>

      {/* Glow orbs for depth */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.08]"
        style={{ background: "hsl(185 100% 55%)" }} />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: "hsl(265 70% 55%)" }} />

      {/* Neural brain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-tech mb-8 animate-fade-in-up border border-primary/20"
          style={{
            animationDelay: "0.2s",
            background: "hsla(220, 35%, 9%, 0.5)",
            backdropFilter: "blur(12px)",
            color: "hsl(185 100% 55%)",
          }}>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          AI · ML · Data Science · Innovation
        </div>

        <h1
          className="text-7xl md:text-9xl font-black mb-3 leading-none tracking-tighter animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="gradient-text" style={{
            filter: "drop-shadow(0 0 30px hsla(185, 100%, 55%, 0.3))",
          }}>Synapse</span>
        </h1>

        <p className="text-foreground/80 text-2xl md:text-3xl font-light tracking-[0.3em] uppercase mb-2 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}>
          Club
        </p>

        <p
          className="font-mono-tech text-sm md:text-base tracking-[0.25em] mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s", color: "hsl(185 100% 55% / 0.7)" }}
        >
          CONNECT · LEARN · INNOVATE
        </p>

        <p
          className="text-muted-foreground text-base md:text-lg mb-14 max-w-md mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Where Ideas Meet Intelligence
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={scrollDown}
            className="btn-glow px-10 py-4 rounded-full text-background font-semibold text-sm tracking-wide"
          >
            Explore Now
          </button>
          <a
            href="https://chat.whatsapp.com/Fwi51srmYFEAA6bKugHlKI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: "hsla(220, 35%, 9%, 0.4)",
              border: "1px solid hsla(185, 100%, 55%, 0.25)",
              backdropFilter: "blur(12px)",
              color: "hsl(210 40% 95%)",
            }}
          >
            Join Community
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-muted-foreground animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
