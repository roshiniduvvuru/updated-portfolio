const ExecutiveSummary = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="section-subtitle mb-3">About Me</p>
        <h2 className="section-title mb-10">Professional Profile</h2>
        
        <div className="max-w-4xl">
          <div className="border-l-2 border-gold pl-8 space-y-5">
            <p className="text-lg leading-relaxed text-foreground">
              B.Tech IT graduate and SAP ABAP Developer at Accenture with hands-on experience 
              in enterprise resource planning systems, custom ABAP development, and backend 
              optimization. Currently contributing to SAP ECC and S/4HANA projects as part 
              of the SAP PADA (Package Application Development Associate) role, building a strong 
              foundation in real-world enterprise solutions.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Gaining practical expertise in custom report development, ALV grids, SmartForms, 
              Data Dictionary objects, and enhancement frameworks including User Exits, BADIs, 
              and BAPIs. Actively learning SQL optimization techniques and internal table 
              efficiency to contribute to performance-driven development within Agile teams.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Passionate about understanding SAP architecture deeply and aspiring to grow into 
              a SAP Technical Consultant role—combining strong technical foundations from 
              academics with real-world enterprise project experience at Accenture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
