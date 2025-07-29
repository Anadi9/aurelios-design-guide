import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Award, Users, Rocket } from "lucide-react";

const stats = [
  { icon: Code2, number: "50+", label: "Projects Delivered" },
  { icon: Award, number: "3+", label: "Years Experience" },
  { icon: Users, number: "25+", label: "Happy Clients" },
  { icon: Rocket, number: "100%", label: "Success Rate" }
];

const technologies = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB",
  "Python", "TensorFlow", "LangChain", "OpenAI", "AWS", "Docker",
  "Next.js", "PostgreSQL", "Redis", "WebSockets", "REST APIs", "GraphQL"
];

const About = () => {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Building the
                <br />
                <span className="bg-gradient-rainbow bg-clip-text text-transparent">
                  Future of Web
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As an independent developer, I specialize in creating powerful, 
                AI-enhanced web applications using the MERN stack. From startups 
                to established businesses, I help bring innovative ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Core Expertise</h3>
                <p className="text-muted-foreground">
                  Full-stack development with MongoDB, Express.js, React, and Node.js, 
                  enhanced with modern AI capabilities including natural language processing, 
                  machine learning integration, and intelligent automation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="space-y-3 p-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-rainbow p-[1px] mx-auto">
                      <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-lg font-semibold">Why Choose Me?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-rainbow mt-2 flex-shrink-0" />
                    <span>Rapid prototyping and agile development approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-rainbow mt-2 flex-shrink-0" />
                    <span>Deep expertise in modern AI/ML integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-rainbow mt-2 flex-shrink-0" />
                    <span>End-to-end ownership from concept to deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-rainbow mt-2 flex-shrink-0" />
                    <span>Scalable architecture built for future growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;