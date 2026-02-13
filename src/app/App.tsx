import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutProgram } from './components/AboutProgram';
import { TargetAudience } from './components/TargetAudience';
import { StrategicPartner } from './components/StrategicPartner';
import { Differentiators } from './components/Differentiators';
import { Curriculum } from './components/Curriculum';
import { Benefits } from './components/Benefits';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
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
}
