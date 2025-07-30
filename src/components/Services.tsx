import { Palette, Globe, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI Design",
      description: "Creating beautiful and intuitive user interfaces with modern design principles",
      features: [
        "Wireframing & Prototyping",
        "User Experience Design", 
        "Design Systems",
        "Figma Expertise"
      ],
      color: "text-primary",
      bgGradient: "from-primary/10 to-primary-glow/5",
      borderColor: "border-primary/20",
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Responsive and modern web designs that work across all devices",
      features: [
        "Responsive Design",
        "Modern Layouts",
        "Cross-browser Compatibility",
        "Performance Optimization"
      ],
      color: "text-accent",
      bgGradient: "from-accent/10 to-accent-glow/5", 
      borderColor: "border-accent/20",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications using cutting-edge technologies",
      features: [
        "MERN Stack Development",
        ".NET Core Applications",
        "Database Integration",
        "API Development"
      ],
      color: "text-primary-glow",
      bgGradient: "from-primary-glow/10 to-primary/5",
      borderColor: "border-primary-glow/20",
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">My</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise Service! Let's check it out
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group bg-gradient-to-br ${service.bgGradient} border ${service.borderColor} rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden hover:shadow-card transition-all duration-500 hover:scale-105`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-card border border-border/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                      style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                    >
                      <div className={`w-2 h-2 ${service.color.replace('text-', 'bg-')} rounded-full flex-shrink-0`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={scrollToContact}
                  className="w-full group/btn hover:bg-white/5"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border/20 rounded-2xl p-8 backdrop-blur-sm inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Let's discuss how I can help bring your ideas to life with modern, 
              efficient solutions.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;