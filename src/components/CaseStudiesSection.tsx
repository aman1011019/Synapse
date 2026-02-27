import { useEffect, useRef } from "react";
import tourTech from "@/assets/tour-tech.jpg";
import workshopAI from "@/assets/workshop-ai.jpg";
import workshopML from "@/assets/workshop-ml.jpg";

const caseStudies = [
  {
    title: "AI in Healthcare",
    description: "How machine learning models are revolutionizing medical diagnosis and drug discovery.",
    image: workshopAI,
    category: "Healthcare AI",
  },
  {
    title: "ML in Finance",
    description: "Fraud detection, risk assessment, and algorithmic trading powered by deep learning.",
    image: workshopML,
    category: "FinTech",
  },
  {
    title: "Smart Manufacturing",
    description: "Computer vision and predictive maintenance transforming Industry 4.0 factories.",
    image: tourTech,
    category: "Industry 4.0",
  },
];

const tours = [
  {
    company: "Tech Giants",
    description: "Visit leading AI research labs and see cutting-edge technology in action.",
    image: tourTech,
    badge: "Industry Tour",
  },
];

const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Case Studies */}
      <section id="case-studies" className="section-pad" ref={sectionRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal">
            <span className="tech-tag mb-4 inline-block">Real World Impact</span>
            <h2 className="section-title gradient-text">Case Studies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how AI/ML is transforming industries with real-world case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="glass-card-hover rounded-2xl overflow-hidden reveal group cursor-pointer"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <span className="absolute top-3 left-3 tech-tag">{study.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{study.description}</p>
                  <button className="mt-4 text-primary text-sm font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Tours */}
      <section id="tours" className="section-pad pt-0">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal">
            <span className="tech-tag mb-4 inline-block">Industry Exposure</span>
            <h2 className="section-title gradient-text">Industrial Tours</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get real-world exposure by visiting leading tech companies and AI research facilities.
            </p>
          </div>

          <div className="glass-card-hover rounded-2xl overflow-hidden reveal">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={tourTech}
                  alt="Industrial Tour"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 md:to-card/90" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="tech-tag w-fit mb-4">Industry Tour</span>
                <h3 className="font-bold text-2xl mb-4">Tech Company Visits</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We organize exclusive visits to top tech companies and AI research labs. 
                  Students get to witness how AI/ML is applied in production, meet industry 
                  professionals, and gain insights into real-world AI workflows.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Tech Giants & Startups", "AI Research Labs", "Data Centers & Cloud Facilities", "Networking with Professionals"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesSection;
