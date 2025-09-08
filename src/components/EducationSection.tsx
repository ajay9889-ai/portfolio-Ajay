import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "BMS Institute of Technology and Management",
      location: "Bengaluru, Karnataka",
      period: "2023 - 2025",
      status: "Completed",
      description: "Comprehensive program covering advanced software development, data structures, algorithms, and emerging technologies.",
      highlights: ["Software Engineering", "Data Analytics", "AI/ML Fundamentals", "Full Stack Development"]
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Previous Institution",
      location: "Karnataka",
      period: "2020 - 2023",
      status: "Completed",
      description: "Foundation in computer science, programming, and software development principles.",
      highlights: ["Programming Fundamentals", "Database Systems", "Web Technologies", "Software Development"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
            Educational <span className="text-script text-neon">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neon transform md:-translate-x-0.5"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-neon rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-2 animate-glow-pulse"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className="bg-card rounded-xl p-6 hover-lift hover:shadow-glow transition-all duration-300 animate-slide-in-left">
                      {/* Status Badge */}
                      <div className={`inline-flex items-center gap-2 mb-4 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <div className="flex items-center gap-2 bg-neon/20 text-neon px-3 py-1 rounded-full text-sm font-semibold">
                          <GraduationCap className="w-4 h-4" />
                          {edu.status}
                        </div>
                      </div>

                      {/* Degree and Institution */}
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-body font-semibold text-neon mb-3">
                        {edu.institution}
                      </h4>

                      {/* Period and Location */}
                      <div className={`flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        {edu.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="bg-muted/50 text-muted-foreground px-2 py-1 rounded text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>

            {/* End Node */}
            <div className="absolute left-8 md:left-1/2 bottom-0 w-6 h-6 bg-neon rounded-full border-4 border-background transform -translate-x-3 md:-translate-x-3 animate-glow-pulse shadow-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;