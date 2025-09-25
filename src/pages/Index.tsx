import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index page is loading...");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
