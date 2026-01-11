import { Mail, Linkedin, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Terminal-style intro */}
        <div className="section-fade stagger-1 mb-6">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-heading text-sm tracking-wider">
            &gt; Senior Azure Data Engineer
          </span>
        </div>

        {/* Main heading */}
        <h1 className="section-fade stagger-2 font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-foreground">Saketh</span>
          <br />
          <span className="text-gradient glow-text">Gittaveni</span>
        </h1>

        {/* Subtitle */}
        <p className="section-fade stagger-3 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
          9+ years designing enterprise-scale Azure data platforms. 
          Building high-performance ETL/ELT pipelines that power analytics and drive decisions.
        </p>

        {/* Contact info */}
        <div className="section-fade stagger-4 flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          <a 
            href="mailto:sakethyadav07@gmail.com" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:animate-pulse-glow" />
            <span className="text-sm md:text-base">sakethyadav07@gmail.com</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Linkedin className="w-4 h-4 group-hover:animate-pulse-glow" />
            <span className="text-sm md:text-base">LinkedIn</span>
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm md:text-base">Open to Relocate</span>
          </span>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="section-fade stagger-5 animate-bounce mt-8 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;