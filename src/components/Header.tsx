import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Sun, Moon, Settings, Info, DollarSign, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import antaLogo from "@/assets/anta-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const navigation = [
    { name: "Services", href: "#services", icon: Settings },
    { name: "About", href: "#about", icon: Info },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
    { name: "Contact", href: "#contact", icon: MessageCircle }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src={antaLogo} alt="ANTA Logo" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground font-righteous">
                ANTA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
            
            {/* Theme Switch Button */}
            <Button
              variant="outline"
              size="sm"
              className="px-3 border-border hover:bg-muted"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            
            <Button 
              size="sm" 
              className="px-6 bg-brand-navy hover:bg-brand-navy/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => navigate('/start-project')}
            >
              <Code2 className="w-4 h-4 mr-2" />
              Build MVP
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-border hover:bg-muted"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
              <Button 
                size="sm" 
                className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white border-0"
                onClick={() => navigate('/start-project')}
              >
                <Code2 className="w-4 h-4 mr-2" />
                Build MVP
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;