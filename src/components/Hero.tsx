import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Bot, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-rainbow bg-clip-text text-transparent">
              MERN Stack
            </span>
            <br />
            <span className="text-foreground">+ AI Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-stack development meets artificial intelligence. 
            Building scalable web applications with cutting-edge AI integration.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            MongoDB
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Express.js
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            React
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Node.js
          </div>
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4" />
            AI/ML
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            LangChain
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-base px-8 group">
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;