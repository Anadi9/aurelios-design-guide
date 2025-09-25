import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star, Award, Shield, Zap, Users, Clock, ArrowRight } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "MVP Launch",
      price: "$5K",
      period: "flat",
      description: "Perfect for validating your startup idea",
      features: [
        "2-4 week development",
        "Core features only",
        "Basic design",
        "Simple deployment",
        "1 month support",
        "User feedback integration"
      ],
      icon: Zap,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Startup Package",
      price: "$10K",
      period: "flat",
      description: "Most popular for early-stage startups",
      features: [
        "4-6 week development",
        "Enhanced features",
        "Custom design",
        "Analytics dashboard",
        "3 months support",
        "Basic AI features",
        "Mobile responsive"
      ],
      popular: true,
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Scale-Up",
      price: "$15K",
      period: "flat",
      description: "For startups ready to grow",
      features: [
        "6-8 week development",
        "Advanced features",
        "Premium design",
        "Advanced analytics",
        "6 months support",
        "AI integration",
        "Performance optimization"
      ],
      icon: Shield,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Equity Partnership",
      price: "Equity",
      period: "based",
      description: "For promising startups with limited budget",
      features: [
        "Equity-based pricing",
        "Full development",
        "Ongoing partnership",
        "Strategic guidance",
        "Long-term support",
        "Growth planning",
        "Investor connections"
      ],
      icon: Users,
      color: "from-brand-navy to-brand-purple"
    }
  ];

const startupFeatures = [
  { icon: Shield, title: "Startup-First", description: "Built for your journey" },
  { icon: Clock, title: "Fast MVP", description: "2-4 weeks to launch" },
  { icon: Star, title: "Quality Code", description: "Scalable from day one" },
  { icon: Users, title: "Founder Support", description: "We're your tech co-founders" }
];

  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[length:44px_44px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="flex items-center justify-center gap-3 text-sm text-brand-purple font-medium">
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
            <span>Startup-Friendly Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-righteous">
            <span className="block text-foreground">Fair</span>
            <span className="block bg-gradient-brand bg-clip-text text-transparent">
              Transparent
            </span>
            <span className="block text-brand-purple text-2xl md:text-3xl font-normal">
              Startup Pricing
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            No enterprise complexity, no hidden fees. We understand startup budgets and offer 
            flexible pricing that grows with your business. From MVP to scale-up, we're here for the journey.
          </p>
        </div>

        {/* Startup Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {startupFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-brand-purple" />
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{feature.title}</div>
                <div className="text-xs text-muted-foreground">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={plan.name} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-brand-purple to-brand-pink text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full group hover:shadow-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-brand-purple border-2 bg-card/80 backdrop-blur-sm' 
                  : 'border-border/50 bg-card/50 backdrop-blur-sm'
              }`}>
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-lg text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-6">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-brand-navy hover:bg-brand-navy/90 text-white border-0 shadow-lg hover:shadow-xl' 
                        : 'bg-transparent hover:bg-brand-purple hover:text-white text-brand-purple border border-brand-purple'
                    } transition-all`}
                  >
                    {plan.name === "Custom" ? "Get Quote" : "Get Started"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Startup CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">Need a Custom Solution?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Every startup is unique. If you don't see exactly what you need, let's chat! 
                  We offer flexible pricing, equity partnerships, and custom solutions for your startup journey.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-4 rounded-lg bg-brand-purple/5 border border-brand-purple/10">
                  <div className="text-2xl font-bold text-brand-purple mb-1">Equity</div>
                  <div className="text-sm text-muted-foreground">Partnerships</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                  <div className="text-2xl font-bold text-green-500 mb-1">Flexible</div>
                  <div className="text-sm text-muted-foreground">Payment Terms</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-brand-navy/5 border border-brand-navy/10">
                  <div className="text-2xl font-bold text-brand-navy mb-1">Free</div>
                  <div className="text-sm text-muted-foreground">Startup Consultation</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-navy/90 transition-colors font-medium">
                  Free Startup Chat
                </Button>
                <Button variant="outline" className="px-8 py-3 border border-brand-purple text-brand-purple rounded-lg hover:bg-brand-purple hover:text-white transition-colors font-medium">
                  Discuss Equity Options
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
