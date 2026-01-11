import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Molina Healthcare",
    location: "Long Beach, CA",
    role: "Senior Data Engineer",
    period: "Aug 2023 – Present",
    highlights: [
      "Architected HIPAA-compliant data Lakehouse platforms on Azure (ADLS Gen2, Databricks, Delta Lake) for claims processing, clinical analytics, and member risk scoring",
      "Designed enterprise-scale batch and stream data processing pipelines using Python, SQL, Databricks, and Spark for clinical analytics and regulatory reporting",
      "Built reusable Python-based ETL frameworks to standardize data processing logic and improve code reuse",
      "Implemented stream data processing pipelines using Kafka and Spark Structured Streaming for near-real-time event ingestion",
      "Developed robust data modeling strategies including fact and dimension tables for enterprise reporting",
      "Integrated data workflows with CI/CD pipelines using Git-based version control and automated deployment strategies",
    ],
  },
  {
    company: "Allstate",
    location: "Northbrook, IL",
    role: "Senior Data Engineer",
    period: "Jan 2019 – Aug 2023",
    highlights: [
      "Architected scalable cloud-based data platforms on AWS (S3, EMR, Redshift, Glue, Lake Formation) for actuarial modeling and policy analytics",
      "Engineered large-scale batch data processing pipelines using Python, SQL, Spark for actuarial modeling and claims analytics",
      "Built and maintained stream data processing pipelines using Kafka and Kinesis for near-real-time telematics ingestion",
      "Implemented Airflow-based orchestration workflows to manage dependencies and monitoring of complex multi-stage pipelines",
      "Integrated automated unit testing and CI/CD pipelines for data workflows ensuring reliable deployments",
      "Mentored junior engineers on Python, SQL, data pipeline design, and cloud-based data engineering best practices",
    ],
  },
  {
    company: "Infosys",
    location: "Hyderabad, India",
    role: "Data Engineer",
    period: "May 2015 – Oct 2018",
    highlights: [
      "Developed ETL pipelines using Python, Hive, and Spark to ingest, transform, and load enterprise datasets",
      "Implemented real-time data ingestion frameworks using Kafka and Spark Streaming for monitoring application telemetry",
      "Designed Snowflake/Redshift-ready data models with dimension/fact tables to optimize analytical workloads",
      "Automated ETL workflows using Airflow with SLA monitoring, retry policies, and dependency management",
      "Participated in CI/CD automation with Jenkins and Git for consistent ETL deployments",
      "Mentored junior engineers on SQL optimization, ETL best practices, and Python scripting",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm tracking-widest uppercase">
            // Career Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full bg-primary animate-pulse-glow" />

              {/* Content card */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 ml-4 card-hover">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li 
                      key={hIndex}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;