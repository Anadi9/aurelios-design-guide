import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something
            <br />
            <span className="bg-gradient-rainbow bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into powerful web applications? 
            Let's discuss your project and explore the possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Start Your Project</h3>
                  <p className="text-muted-foreground">
                    Tell me about your vision and I'll help bring it to life with cutting-edge technology.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type</label>
                    <Input placeholder="e.g., E-commerce with AI chatbot, Data analytics dashboard" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Details</label>
                    <Textarea 
                      placeholder="Describe your project goals, timeline, and any specific requirements..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full group">
                    Send Project Details
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Quick Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer a direct approach? Reach out through your preferred channel.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-3 w-4 h-4" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-3 w-4 h-4" />
                    WhatsApp Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-3 w-4 h-4" />
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-gradient-rainbow border-[1px]">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-lg font-semibold">Fast Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to project inquiries within 24 hours. 
                  For urgent projects, feel free to mention it in your message.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>✓ Free consultation call</div>
                  <div>✓ Project scope & timeline</div>
                  <div>✓ Transparent pricing</div>
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