import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroMain } from "../components/home/HeroMain";
import { ImpactSection } from "../components/home/ImpactSection";
import { CitiesSection } from "../components/home/CitiesSection";
import { EcosystemSection } from "../components/home/EcosystemSection";
import { ProgramsSection } from "../components/home/ProgramsSection";
import { AlliesSection } from "../components/home/AlliesSection";
import { FinalCTAMain } from "../components/home/FinalCTAMain";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroMain />
      <ImpactSection />
      <CitiesSection />
      <EcosystemSection />
      <ProgramsSection />
      <AlliesSection />
      <FinalCTAMain />
      <Footer />
    </div>
  );
};

export default HomePage;
