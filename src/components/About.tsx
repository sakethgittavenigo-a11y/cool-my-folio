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
              Senior Data Engineer with <span className="text-primary font-semibold">9+ years</span> of 
              experience designing, modernizing, and operating large-scale batch and stream data processing pipelines 
              across cloud-native environments. Strong expertise in 
              <span className="text-foreground font-medium"> Python, SQL, Apache Spark, </span> 
              and <span className="text-foreground font-medium">cloud platforms (AWS, Azure, GCP)</span>.
            </p>
            
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <p className="text-muted-foreground leading-relaxed">
              Proven experience with AWS S3, EC2, Lambda, and GCP services, delivering scalable and cost-efficient 
              data solutions. Deep knowledge of data modeling, normalization techniques, and performance optimization 
              to ensure reliable, governed, and high-throughput data platforms.
            </p>
            
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <p className="text-muted-foreground leading-relaxed">
              Hands-on exposure to Airflow, Kafka, CI/CD pipelines, and unit testing for data workflows. 
              Recognized for establishing technical standards, improving pipeline reliability, and delivering 
              enterprise-grade data platforms aligned with business and compliance requirements.
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