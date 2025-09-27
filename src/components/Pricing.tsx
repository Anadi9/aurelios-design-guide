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

  return (
    <section id="pricing" className="pt-20 px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
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

      </div>
    </section>
  );
};

export default Pricing;
