import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Download, Send, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Me",
      value: "ajayhasrb123@gmail.com",
      href: "mailto:ajayhasrb123@gmail.com",
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Phone,
      label: "Call Me",
      value: "+91 8618427191",
      href: "tel:+918618427191",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ajay9889-ai",
      href: "https://github.com/ajay9889-ai",
      color: "from-gray-500/20 to-slate-500/20"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ajay A",
      href: "https://linkedin.com/in/ajay-a",
      color: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-display font-bold text-foreground mb-6 animate-neon-flicker">
            Let's <span className="text-script text-neon">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-neon">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Bengaluru, Karnataka, India</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group bg-card rounded-xl p-6 hover-lift hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${method.color} rounded-lg p-4 mb-4 w-fit`}>
                  <method.icon className="w-6 h-6 text-foreground group-hover:text-neon transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-neon transition-colors duration-300 mb-2">
                  {method.label}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-neon hover:shadow-glow transition-all duration-300 font-semibold min-w-[200px]"
              onClick={() => window.open('mailto:ajayhasrb123@gmail.com', '_blank')}
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon text-neon hover:bg-neon hover:text-background neon-border transition-all duration-300 min-w-[200px]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Quick Message Form */}
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
              Quick <span className="text-neon">Message</span>
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-neon focus:border-transparent transition-all duration-300 text-foreground resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-neon hover:shadow-glow transition-all duration-300 font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground">
              Open to opportunities • Available for freelance projects • Based in Bengaluru
            </p>
            <p className="text-sm text-text-secondary mt-2">
              © 2025 Ajay A. Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;