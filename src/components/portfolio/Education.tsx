import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="section-subtitle mb-3">Credentials</p>
        <h2 className="section-title mb-12">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* Education */}
          <div className="case-study-card">
            <GraduationCap size={24} className="text-gold mb-4" />
            <h3 className="font-display text-xl font-semibold text-primary mb-1">
              B.Tech, Information Technology
            </h3>
            <p className="text-muted-foreground text-sm mb-1">CGPA: 8.5 / 10</p>
            <p className="text-muted-foreground text-sm mb-3">Graduated 2024</p>
            <p className="text-foreground text-sm leading-relaxed">
              Strong academic foundation in computer science fundamentals, data structures, 
              database management, and software engineering—providing the technical base 
              for a career in enterprise SAP development.
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            {[
              { title: "Data Science", org: "NPTEL · IIT Madras", desc: "Statistical analysis, ML foundations, and data-driven problem solving" },
              { title: "Database Fundamentals", org: "Microsoft", desc: "Relational database concepts, SQL, normalization, and data integrity" },
            ].map((cert) => (
              <div key={cert.title} className="case-study-card">
                <Award size={20} className="text-gold mb-3" />
                <h3 className="font-display text-lg font-semibold text-primary mb-0.5">{cert.title}</h3>
                <p className="text-sm text-gold font-medium mb-2">{cert.org}</p>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-l-2 border-gold pl-6 max-w-2xl">
          <p className="text-sm text-muted-foreground italic">
            "Committed to continuous learning—actively pursuing certifications and hands-on 
            training to accelerate growth from developer to SAP Technical Consultant."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
