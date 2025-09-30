import Header from "@/components/Header";
import StartProject from "@/components/StartProject";
import Footer from "@/components/Footer";

export default function StartProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <StartProject />
      </main>
      <Footer />
    </div>
  );
}

