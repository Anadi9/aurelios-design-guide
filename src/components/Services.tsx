import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Brain, Smartphone, Zap, Database, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    description: "Complete MERN stack applications with modern React frontends, robust Express APIs, and MongoDB databases. Scalable architecture from MVP to enterprise.",
    features: ["React/Next.js", "Node.js/Express", "MongoDB", "Real-time features"]
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your applications. From chatbots to intelligent automation, powered by latest language models and ML frameworks.",
    features: ["LangChain", "OpenAI/Anthropic", "Custom AI workflows", "RAG systems"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive web applications that work flawlessly across all devices. Progressive Web Apps (PWA) for native-like mobile experiences.",
    features: ["Responsive design", "PWA development", "Mobile optimization", "Cross-platform"]
  },
  {
    icon: Zap,
    title: "Performance & Scale",
    description: "Optimized applications built for speed and scalability. Advanced caching, database optimization, and deployment strategies.",
    features: ["Performance tuning", "Load balancing", "CDN integration", "Cloud deployment"]
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Comprehensive data architecture design. From database modeling to real-time analytics and data visualization dashboards.",
    features: ["Database design", "Data migration", "Analytics", "Reporting tools"]
  },
  {
    icon: Shield,
    title: "Security & Auth",
    description: "Enterprise-grade security implementation. Authentication, authorization, data encryption, and compliance with security best practices.",
    features: ["JWT/OAuth", "Data encryption", "Security audits", "Compliance"]
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-rainbow bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, I deliver comprehensive solutions that combine 
            modern web development with artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-rainbow p-[1px] mb-4">
                  <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-rainbow mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;