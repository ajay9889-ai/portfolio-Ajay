import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "C#", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C++", level: "Intermediate" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "HTML5/CSS3", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      category: "Data & ML",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Data Analysis", level: "Advanced" },
        { name: "Pandas", level: "Advanced" },
        { name: "Scikit-learn", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "SQL", level: "Expert" }
      ]
    },
    {
      category: "Creative Tech",
      skills: [
        { name: "Unity", level: "Advanced" },
        { name: "Game Development", level: "Advanced" },
        { name: "Computer Vision", level: "Intermediate" },
        { name: "OpenCV", level: "Intermediate" },
        { name: "Arduino", level: "Advanced" },
        { name: "IoT", level: "Advanced" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: "Expert" },
        { name: "Docker", level: "Intermediate" },
        { name: "Firebase", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "AWS", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-neon/20 text-neon border-neon/50';
      case 'Advanced': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'Intermediate': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Technical <span className="text-script text-neon">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains of technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group bg-card rounded-lg p-4 text-center hover-lift hover:shadow-glow transition-all duration-300 cursor-pointer border border-border/50 hover:border-neon/50"
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    <div className="mb-3">
                      <h4 className="font-body font-semibold text-foreground group-hover:text-neon transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                    
                    <Badge 
                      className={`text-xs border ${getLevelColor(skill.level)} group-hover:shadow-sm transition-all duration-300`}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;