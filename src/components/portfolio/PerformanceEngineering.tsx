import { Zap, Database, Cpu, BarChart3, Timer, HardDrive } from "lucide-react";

const techniques = [
  { icon: Database, title: "SQL Fundamentals", desc: "Learning to optimize SELECT queries, JOINs, and WHERE clauses for efficient database access in SAP systems" },
  { icon: Cpu, title: "Internal Tables", desc: "Understanding SORTED, HASHED table types and efficient data processing techniques in ABAP" },
  { icon: HardDrive, title: "Data Dictionary", desc: "Working with DDIC objects—tables, views, structures, data elements, and domains" },
  { icon: Zap, title: "Enhancements", desc: "Gaining hands-on experience with User Exits, BADIs, and BAPIs to extend SAP standard functionality" },
  { icon: Timer, title: "Debugging Skills", desc: "Building proficiency in ABAP debugger, runtime analysis (SE30/SAT) for troubleshooting" },
  { icon: BarChart3, title: "Reporting", desc: "Developing custom reports, ALV grids, and SmartForms for business reporting needs" },
];

const PerformanceEngineering = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-3">Technical Focus Areas</p>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4">SAP Technical Competencies</h2>
        <p className="opacity-80 max-w-2xl mb-12">
          Actively building depth in SAP ABAP development and performance concepts—
          combining academic foundations with real-world enterprise project exposure at Accenture.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-primary-foreground/15 rounded-sm p-6">
              <Icon size={24} className="text-gold mb-4" />
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm opacity-75 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceEngineering;
