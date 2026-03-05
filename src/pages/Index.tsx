import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import ExecutiveSummary from "@/components/portfolio/ExecutiveSummary";
import CapabilityMatrix from "@/components/portfolio/CapabilityMatrix";
import Experience from "@/components/portfolio/Experience";
import ProjectShowcase from "@/components/portfolio/ProjectShowcase";
import PerformanceEngineering from "@/components/portfolio/PerformanceEngineering";
import Education from "@/components/portfolio/Education";
import ThoughtLeadership from "@/components/portfolio/ThoughtLeadership";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="summary"><ExecutiveSummary /></div>
      <div id="capabilities"><CapabilityMatrix /></div>
      <Experience />
      <div id="projects"><ProjectShowcase /></div>
      <div id="performance"><PerformanceEngineering /></div>
      <div id="education"><Education /></div>
      <ThoughtLeadership />
      <Footer />
    </div>
  );
};

export default Index;
