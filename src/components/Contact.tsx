import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Calendar, ArrowRight, Clock, Shield, Award, Users, Globe, Phone, MapPin } from "lucide-react";
import antaLogo from "@/assets/anta-logo.png";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(59,130,246)_1px,transparent_0)] bg-[length:36px_36px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="flex items-center justify-center gap-3 text-sm text-brand-purple font-medium">
            <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
            <span>Let's Talk</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-righteous">
            <span className="block text-foreground">Ready to Build</span>
            <span className="block bg-gradient-brand bg-clip-text text-transparent">
              Your MVP?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Got a startup idea? Let's chat! We love helping founders turn their vision into a working MVP. 
            Free consultation, no strings attached - just honest advice about your startup journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-brand-purple flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Tell Us About Your Startup</h3>
                      <p className="text-muted-foreground">
                        Share your idea and we'll help you build an MVP that validates your concept.
                      </p>
                    </div>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input 
                        placeholder="John Doe" 
                        className="bg-input border-border focus:border-brand-purple"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input 
                        type="email" 
                        placeholder="john@company.com" 
                        className="bg-input border-border focus:border-brand-purple"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Startup Name *</label>
                      <Input 
                        placeholder="Your Startup Name" 
                        className="bg-input border-border focus:border-brand-purple"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        className="bg-input border-border focus:border-brand-purple"
                      />
                    </div>
                  </div>
                  
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">What's your startup idea? *</label>
                      <Input 
                        placeholder="e.g., Marketplace for local services, AI-powered fitness app, SaaS tool for small businesses" 
                        className="bg-input border-border focus:border-brand-purple"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Tell us about your idea *</label>
                      <Textarea 
                        placeholder="What's your vision? What problem are you solving? What features do you need? Any timeline considerations?"
                        className="min-h-[140px] bg-input border-border focus:border-brand-purple"
                      />
                    </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Budget Range (optional)</label>
                      <Input 
                        placeholder="e.g., $10k - $50k, $50k - $100k, or let's discuss" 
                        className="bg-input border-border focus:border-brand-purple"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Timeline</label>
                      <Input 
                        placeholder="e.g., 2-3 months, 6 months, or no rush" 
                        className="bg-input border-border focus:border-brand-purple"
                      />
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full group bg-brand-navy hover:bg-brand-navy/90 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                    <Award className="mr-2 w-5 h-5" />
                    Send Startup Details
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-0 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Direct Contact</h3>
                  <p className="text-muted-foreground">
                    Prefer direct communication? Reach out through your preferred channel.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all">
                    <Mail className="mr-3 w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">Email</div>
                      <div className="text-xs text-muted-foreground">hello@anta.dev</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                    <Phone className="mr-3 w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">Phone</div>
                      <div className="text-xs text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all">
                    <MessageCircle className="mr-3 w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">Business Chat</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                    <Calendar className="mr-3 w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">Schedule Call</div>
                      <div className="text-xs text-muted-foreground">30-min consultation</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Guarantees */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">What to Expect</h3>
                    <p className="text-sm text-muted-foreground">Our commitment to you</p>
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
                      <div className="font-medium text-sm">Free Chat</div>
                      <div className="text-xs text-muted-foreground">No pressure, just helpful advice</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-navy/5 border border-brand-navy/10">
                    <Users className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Personal Attention</div>
                      <div className="text-xs text-muted-foreground">We work directly with you</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;