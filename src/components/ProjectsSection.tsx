import { useEffect, useRef } from "react";
import workshopAI from "@/assets/workshop-ai.jpg";
import workshopML from "@/assets/workshop-ml.jpg";
import workshopDS from "@/assets/workshop-ds.jpg";

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description: "Real-time social media sentiment analyzer using BERT transformers and NLP techniques.",
    image: workshopAI,
    tags: ["Python", "BERT", "NLP", "Flask"],
  },
  {
    title: "Disease Prediction Model",
    description: "ML model predicting disease likelihood with 94% accuracy using patient health data.",
    image: workshopML,
    tags: ["Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
  },
  {
    title: "Smart Dashboard Analytics",
    description: "Interactive data visualization platform analyzing large-scale datasets in real-time.",
    image: workshopDS,
    tags: ["React", "D3.js", "Python", "MongoDB"],
  },
];

const ProjectsSection = () => {
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
    <section id="projects" className="section-pad" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <span className="tech-tag mb-4 inline-block">Student Built</span>
          <h2 className="section-title gradient-text">AI/ML Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative projects built by our talented club members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card-hover rounded-2xl overflow-hidden reveal group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
