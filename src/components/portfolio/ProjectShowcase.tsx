const projects = [
  {
    title: "AI-Based Pothole Management System",
    problem: "Municipal authorities lacked data-driven prioritization for road maintenance and repair allocation.",
    solution: "Built a CNN-based image classification system to detect potholes and categorize severity levels, enabling automated prioritization of repair schedules.",
    stack: ["Python", "CNN", "Image Processing", "Data Visualization"],
    impact: [
      "Enabled smart, severity-based repair prioritization",
      "Delivered data visualization dashboards for decision-makers",
      "Improved municipal response efficiency significantly",
    ],
  },
  {
    title: "Hostel Management Web Application",
    problem: "Manual hostel administration processes causing operational inefficiencies and data inconsistency.",
    solution: "Developed a full-stack web application automating student registration, fee tracking, and room allocation with real-time reporting.",
    stack: ["HTML", "CSS", "JavaScript", "SQL"],
    impact: [
      "Reduced administrative workload by 50%",
      "Automated fee tracking and room allocation",
      "Eliminated manual data entry errors",
    ],
  },
];

const ProjectShowcase = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <p className="section-subtitle mb-3">Project Portfolio</p>
        <h2 className="section-title mb-12">Innovation Case Studies</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="case-study-card">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">{project.title}</h3>
              
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Business Problem</h4>
              <p className="text-foreground leading-relaxed mb-5">{project.problem}</p>

              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Solution</h4>
              <p className="text-foreground leading-relaxed mb-5">{project.solution}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="capability-tag">{tech}</span>
                ))}
              </div>

              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Impact</h4>
              <ul className="space-y-1.5">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
