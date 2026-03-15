import { useState, useEffect } from "react";
import { contentfulClient } from "../lib/contentful";
import { Header } from "../components/Header";
import { AboutProgram } from "../components/AboutProgram";
import { Benefits } from "../components/Benefits";
import { Curriculum, Modulo } from "../components/Curriculum";
import { Differentiators } from "../components/Differentiators";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { StrategicPartner } from "../components/StrategicPartner";
import { TargetAudience } from "../components/TargetAudience";

const Index = () => {
  const [modulos, setModulos] = useState<Modulo[]>([]);

  useEffect(() => {
    if (import.meta.env.VITE_CONTENTFUL_SPACE_ID) {
      contentfulClient
        .getEntries({ content_type: "moduloCurriculum" })
        .then((response) => {
          setModulos(response.items as any as Modulo[]);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutProgram />
      <TargetAudience />
      <StrategicPartner />
      <Differentiators />
      <Curriculum modulos={modulos} />
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
