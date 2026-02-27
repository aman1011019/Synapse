import { useEffect, useRef } from "react";
import workshopAI from "@/assets/workshop-ai.jpg";
import workshopML from "@/assets/workshop-ml.jpg";
import workshopDS from "@/assets/workshop-ds.jpg";

const workshops = [
  {
    title: "AI Workshop",
    description: "Dive into Artificial Intelligence fundamentals, neural networks, and real-world AI applications with hands-on projects.",
    image: workshopAI,
    tag: "Artificial Intelligence",
  },
  {
    title: "ML Workshop",
    description: "Learn Machine Learning algorithms, model training, evaluation, and deployment strategies from scratch.",
    image: workshopML,
    tag: "Machine Learning",
  },
  {
    title: "Data Science Workshop",
    description: "Master data analysis, visualization, statistical methods, and storytelling with real-world datasets.",
    image: workshopDS,
    tag: "Data Science",
  },
];

const WorkshopsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-pad" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <span className="tech-tag mb-4 inline-block">Our Workshops</span>
          <h2 className="section-title gradient-text">Learn by Doing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on workshops designed to bridge the gap between theory and real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.title}
              className="glass-card-hover rounded-2xl overflow-hidden reveal group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <span className="absolute top-3 right-3 tech-tag">{workshop.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-foreground">{workshop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{workshop.description}</p>
                <button className="mt-4 text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
