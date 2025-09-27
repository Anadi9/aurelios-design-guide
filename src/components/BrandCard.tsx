import React from 'react';
import Card from './ui/hero-card';

const BrandCard = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-righteous text-foreground">
              Your Brand, 
              <span className="block bg-gradient-brand bg-clip-text text-transparent">
                Our Platform
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how your startup could look with our platform. Enter your brand name and watch the magic happen.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group">
              {/* Glowing border container */}
              <div 
                className="absolute -inset-1 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-middle)), hsl(var(--gradient-end)))'
                }}
              ></div>
              {/* Inner glow */}
              <div 
                className="absolute -inset-0.5 rounded-lg opacity-30"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-middle)), hsl(var(--gradient-end)))'
                }}
              ></div>
              {/* Card container */}
              <div className="relative bg-background rounded-lg overflow-hidden">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCard;
