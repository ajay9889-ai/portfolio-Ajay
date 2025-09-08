import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import portraitImage from "@/assets/ajay-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-neon/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-display font-bold text-foreground animate-text-reveal">
              Hello, I'm <span className="text-neon font-script text-7xl lg:text-9xl">Ajay A</span>
            </h1>
            
            <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl lg:text-2xl font-body text-muted-foreground">
                MCA Graduate | Full Stack Developer | AI & Data Enthusiast
              </p>
              
              <p className="text-lg font-body text-text-secondary max-w-md">
                Crafting innovative solutions through code, data, and design. 
                Building the future, one project at a time.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-neon hover:shadow-glow transition-all duration-300 font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon text-neon hover:bg-neon hover:text-background neon-border transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Right side - Portrait */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src={portraitImage} 
                alt="Ajay A - Full Stack Developer"
                className="w-full h-full object-cover rounded-2xl shadow-elevated neon-border animate-glow-pulse"
              />
              
              {/* Neon outline effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-neon/50 animate-glow-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;