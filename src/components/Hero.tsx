import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Bot, Sparkles, Terminal, Cpu, Layers, GitBranch, Zap, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[length:24px_24px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.1)_75%)] bg-[length:20px_20px]"></div>
      </div>


      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm text-brand-purple font-medium mb-4">
                    <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
                    <span>MVP & Startup Specialists</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-righteous">
                    <span className="block text-foreground">
                      Launch
                    </span>
                    <span className="block bg-gradient-brand bg-clip-text text-transparent">
                      Fast
                    </span>
                    <span className="block text-brand-purple text-3xl md:text-6xl font-normal">
                      Scale Smart
                    </span>
                  </h1>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    We help startups build MVPs that validate ideas and scale into enterprise-grade solutions. 
                    From prototype to IPO, we're your technical co-founders.
                  </p>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border shadow-2xl">
                  {/* Terminal Window */}
                  <div className="bg-brand-navy rounded-lg p-4 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-white/70 ml-4">Terminal</span>
                    </div>
                    <div className="space-y-2 text-green-400">
                      <div>$ npm run mvp</div>
                      <div className="text-white">✓ Building MVP...</div>
                      <div className="text-white">✓ Validating features...</div>
                      <div className="text-white">✓ Deploying to Vercel...</div>
                      <div className="text-green-400">✓ MVP launched in 2 weeks!</div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000" style={{ animationDuration: '3s' }}>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="absolute top-1/2 -right-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500" style={{ animationDuration: '3s' }}>
                    <GitBranch className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons at Bottom Center */}
        <div className="flex justify-center pb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-base px-8 bg-brand-navy hover:bg-brand-navy/90 text-white border-0 group shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => navigate('/start-project')}
            >
              Build Your MVP
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="w-4 h-4 mr-2" />
              First Consultation Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;