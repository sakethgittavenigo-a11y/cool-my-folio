import { GraduationCap, Calendar, Building } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-secondary/20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm tracking-widest uppercase">
            // Academic Background
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        {/* Education card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 card-hover group">
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors mx-auto">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>

            {/* Degree */}
            <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-2">
              Bachelor's Degree in Computer Science
            </h3>

            {/* University */}
            <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-4">
              <Building className="w-4 h-4" />
              <span>Jawaharlal Nehru Technological University</span>
            </div>

            {/* Period */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>2011 - 2015</span>
            </div>

            {/* Decorative line */}
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Focus areas */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Data Structures", "Algorithms", "Database Systems", "Software Engineering"].map((area, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;