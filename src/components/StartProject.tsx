import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Check, Plus, ArrowRight, Award, Shield, Clock, Users, Rocket, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StartProject = () => {
  const navigate = useNavigate();

  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Application", "AI Features"]);

  const services = [
    "Web Application",
    "AI Features",
    "Data Dashboard",
    "Mobile App",
    "E-commerce Site",
    "API Development",
    "Performance Optimization",
    "Security Setup",
    "Database Design",
    "Real-time Features",
    "Custom Solution"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="start-project" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[length:48px_48px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          
          <div className="flex items-center justify-center gap-3 text-sm text-brand-purple font-medium">
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
            <span>Let's Build Together</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-righteous">
            <span className="block text-foreground">Ready to Start</span>
            <span className="block bg-gradient-brand bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every great project starts with a conversation. Share your vision with us and let's
            work together to bring your ideas to life with the right technology and approach.
          </p>
        </div>

        {/* Collaboration Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-center">
              <div className="font-medium text-sm">Collaborative Approach</div>
              <div className="text-xs text-muted-foreground">We work with you</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-center">
              <div className="font-medium text-sm">Quality Focus</div>
              <div className="text-xs text-muted-foreground">We care about details</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-brand-navy/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-center">
              <div className="font-medium text-sm">Responsive</div>
              <div className="text-xs text-muted-foreground">Quick communication</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-brand-pink/10 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-brand-pink" />
            </div>
            <div className="text-center">
              <div className="font-medium text-sm">Fast Iteration</div>
              <div className="text-xs text-muted-foreground">Quick feedback loops</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl">
              {/* Service Selection */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">What Do You Need Help With?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`flex items-center justify-center gap-2 p-4 rounded-lg border transition-all ${isSelected
                            ? 'bg-brand-navy text-white border-brand-navy shadow-lg'
                            : 'bg-card border-border hover:border-brand-purple hover:shadow-md'
                          }`}
                      >
                        {isSelected ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                        <span className="text-sm font-medium">{service}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <label className="block text-foreground text-lg font-semibold mb-4">
                  Project Requirements *
                </label>
                <Textarea
                  placeholder="Describe your enterprise project requirements, business goals, technical specifications, and any specific features you need..."
                  className="w-full min-h-[140px] bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-brand-purple focus:ring-brand-purple"
                />
              </div>

              {/* Form */}
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Estimated Budget *
                      </label>
                      <Select>
                        <SelectTrigger className="bg-input border-border text-foreground focus:border-brand-purple">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-25k">Under $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="over-250k">Over $250,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-brand-purple focus:ring-brand-purple"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-brand-purple focus:ring-brand-purple"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <Input
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-brand-purple focus:ring-brand-purple"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Estimated Timeline *
                      </label>
                      <Select>
                        <SelectTrigger className="bg-input border-border text-foreground focus:border-brand-purple">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3-months">1-3 Months</SelectItem>
                          <SelectItem value="3-6-months">3-6 Months</SelectItem>
                          <SelectItem value="6-12-months">6-12 Months</SelectItem>
                          <SelectItem value="12-24-months">12-24 Months</SelectItem>
                          <SelectItem value="ongoing">Ongoing Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-brand-purple focus:ring-brand-purple"
                        placeholder="Enter your last name"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-brand-purple focus:ring-brand-purple"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Your Title/Role *
                      </label>
                      <Input
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-brand-purple focus:ring-brand-purple"
                        placeholder="e.g., CTO, VP Engineering, Product Manager"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <Button
                    type="submit"
                    className="bg-brand-navy hover:bg-brand-navy/90 text-white px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all group"
                  >
                    <Award className="mr-2 w-5 h-5" />
                    Submit Enterprise Proposal Request
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Enterprise Guarantees */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Our Promise to You</h3>
                    <p className="text-sm text-muted-foreground">What you can expect from working with us</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-purple/5 border border-brand-purple/10">
                    <Clock className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Quick Response</div>
                      <div className="text-xs text-muted-foreground">We'll get back to you fast</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                    <Award className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Free Initial Chat</div>
                      <div className="text-xs text-muted-foreground">No pressure, just helpful advice</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-navy/5 border border-brand-navy/10">
                    <Users className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Direct Communication</div>
                      <div className="text-xs text-muted-foreground">Work directly with the team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-6">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center text-white text-xs font-bold">1</div>
                  <div>
                    <div className="font-medium text-sm">Initial Consultation</div>
                    <div className="text-xs text-muted-foreground">Discuss requirements</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center text-white text-xs font-bold">2</div>
                  <div>
                    <div className="font-medium text-sm">Proposal & Timeline</div>
                    <div className="text-xs text-muted-foreground">Detailed project plan</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center text-white text-xs font-bold">3</div>
                  <div>
                    <div className="font-medium text-sm">Development</div>
                    <div className="text-xs text-muted-foreground">Agile development process</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center text-white text-xs font-bold">4</div>
                  <div>
                    <div className="font-medium text-sm">Deployment & Support</div>
                    <div className="text-xs text-muted-foreground">Launch and maintain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartProject;
