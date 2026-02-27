import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkshopsSection from "@/components/WorkshopsSection";
import JobsSection from "@/components/JobsSection";
import CoursesSection from "@/components/CoursesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WorkshopsSection />
      <JobsSection />
      <CoursesSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Home;
