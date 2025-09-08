import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2024",
      credentialId: "CISCO-PYE1-2024",
      logo: "🐍",
      description: "Fundamental Python programming concepts and skills",
      skills: ["Python Basics", "Data Types", "Control Structures", "Functions"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Online Course Platform",
      date: "2023",
      credentialId: "FSWD-2023",
      logo: "🌐",
      description: "Comprehensive web development using modern technologies",
      skills: ["React", "Node.js", "Database Design", "API Development"],
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      issuer: "Tech Institute",
      date: "2023",
      credentialId: "ML-FUND-2023",
      logo: "🤖",
      description: "Core concepts of machine learning and AI",
      skills: ["Supervised Learning", "Data Analysis", "Model Training", "Python ML Libraries"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 4,
      title: "IoT and Arduino Programming",
      issuer: "Electronics Academy",
      date: "2023",
      credentialId: "IOT-ARD-2023",
      logo: "⚡",
      description: "Internet of Things development and Arduino programming",
      skills: ["Arduino IDE", "Sensor Integration", "IoT Protocols", "Hardware Programming"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
            <span className="text-script text-neon">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and skill validation through professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-card border border-border/50 hover:border-neon/50 rounded-xl overflow-hidden hover-lift hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-br ${cert.color} p-6 text-center`}>
                <div className="text-4xl mb-4 animate-float">
                  {cert.logo}
                </div>
                <div className="flex items-center justify-center gap-2 text-neon">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">{cert.date}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-neon transition-colors duration-300 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-neon">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-muted/50 text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full border-neon/50 text-neon hover:bg-neon hover:text-background group-hover:shadow-sm transition-all duration-300"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;