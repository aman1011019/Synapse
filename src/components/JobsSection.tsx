import { useEffect, useRef } from "react";
import { Brain, BarChart3, Globe, Cpu, Shield, Code } from "lucide-react";

const domains = [
  {
    icon: Brain,
    title: "AI Roles",
    description: "AI Engineer, Research Scientist, ML Engineer, Computer Vision Expert",
    color: "text-cyan-glow",
    glow: "hover:shadow-[0_0_20px_hsl(185_100%_55%/0.3)]",
  },
  {
    icon: BarChart3,
    title: "ML Roles",
    description: "Data Scientist, ML Ops Engineer, NLP Specialist, Predictive Analyst",
    color: "text-purple-glow",
    glow: "hover:shadow-[0_0_20px_hsl(265_70%_55%/0.3)]",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Data Analyst, Business Intelligence, Visualization Expert, Statistician",
    color: "text-cyan-glow",
    glow: "hover:shadow-[0_0_20px_hsl(185_100%_55%/0.3)]",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Frontend Dev, Backend Dev, Full-Stack, DevOps Engineer",
    color: "text-purple-glow",
    glow: "hover:shadow-[0_0_20px_hsl(265_70%_55%/0.3)]",
  },
  {
    icon: Cpu,
    title: "IoT",
    description: "Embedded Systems, Firmware Developer, IoT Architect, Smart Systems",
    color: "text-cyan-glow",
    glow: "hover:shadow-[0_0_20px_hsl(185_100%_55%/0.3)]",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Ethical Hacker, Security Analyst, Penetration Tester, CISO",
    color: "text-purple-glow",
    glow: "hover:shadow-[0_0_20px_hsl(265_70%_55%/0.3)]",
  },
  {
    icon: Code,
    title: "CSE Core",
    description: "Software Developer, Systems Programmer, Algorithm Engineer, Database Admin",
    color: "text-cyan-glow",
    glow: "hover:shadow-[0_0_20px_hsl(185_100%_55%/0.3)]",
  },
];

const JobsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="domains" className="section-pad relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16 reveal">
          <span className="tech-tag mb-4 inline-block">Career Opportunities</span>
          <h2 className="section-title gradient-text">Jobs & Internships</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore exciting career paths in AI, ML, and tech. We prepare you for real-world roles with hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {domains.map((domain, index) => (
            <div
              key={domain.title}
              className={`glass-card rounded-xl p-6 transition-all duration-300 cursor-pointer border border-border/50 ${domain.glow} hover:-translate-y-1 reveal`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <domain.icon className={`w-8 h-8 mb-4 ${domain.color}`} />
              <h3 className="font-bold text-base mb-2">{domain.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
