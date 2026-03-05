import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="section-container">
        <p className="section-subtitle mb-3">Professional Experience</p>
        <h2 className="section-title mb-4">Work Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Currently building enterprise SAP expertise through hands-on project delivery at Accenture.
        </p>

        {/* Timeline marker */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="lg:pl-10 relative">
            <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-gold -translate-x-[3.5px] hidden lg:block" />

            <div className="case-study-card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-sm text-gold font-semibold mb-1">Accenture · 2024 – Present</div>
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-primary">
                    SAP ABAP Developer (Package Application Development Associate)
                  </h3>
                </div>
                <button 
                  onClick={() => setExpanded(!expanded)} 
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                >
                  {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs font-medium px-2.5 py-1 bg-secondary rounded-sm text-secondary-foreground">
                  Domain: Enterprise ERP
                </span>
                <span className="text-xs font-medium px-2.5 py-1 bg-secondary rounded-sm text-secondary-foreground">
                  Role: SAP PADA (Package Application Development Associate)
                </span>
              </div>

              {expanded && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Role Overview</h4>
                    <p className="text-foreground leading-relaxed mb-6">
                      Working on SAP ECC and S/4HANA projects, contributing to custom ABAP development, 
                      report generation, and enhancement implementation as part of the Package ABAP 
                      Development Associate program at Accenture.
                    </p>

                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Developing custom ABAP reports, ALV grids, and SmartForms for client requirements",
                        "Working with Data Dictionary (DDIC) objects—tables, structures, data elements",
                        "Learning and implementing enhancement frameworks (User Exits, BADIs, BAPIs)",
                        "Supporting debugging and issue resolution in production environments",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technical Contributions</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "Assisting in SQL query optimization for improved report performance",
                        "Contributing to internal table optimization and buffering strategies",
                        "Participating in Agile sprints and cross-functional team collaboration",
                        "Creating technical documentation for developed solutions",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Skills Being Built</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "ABAP", label: "Core Development" },
                        { value: "SAP ECC", label: "& S/4HANA" },
                        { value: "SQL", label: "Query Optimization" },
                        { value: "Agile", label: "Team Delivery" },
                      ].map((kpi, i) => (
                        <div key={i} className="bg-secondary rounded-sm p-3 text-center">
                          <div className="font-display text-lg font-bold text-primary">{kpi.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{kpi.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
