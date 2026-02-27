import { useEffect, useRef } from "react";
import { ExternalLink, Youtube, Cloud, BookOpen, Code2 } from "lucide-react";

const courses = [
  {
    icon: Youtube,
    title: "YouTube Learning",
    description: "Curated playlists from Khan Academy, 3Blue1Brown, StatQuest and more.",
    buttonText: "Explore Playlists",
    href: "https://www.youtube.com",
    color: "text-red-400",
    bgGlow: "from-red-500/10",
  },
  {
    icon: Cloud,
    title: "Google Cloud Boost",
    description: "Free hands-on labs and skill badges on Google Cloud Platform. Build real cloud skills.",
    buttonText: "Start Learning",
    href: "https://cloud.google.com/training",
    color: "text-blue-400",
    bgGlow: "from-blue-500/10",
  },
  {
    icon: BookOpen,
    title: "Microsoft Learn",
    description: "Free learning paths for Azure, AI, and developer tools from Microsoft.",
    buttonText: "Access Resources",
    href: "https://learn.microsoft.com",
    color: "text-cyan-glow",
    bgGlow: "from-cyan-500/10",
  },
  {
    icon: Code2,
    title: "GeeksForGeeks",
    description: "DSA, algorithms, interview prep, and CS fundamentals for every level.",
    buttonText: "Practice Now",
    href: "https://www.geeksforgeeks.org",
    color: "text-green-400",
    bgGlow: "from-green-500/10",
  },
];

const CoursesSection = () => {
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
    <section id="resources" className="section-pad" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <span className="tech-tag mb-4 inline-block">Free Resources</span>
          <h2 className="section-title gradient-text">Courses & Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked learning resources to accelerate your AI/ML journey — all free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`glass-card-hover rounded-2xl p-6 flex flex-col bg-gradient-to-b ${course.bgGlow} to-transparent reveal`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <course.icon className={`w-10 h-10 mb-4 ${course.color}`} />
              <h3 className="font-bold text-base mb-2">{course.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{course.description}</p>
              <a
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                {course.buttonText}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
