import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Import project images
import fraudDetectionImg from "@/assets/fraud-detection-project.jpg";
import wisdomPlayImg from "@/assets/wisdomplay-project.jpg";
import eldernestImg from "@/assets/eldernest-project.jpg";
import rfidImg from "@/assets/rfid-project.jpg";
import gestureControlImg from "@/assets/gesture-control-project.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: "fraud-detection",
      title: "Fraud Detection System",
      tagline: "AI-powered financial security solution",
      image: fraudDetectionImg,
      category: "Web App",
      tags: ["Python", "Machine Learning", "React", "API"],
      description: "Advanced fraud detection system using ML algorithms to identify suspicious transactions in real-time.",
      problem: "Financial institutions need automated fraud detection",
      solution: "ML-based system with 95% accuracy in fraud identification",
      features: ["Real-time monitoring", "ML prediction models", "Alert system", "Dashboard analytics"],
      tech: ["Python", "Scikit-learn", "React", "FastAPI", "PostgreSQL"]
    },
    {
      id: "wisdomplay",
      title: "WisdomPlay",
      tagline: "Educational storytelling game for children",
      image: wisdomPlayImg,
      category: "Game",
      tags: ["Unity", "C#", "Game Design", "Education"],
      description: "Interactive educational game that teaches children through storytelling and gameplay mechanics.",
      problem: "Making learning engaging for children",
      solution: "Gamified educational experience with story-driven content",
      features: ["Interactive stories", "Progress tracking", "Reward system", "Adaptive difficulty"],
      tech: ["Unity", "C#", "Firebase", "Adobe Illustrator"]
    },
    {
      id: "eldernest",
      title: "Eldernest",
      tagline: "Hackathon-winning elderly care platform",
      image: eldernestImg,
      category: "Hackathon",
      tags: ["React", "Node.js", "Healthcare", "Winner"],
      description: "Comprehensive elderly care platform connecting seniors with healthcare providers and family members.",
      problem: "Disconnected elderly care ecosystem",
      solution: "Integrated platform for elderly care management",
      features: ["Health monitoring", "Family connectivity", "Emergency alerts", "Care scheduling"],
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"]
    },
    {
      id: "rfid-attendance",
      title: "RFID Attendance System",
      tagline: "Smart attendance management solution",
      image: rfidImg,
      category: "IoT",
      tags: ["RFID", "Database", "Hardware", "Automation"],
      description: "Automated attendance system using RFID technology for seamless check-in/check-out.",
      problem: "Manual attendance tracking inefficiencies",
      solution: "Automated RFID-based attendance with real-time data",
      features: ["RFID card scanning", "Real-time tracking", "Report generation", "Admin dashboard"],
      tech: ["Arduino", "RFID", "Python", "SQLite", "Tkinter"]
    },
    {
      id: "gesture-control",
      title: "Gesture Control IoT",
      tagline: "Hand gesture-controlled smart devices",
      image: gestureControlImg,
      category: "IoT",
      tags: ["IoT", "Computer Vision", "Arduino", "Innovation"],
      description: "Innovative system controlling smart home devices through hand gesture recognition.",
      problem: "Need for intuitive device control interfaces",
      solution: "Computer vision-based gesture recognition system",
      features: ["Hand tracking", "Gesture recognition", "IoT integration", "Wireless control"],
      tech: ["Python", "OpenCV", "Arduino", "ESP32", "MediaPipe"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web App': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'Game': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'Hackathon': return 'bg-neon/20 text-neon border-neon/50';
      case 'IoT': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-script text-neon">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning web development, AI/ML, game development, and IoT innovations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden hover-lift hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <Badge className={`absolute top-4 right-4 ${getCategoryColor(project.category)}`}>
                  {project.category}
                </Badge>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="outline" className="border-neon text-neon hover:bg-neon hover:text-background">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Case Study
                  </Button>
                  <Button size="sm" variant="outline" className="border-neon text-neon hover:bg-neon hover:text-background">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-neon transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-text-secondary line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-neon hover:shadow-glow transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;