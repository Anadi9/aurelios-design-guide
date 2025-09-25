import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Award, Users, Rocket, Shield, Zap, Database, Cpu, Brain, Cloud, Lock } from "lucide-react";

const stats = [
  { icon: Code2, number: "30+", label: "MVPs Launched", description: "From idea to market" },
  { icon: Award, number: "5+", label: "Years Startup Focus", description: "Specialized in early-stage" },
  { icon: Users, number: "50+", label: "Startups Helped", description: "From garage to growth" },
  { icon: Rocket, number: "2-4", label: "Weeks to MVP", description: "Fast validation cycles" }
];

const technologies = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB",
  "Python", "TensorFlow", "LangChain", "OpenAI", "AWS", "Docker",
  "Next.js", "PostgreSQL", "Redis", "WebSockets", "REST APIs", "GraphQL"
];

const expertise = [
  { icon: Brain, title: "MVP Strategy", description: "Validate ideas quickly" },
  { icon: Zap, title: "Rapid Prototyping", description: "Build fast, iterate faster" },
  { icon: Database, title: "Startup Analytics", description: "Data-driven decisions" },
  { icon: Cpu, title: "Scalable Architecture", description: "Grow without breaking" },
  { icon: Cloud, title: "Cost-Effective Deploy", description: "Start small, scale smart" },
  { icon: Shield, title: "Startup Security", description: "Secure from day one" }
];

const About = () => {
  return (
    <section id="about" className="pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[length:32px_32px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm text-brand-purple font-medium">
                <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
                <span>Startup Specialists</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-righteous">
                <span className="block text-foreground">From</span>
                <span className="block bg-gradient-brand bg-clip-text text-transparent">
                  Idea to IPO
                </span>
                <span className="block text-brand-purple text-2xl md:text-3xl font-normal">
                  We Build Startups
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're not just developers - we're your technical co-founders. We help startups 
                validate ideas with MVPs, scale with smart architecture, and grow into enterprise 
                solutions. From garage to IPO, we're with you every step.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow">
                  <div className="p-2 bg-brand-purple/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-card border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-40">
              {stats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-foreground">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        {stat.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Value Proposition */}
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50">
              <CardContent className="p-0 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Why Startups Choose Us?</h3>
                  <p className="text-muted-foreground">
                    We understand the startup journey and build accordingly
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-purple/5 border border-brand-purple/10">
                    <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <div className="font-medium text-sm">Startup-First Approach</div>
                      <div className="text-xs text-muted-foreground">Built for speed, budget, and validation</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-pink/5 border border-brand-pink/10">
                    <div className="w-2 h-2 rounded-full bg-brand-pink mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <div className="font-medium text-sm">Technical Co-Founders</div>
                      <div className="text-xs text-muted-foreground">We think like founders, not just developers</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <div className="font-medium text-sm">Equity-Friendly</div>
                      <div className="text-xs text-muted-foreground">Flexible payment options for early-stage</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-navy/5 border border-brand-navy/10">
                    <div className="w-2 h-2 rounded-full bg-brand-navy mt-2 flex-shrink-0 animate-pulse" />
                    <div>
                      <div className="font-medium text-sm">Scale-Ready Architecture</div>
                      <div className="text-xs text-muted-foreground">Built to grow from MVP to enterprise</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;