import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import StartProject from "@/components/StartProject";
import Footer from "@/components/Footer";

const StartProjectPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-4">
        {/* StartProject Component */}
        <StartProject />
      </main>
      
      <Footer />
    </div>
  );
};

export default StartProjectPage;
