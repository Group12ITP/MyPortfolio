import { GraduationCap, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">About</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              An undergraduate software engineering student, I specialize in developing 
              <span className="text-primary font-medium"> scalable, efficient software solutions</span> using 
              modern frameworks and tools. Proficient in programming, object-oriented design, 
              database management, and UI/UX principles.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I adapt quickly to dynamic environments and embrace continuous learning. 
              Passionate about integrating <span className="text-accent font-medium">artificial intelligence</span> with 
              software development, I am driven to apply agile methodologies and innovative 
              problem-solving to deliver high-quality, tailored solutions within tight deadlines.
            </p>

            <div className="bg-gradient-card border border-border/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Career Objective</h3>
              </div>
              <p className="text-muted-foreground">
                Seeking internship opportunities to apply and expand my skills in a 
                professional environment while contributing to innovative software solutions.
              </p>
            </div>
          </div>

          {/* Right Content - Education & Stats */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-gradient-card border border-border/20 rounded-2xl p-8 shadow-card backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground text-sm">Current Studies</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">BSc (Hons) in Information Technology</h4>
                    <p className="text-accent font-medium">Specializing in Software Engineering</p>
                  </div>
                  
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Institution:</strong> Sri Lanka Institute of Information Technology (SLIIT)</p>
                    <p><strong>Duration:</strong> 2023 – Present</p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border/20">
                    <Award className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Current CGPA</p>
                      <p className="text-2xl font-bold text-accent">3.64 / 4.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-card border border-border/20 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years of Study</div>
              </div>
              <div className="bg-gradient-card border border-border/20 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;