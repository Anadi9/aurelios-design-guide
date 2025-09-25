import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Brain, Smartphone, Zap, Database, Shield, Cpu, Cloud, Lock, BarChart3, Users, GitBranch } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "MVP Web Applications",
    description: "Get to market fast with a solid MVP. We build lean, functional web apps that validate your idea without breaking the bank.",
    features: ["React/Next.js", "Rapid Development", "Cost-Effective", "User Testing"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Brain,
    title: "AI-Enhanced MVPs",
    description: "Add intelligent features to your MVP without the complexity. Smart chatbots, basic analytics, and AI that actually helps users.",
    features: ["Simple AI Integration", "Chatbot MVP", "Basic Analytics", "Smart Automation"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Database,
    title: "Startup Analytics",
    description: "Understand your users from day one. Simple dashboards that show what matters: user behavior, growth metrics, and key insights.",
    features: ["User Analytics", "Growth Tracking", "Simple Dashboards", "A/B Testing"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Test ideas quickly with working prototypes. We build fast, iterate faster, and help you find product-market fit.",
    features: ["Quick Builds", "User Feedback", "Fast Iterations", "Validation"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Startup Security",
    description: "Secure from day one, but not over-engineered. We implement essential security without the enterprise complexity.",
    features: ["Basic Auth", "Data Protection", "Secure Hosting", "Privacy First"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Cloud,
    title: "Scalable Deployment",
    description: "Start small, scale smart. We deploy on cost-effective platforms that grow with your startup, not against it.",
    features: ["Vercel/Netlify", "Auto-scaling", "Cost Monitoring", "Easy Updates"],
    color: "from-cyan-500 to-blue-500"
  }
];

const startupFeatures = [
  { icon: Cpu, title: "Fast Development", description: "2-4 weeks to MVP" },
  { icon: BarChart3, title: "Growth Analytics", description: "Track what matters" },
  { icon: Users, title: "User Validation", description: "Test with real users" },
  { icon: GitBranch, title: "Agile Process", description: "Iterate quickly" },
  { icon: Lock, title: "Startup Security", description: "Secure but simple" },
  { icon: Zap, title: "Cost Effective", description: "Budget-friendly" }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="flex items-center justify-center gap-3 text-sm text-brand-purple font-medium">
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
            <span>MVP & Startup Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-righteous">
            <span className="block text-foreground">Build</span>
            <span className="block bg-gradient-brand bg-clip-text text-transparent">
              Validate
            </span>
            <span className="block text-brand-purple text-2xl md:text-3xl font-normal">
              Scale
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We help startups go from idea to market with MVPs that actually work. Fast development, 
            real validation, and smart scaling - all designed for the startup journey.
          </p>
        </div>

        {/* Startup Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {startupFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{feature.title}</div>
                <div className="text-xs text-muted-foreground">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-brand-purple transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <div className="text-sm font-medium text-foreground">Key Capabilities</div>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Startup Ready</span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>2-4 Weeks</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Startup CTA */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-bold">Ready to Launch Your MVP?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Let's turn your startup idea into a working MVP that validates your concept 
                and gets you to market fast. No enterprise complexity, just smart solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-4 rounded-lg bg-brand-purple/5 border border-brand-purple/10">
                  <div className="text-2xl font-bold text-brand-purple mb-1">2-4</div>
                  <div className="text-sm text-muted-foreground">Weeks to MVP</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                  <div className="text-2xl font-bold text-green-500 mb-1">$5K-15K</div>
                  <div className="text-sm text-muted-foreground">MVP Budget</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-brand-navy/5 border border-brand-navy/10">
                  <div className="text-2xl font-bold text-brand-navy mb-1">Free</div>
                  <div className="text-sm text-muted-foreground">Startup Chat</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-navy/90 transition-colors font-medium">
                  Build Your MVP
                </button>
                <button className="px-8 py-3 border border-brand-purple text-brand-purple rounded-lg hover:bg-brand-purple hover:text-white transition-colors font-medium">
                  Free Startup Chat
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;