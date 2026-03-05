const capabilities = {
  "SAP Technical Expertise": [
    "Custom Reports", "ALV Grids", "SmartForms", "DDIC", 
    "User Exits", "BADIs", "BAPIs", "Enhancements",
    "Performance Tuning", "Debugging & Optimization"
  ],
  "Technology Stack": [
    "SAP ECC", "SAP S/4HANA", "SAP HANA", "SQL", 
    "PostgreSQL", "Python", "JavaScript", "Git", "Jira", "Eclipse ADT"
  ],
  "Professional Strengths": [
    "Analytical Thinking", "Root Cause Analysis", "Production Support Excellence",
    "Cross-team Communication", "Technical Documentation", "Agile Methodology"
  ],
};

const CapabilityMatrix = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <p className="section-subtitle mb-3">Competencies</p>
        <h2 className="section-title mb-12">Core Capability Matrix</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(capabilities).map(([category, skills]) => (
            <div key={category} className="bg-card border border-border rounded-sm p-8">
              <h3 className="font-display text-lg font-semibold text-primary mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="capability-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityMatrix;
