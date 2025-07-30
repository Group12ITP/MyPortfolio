import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Eye } from "lucide-react";
import kanchanaProfile from "@/assets/kanchana-profile.jpg";
const Hero = () => {
  const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/Kanchana_Rathnayaka_CV.pdf';
  link.download = 'Kanchana_Rathnayaka_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: "1s"
    }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-glow/10 rounded-full blur-2xl animate-glow" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <div className="text-accent text-lg font-medium">
              👋 Hello, I'm
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Kanchana
              </span>
              <br />
              <span className="text-foreground">Rathnayaka</span>
            </h1>
            <div className="text-xl lg:text-2xl text-muted-foreground font-light">
              <span className="text-accent">Software Engineering Undergraduate</span> |{" "}
              <span className="text-primary">Web & UI Designer</span> |{" "}
              <span className="text-accent-glow">Full Stack Developer</span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            An undergraduate software engineering student passionate about creating 
            scalable, efficient software solutions and beautiful user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="lg" onClick={handleDownloadCV} className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="glass" size="lg" onClick={() => scrollToSection("portfolio")} className="group">
              <Eye className="w-5 h-5" />
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Available for Internship
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              CGPA: 3.64/4.00
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-20 scale-110" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full animate-float" style={{
            animationDelay: "0.5s"
          }} />
            
            {/* Main Profile Image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                <img src={kanchanaProfile} alt="Kanchana Rathnayaka" className="w-full h-full object-cover object-top" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute top-6 -right-6 bg-gradient-card border border-border/20 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">2+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                </div>
              </div>
              
              {/* Projects Badge */}
              <div className="absolute bottom-8 -left-8 bg-gradient-card border border-border/20 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;