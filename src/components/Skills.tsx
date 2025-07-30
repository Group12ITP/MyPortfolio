import { Code, Database, Wrench, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C#", level: 80 },
        { name: "Python", level: 75 },
        { name: "C/C++", level: 70 },
        { name: "PHP", level: 65 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      icon: Wrench,
      title: "Frameworks & Libraries",
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "React", level: 85 },
        { name: ".NET Core", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-primary-glow",
      bgColor: "bg-primary-glow/10",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQL Server", level: 75 },
      ]
    },
    {
      icon: Palette,
      title: "Tools & Technologies",
      color: "text-accent-glow",
      bgColor: "bg-accent-glow/10",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Git", level: 80 },
        { name: "VS Code", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">My</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gradient-card border border-border/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:shadow-card transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.skills.length} technologies</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${
                            categoryIndex % 2 === 0 ? 'from-primary to-primary-glow' : 'from-accent to-accent-glow'
                          } rounded-full transition-all duration-1000 group-hover/skill:animate-pulse`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {["Agile Methodologies", "Problem Solving", "UI/UX Design", "API Development", "Database Design", "Version Control"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-card border border-border/20 rounded-full text-sm backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;