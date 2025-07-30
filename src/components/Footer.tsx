import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin, 
      href: "#",
      label: "LinkedIn",
      color: "hover:text-accent"
    },
    {
      icon: Mail,
      href: "mailto:rmmkr2018@gmail.com",
      label: "Email",
      color: "hover:text-primary-glow"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 relative overflow-hidden border-t border-border/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo & Description */}
          <div className="space-y-4">
            <div 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform inline-block"
            >
              Kanchana Rathnayaka
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Software Engineering Undergraduate passionate about creating 
              innovative solutions and beautiful user experiences.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {["About", "Skills", "Services", "Portfolio", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gradient-card border border-border/20 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            
            <div className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;