const NavigationGrid = () => {
  const sections = [
    { 
      number: "01", 
      title: "Projects", 
      accent: "Case Studies",
      id: "projects"
    },
    { 
      number: "02", 
      title: "Skills", 
      accent: "Tech Stack",
      id: "skills"
    },
    { 
      number: "03", 
      title: "Education", 
      accent: "Journey",
      id: "education"
    },
    { 
      number: "04", 
      title: "Certifications", 
      accent: "Achievements",
      id: "certifications"
    },
    { 
      number: "05", 
      title: "About Me", 
      accent: "My Story",
      id: "about"
    },
    { 
      number: "06", 
      title: "Contact", 
      accent: "Let's Connect",
      id: "contact"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Explore My <span className="text-script text-neon">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate through my journey, skills, and creations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative bg-card hover-lift cursor-pointer group overflow-hidden rounded-xl p-8 hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Large translucent number background */}
              <div className="absolute top-0 right-0 text-8xl font-display font-bold text-neon/10 leading-none select-none group-hover:text-neon/20 transition-colors duration-300">
                {section.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-neon transition-colors duration-300">
                  {section.title}
                </h3>
                <p className="text-script text-lg text-neon group-hover:neon-glow transition-all duration-300">
                  {section.accent}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationGrid;