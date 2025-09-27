import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Bot, Sparkles, Terminal, Cpu, Layers, GitBranch, Zap, Award, Rocket } from "lucide-react";
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
        <div className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left Column - Main Content */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-lg text-brand-purple font-medium mb-6">
                    <div className="w-3 h-3 bg-brand-purple rounded-full animate-pulse"></div>
                    <span><span className="font-[700] text-[20px]">A</span>utomating <span className="font-[700] text-[20px]">N</span>ext-Gen <span className="font-[700] text-[20px]">T</span>imeless <span className="font-[700] text-[20px]">A</span>rchitecture</span>
                  </div>

                  <h1 className="text-7xl md:text-9xl font-bold tracking-tight font-righteous leading-tight">
                    <span className="block text-foreground">
                      Launch
                    </span>
                    <span className="block bg-gradient-brand bg-clip-text text-transparent">
                      Fast
                    </span>
                    <span className="block text-brand-purple text-4xl md:text-7xl font-normal">
                      Scale Smart
                    </span>
                  </h1>

                  <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    We help startups build MVPs that validate ideas and scale into enterprise-grade solutions.
                    From prototype to production, we're your technical co-founders.
                  </p>
                </div>


              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 border shadow-2xl">
                  {/* Terminal Window */}
                  <div className="bg-brand-navy rounded-2xl p-6 font-mono text-base">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-white/70 ml-4 text-sm">Terminal</span>
                    </div>
                    <div className="space-y-3 text-green-400">
                      <div>$ npm run mvp</div>
                      <div className="text-white">✓ Building MVP...</div>
                      <div className="text-white">✓ Validating features...</div>
                      <div className="text-white">✓ Deploying to Production...</div>
                      <div className="text-green-400">✓ MVP launched in 2 weeks!</div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                    <Cpu className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-xl animate-bounce delay-1000" style={{ animationDuration: '3s' }}>
                    <Zap className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute top-1/2 -right-10 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-bounce delay-500" style={{ animationDuration: '3s' }}>
                    <GitBranch className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <Button
                size="lg"
                className="text-lg px-12 py-6 bg-brand-navy hover:bg-brand-navy/90 text-white border-0 group shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => navigate('/start-project')}
              >
                Build Your MVP
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-12 py-6 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code className="w-5 h-5 mr-3" />
                First Consultation Free
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;