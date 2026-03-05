import { Mic, Users, Lightbulb } from "lucide-react";

const items = [
  { icon: Mic, title: "IoT & Sensor Networks Webinar", desc: "Presented on emerging IoT architectures and their enterprise applications, demonstrating cross-domain technical curiosity." },
  { icon: Users, title: "TechVyuha Participation", desc: "Active engagement in technical competitions, showcasing problem-solving acuity and collaborative innovation under pressure." },
  { icon: Lightbulb, title: "Technical Communication", desc: "Strong ability to articulate complex SAP concepts to non-technical stakeholders, bridging the gap between technology and business value." },
];

const ThoughtLeadership = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <p className="section-subtitle mb-3">Engagement & Influence</p>
        <h2 className="section-title mb-4">Thought Leadership</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Committed to knowledge sharing and emerging technology exploration—actively 
          contributing to the broader technology community.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="case-study-card">
              <Icon size={24} className="text-gold mb-4" />
              <h3 className="font-display text-lg font-semibold text-primary mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;
