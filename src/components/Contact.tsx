import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Glow effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm tracking-widest uppercase">
            // Let's Connect
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Open to discussing new opportunities, collaborations, or just a friendly chat about data engineering.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a 
            href="mailto:sakethyadav07@gmail.com"
            className="bg-card border border-border rounded-xl p-6 card-hover group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">Email</h3>
            <p className="text-xs text-muted-foreground break-all">sakethyadav07@gmail.com</p>
          </a>

          {/* Phone */}
          <a 
            href="tel:+14705024754"
            className="bg-card border border-border rounded-xl p-6 card-hover group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-xs text-muted-foreground">+1 (470) 502-4754</p>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-xl p-6 card-hover group text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-xs text-muted-foreground">View Profile</p>
          </a>

          {/* Location */}
          <div className="bg-card border border-border rounded-xl p-6 card-hover group text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">Location</h3>
            <p className="text-xs text-muted-foreground">Open to Relocate</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="mailto:sakethyadav07@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-xl hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            <Send className="w-5 h-5" />
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;