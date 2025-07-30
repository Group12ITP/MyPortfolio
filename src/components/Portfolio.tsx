import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import drivingSchoolImage from "@/assets/images.png";
import sparePartsImage from "@/assets/1.png";
import vanTrackingImage from "@/assets/image.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Driving School Management System",
      description: "A comprehensive MERN stack application for managing driving school operations with online lesson booking, instructor selection, and payment processing.",
      image: drivingSchoolImage,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Online lesson booking system",
        "Instructor selection & scheduling", 
        "Secure payment processing",
        "Student progress tracking",
        "Real-time communication",
        "Administrative reports"
      ],
      github: "#",
      live: "#",
      status: "Completed",
      type: "Full-Stack Web App"
    },
    {
      title: "Computer Spare Parts Management",
      description: "Java-based inventory management system with real-time tracking, warranty claim handling, and online ordering capabilities.",
      image: sparePartsImage,
      tags: ["Java", "MySQL", "HTML", "CSS"],
      features: [
        "Real-time inventory tracking",
        "Warranty claim management",
        "Online order processing",
        "Supplier management",
        "Sales analytics",
        "Stock alerts"
      ],
      github: "#",
      live: "#", 
      status: "Completed",
      type: "Desktop Application"
    },
    {
      title: "School Van Management System",
      description: "ASP.NET Core MVC application with real-time van tracking using Leaflet.js, role-based dashboards, and booking management.",
      image: vanTrackingImage,
      tags: ["ASP.NET Core", "C#", "Leaflet.js", "SQL Server"],
      features: [
        "Real-time GPS tracking",
        "Role-based dashboards", 
        "Route optimization",
        "Parent notifications",
        "Booking management",
        "Driver management"
      ],
      github: "#",
      live: "#",
      status: "In Progress",
      type: "Web Application"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-44 h-44 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">My</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Digital Product Showcases - A collection of my recent work and projects
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative bg-gradient-card border border-border/20 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-accent/20 text-accent border border-accent/30' 
                        : 'bg-primary/20 text-primary border border-primary/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Project screenshot */}
                  <div className="aspect-video rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-2xl">
                    <Button variant="glass" size="sm">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="accent" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-accent">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-accent" />
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gradient-card border border-border/20 rounded-full text-sm backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="group">
                    <Github className="w-4 h-4" />
                    View Code
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                  <Button variant="hero" className="group">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border/20 rounded-2xl p-8 backdrop-blur-sm inline-block">
            <h3 className="text-2xl font-bold mb-4">Want to see more projects?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <Button variant="accent" size="lg" className="group">
              <Github className="w-5 h-5" />
              Visit GitHub
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;