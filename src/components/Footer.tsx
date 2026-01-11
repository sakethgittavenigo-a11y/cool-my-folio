const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <div className="font-heading text-lg font-bold">
            <span className="text-foreground">Saketh</span>
            <span className="text-primary">.</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Saketh Gittaveni. Built with passion for data.
          </p>

          {/* Quick links */}
          <div className="flex gap-6">
            {["About", "Skills", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;