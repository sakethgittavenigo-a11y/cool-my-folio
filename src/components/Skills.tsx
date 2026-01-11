import { 
  Database, 
  Cloud, 
  Code, 
  Workflow, 
  Shield, 
  BarChart3,
  Terminal,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "SQL", "Scala", "Bash/Shell"],
  },
  {
    icon: Cpu,
    title: "Big Data Processing",
    skills: ["Apache Spark (1.6–3.x)", "PySpark", "Hive", "HDFS", "Spark Streaming", "Delta Lake"],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS (S3, EMR, Glue, Redshift, Lake Formation)", "Azure (ADLS Gen2, Databricks, Synapse, ADF, Purview)", "GCP (BigQuery, Pub/Sub)"],
  },
  {
    icon: Workflow,
    title: "ETL / ELT & Streaming",
    skills: ["dbt", "AWS Glue", "Azure Data Factory", "Delta Live Tables", "Apache Kafka", "AWS Kinesis", "Structured Streaming"],
  },
  {
    icon: Database,
    title: "Data Warehousing & Databases",
    skills: ["Snowflake", "Redshift", "Azure Synapse", "BigQuery", "SQL Server", "Oracle", "PostgreSQL", "MongoDB", "Cassandra"],
  },
  {
    icon: Terminal,
    title: "Orchestration & DevOps",
    skills: ["Apache Airflow (1.x–2.x)", "AWS Step Functions", "Jenkins", "GitHub Actions", "Azure DevOps", "Terraform", "CloudFormation"],
  },
  {
    icon: Shield,
    title: "Data Governance & Security",
    skills: ["Purview", "Unity Catalog", "Glue Catalog", "IAM", "RBAC/ABAC", "KMS", "Key Vault", "Data Masking"],
  },
  {
    icon: BarChart3,
    title: "Monitoring & BI",
    skills: ["CloudWatch", "Azure Monitor", "Grafana", "Prometheus", "Datadog", "Power BI", "Tableau", "Looker"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm tracking-widest uppercase">
            // Technical Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {category.title}
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;