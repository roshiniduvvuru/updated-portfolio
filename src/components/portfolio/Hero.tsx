import { ArrowDown, Linkedin, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="section-container">
        <div className="max-w-4xl">
          <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-6">
            SAP ABAP Developer · Early-Career Enterprise Technologist
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Roshini Duvvuru
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed opacity-90 max-w-2xl mb-4">
            Driven SAP ABAP Developer with a strong foundation in ERP systems, 
            backend development, and enterprise automation—eager to deliver 
            optimization-driven solutions in complex SAP landscapes.
          </p>
          <p className="text-base opacity-70 mb-10">
            B.Tech IT Graduate · Accenture · Gudur, Andhra Pradesh, India
          </p>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="border border-primary-foreground/20 rounded-sm p-5 text-center">
              <div className="font-display text-2xl lg:text-3xl font-bold text-gold">SAP ABAP</div>
              <div className="text-sm mt-2 opacity-80">Core Development Skills</div>
            </div>
            <div className="border border-primary-foreground/20 rounded-sm p-5 text-center">
              <div className="font-display text-2xl lg:text-3xl font-bold text-gold">ECC & S/4</div>
              <div className="text-sm mt-2 opacity-80">SAP Platform Exposure</div>
            </div>
            <div className="border border-primary-foreground/20 rounded-sm p-5 text-center">
              <div className="font-display text-2xl lg:text-3xl font-bold text-gold">B.Tech IT</div>
              <div className="text-sm mt-2 opacity-80">8.5 CGPA</div>
            </div>
            <div className="border border-primary-foreground/20 rounded-sm p-5 text-center">
              <div className="font-display text-2xl lg:text-3xl font-bold text-gold">Agile</div>
              <div className="text-sm mt-2 opacity-80">Team Collaboration</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#case-studies" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gold text-accent-foreground rounded-sm hover:opacity-90 transition-opacity">
              <Briefcase size={16} />
              View Projects
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-primary-foreground/40 text-primary-foreground rounded-sm hover:bg-primary-foreground/10 transition-colors">
              <ArrowDown size={16} />
              Download Resume
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-primary-foreground/40 text-primary-foreground rounded-sm hover:bg-primary-foreground/10 transition-colors">
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
