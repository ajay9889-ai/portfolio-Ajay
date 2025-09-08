import portraitImage from "@/assets/ajay-portrait.jpg";

const AboutSection = () => {
  const highlights = [
    "Web Development",
    "Data Analytics", 
    "AI/ML",
    "Creative Technologies",
    "Scalable APIs",
    "ML Models",
    "Intuitive Frontends",
    "Innovative Solutions"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:max-w-none">
                <img 
                  src={portraitImage} 
                  alt="Ajay A - About Me"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-elevated neon-border animate-scale-in"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon/20 rounded-full blur-xl animate-glow-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon/10 rounded-full blur-2xl animate-float"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground">
                <span className="text-script text-neon animate-neon-flicker">About me</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground animate-slide-in-right">
                  I'm <span className="font-semibold text-neon">Ajay A</span>, an MCA graduate from BMSIT with expertise across 
                  <span className="font-semibold hover:text-neon transition-colors duration-300 cursor-default"> web development</span>, 
                  <span className="font-semibold hover:text-neon transition-colors duration-300 cursor-default"> data analytics</span>, 
                  <span className="font-semibold hover:text-neon transition-colors duration-300 cursor-default"> AI</span>, and 
                  <span className="font-semibold hover:text-neon transition-colors duration-300 cursor-default"> creative technologies</span>.
                </p>
                
                <p className="text-text-secondary animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  My work ranges from building fraud detection apps and RFID attendance systems, to experimenting with 
                  gesture-controlled IoT devices and Unity-based educational games. I thrive on solving real-world problems 
                  by blending <span className="font-semibold text-neon">code</span>, 
                  <span className="font-semibold text-neon">data</span>, and 
                  <span className="font-semibold text-neon">design</span>.
                </p>
                
                <p className="text-text-secondary animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  Whether it's developing scalable APIs, training ML models, analyzing datasets, or crafting intuitive 
                  frontends, I bring a balance of <span className="font-semibold text-foreground">technical skill</span> and 
                  <span className="font-semibold text-foreground">creativity</span>. My hackathon-winning project 
                  <span className="font-semibold text-neon">Eldernest</span> reflects my belief that technology should not 
                  just solve problems but also connect people and improve lives.
                </p>
                
                <p className="text-foreground font-medium animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                  I'm constantly learning and pushing myself to deliver work that's 
                  <span className="font-bold text-neon"> impactful</span>, 
                  <span className="font-bold text-neon"> innovative</span>, and 
                  <span className="font-bold text-neon"> human-centered</span>.
                </p>
              </div>
            </div>

            {/* Highlight Keywords */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <span
                    key={highlight}
                    className="bg-card border border-neon/30 text-neon px-4 py-2 rounded-full text-sm font-medium hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-default animate-scale-in"
                    style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-neon pl-6 italic text-muted-foreground animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              "Technology should not just solve problems but also connect people and improve lives."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;