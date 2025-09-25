import { Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from "lucide-react";
import antaLogo from "@/assets/anta-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={antaLogo} alt="ANTA Logo" className="w-10 h-10" />
                <div>
                  <span className="text-2xl font-bold text-foreground font-righteous">ANTA</span>
                  <div className="text-sm text-muted-foreground">Startup Specialists</div>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
              We help startups build MVPs that validate ideas and scale into enterprise solutions. 
              From garage to IPO, we're your technical co-founders.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@anta.dev</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="hover:text-foreground transition-colors cursor-pointer">MVP Development</div>
              <div className="hover:text-foreground transition-colors cursor-pointer">Startup Analytics</div>
              <div className="hover:text-foreground transition-colors cursor-pointer">Rapid Prototyping</div>
              <div className="hover:text-foreground transition-colors cursor-pointer">AI-Enhanced MVPs</div>
              <div className="hover:text-foreground transition-colors cursor-pointer">Equity Partnerships</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="hover:text-foreground transition-colors cursor-pointer">Our Story</div>
              <div className="hover:text-foreground transition-colors cursor-pointer">Startup Success</div>
              <div className="hover:text-foreground transition-colors cursor-pointer">Join Our Team</div>
              <div className="hover:text-foreground transition-colors cursor-pointer">Startup Blog</div>
              <div className="hover:text-foreground transition-colors cursor-pointer">Free Consultation</div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Startup Ready</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 ANTA. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
