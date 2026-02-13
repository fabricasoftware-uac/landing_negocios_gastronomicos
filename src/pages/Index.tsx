import { Header } from "../components/Header";
import { AboutProgram } from "../components/AboutProgram";
import { Benefits } from "../components/Benefits";
import { Curriculum } from "../components/Curriculum";
import { Differentiators } from "../components/Differentiators";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { StrategicPartner } from "../components/StrategicPartner";
import { TargetAudience } from "../components/TargetAudience";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutProgram />
      <TargetAudience />
      <StrategicPartner />
      <Differentiators />
      <Curriculum />
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
