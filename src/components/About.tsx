const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <span className="text-primary font-heading text-sm tracking-widest uppercase">
              // About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Professional <span className="text-gradient">Summary</span>
            </h2>
          </div>

          {/* Summary card */}
          <div className="bg-card border border-border rounded-xl p-8 glow-border card-hover">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Senior Azure Data Engineer / Data Lead with <span className="text-primary font-semibold">9+ years</span> of 
              hands-on experience designing, leading, and optimizing enterprise-scale Azure data platforms using 
              <span className="text-foreground font-medium"> Azure Data Factory, Azure Synapse, ADLS Gen2, Azure Databricks, </span> 
              and <span className="text-foreground font-medium">PySpark</span>.
            </p>
            
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <p className="text-muted-foreground leading-relaxed">
              Proven expertise in building high-performance ETL/ELT pipelines using Python, SQL, and Spark, 
              supporting analytics, reporting, and regulatory workloads. Strong background in data modeling, 
              performance tuning, and cost optimization across cloud-native architectures.
            </p>
            
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <p className="text-muted-foreground leading-relaxed">
              Demonstrated success enforcing data quality, data governance, and security standards using 
              Azure Purview, RBAC, and enterprise controls. Experienced in CI/CD enablement using Azure DevOps, 
              Git-based workflows, and automated testing frameworks.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { value: "9+", label: "Years Experience" },
                { value: "3", label: "Enterprise Roles" },
                { value: "100+", label: "Pipelines Built" },
                { value: "AWS/Azure", label: "Cloud Expertise" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;