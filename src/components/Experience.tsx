import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Molina Healthcare",
    location: "Long Beach, CA",
    role: "Senior Data Engineer",
    period: "Aug 2023 – Present",
    highlights: [
      "Architected HIPAA-compliant data Lakehouse platforms on Azure (ADLS Gen2, Databricks, Delta Lake) supporting claims processing and clinical analytics",
      "Led design and delivery of Azure data platforms using ADLS Gen2, Azure Databricks, Azure Data Factory, and Azure Synapse",
      "Designed scalable ETL/ELT pipelines using Python, SQL, and PySpark for high-volume claims and clinical datasets",
      "Built data modeling frameworks including fact and dimension tables for enterprise reporting",
      "Implemented data governance using Azure Purview, RBAC, and access controls for regulatory compliance",
      "Integrated CI/CD workflows using Azure DevOps, Git, and automated testing",
    ],
  },
  {
    company: "Allstate",
    location: "Northbrook, IL",
    role: "Senior Data Engineer",
    period: "Jan 2019 – Aug 2023",
    highlights: [
      "Architected scalable cloud-based data platforms on AWS (S3, EMR, Redshift, Glue, Lake Formation)",
      "Developed high-throughput ETL pipelines using Python, SQL, and Spark for actuarial and claims datasets",
      "Implemented automated orchestration workflows using Apache Airflow with SLA monitoring",
      "Tuned Spark jobs and SQL queries to optimize resource usage and reduce cloud compute costs",
      "Supported real-time ingestion using Kafka and streaming frameworks for operational analytics",
      "Provided technical mentorship to junior engineers on SQL, Python, and ETL design patterns",
    ],
  },
  {
    company: "Infosys",
    location: "Hyderabad, India",
    role: "Data Engineer",
    period: "May 2015 – Oct 2018",
    highlights: [
      "Developed enterprise ETL pipelines using Python, Spark, and Hive for large-scale data transformation",
      "Built real-time ingestion frameworks using Kafka and Spark Streaming",
      "Designed analytics-ready data warehouse schemas with fact and dimension tables",
      "Automated workflows using Apache Airflow with dependency management and retry logic",
      "Participated in CI/CD automation using Jenkins and Git for consistent deployments",
      "Mentored junior team members on ETL best practices and SQL optimization",
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