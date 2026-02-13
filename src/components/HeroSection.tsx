import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmclMjBwcm9mZXNzaW9uYWwlMjBraXRjaGVufGVufDF8fHx8MTc3MDczMzQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Kitchen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">Técnico Laboral por Competencias en <span className="text-orange-500">Gestión de Negocios Gastronómicos</span></h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Programa de pensamiento estratégico para emprendedores y empresarios del sector gastronómico
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-orange-600/20 border-l-4 border-orange-500 p-6 mb-10 backdrop-blur-sm"
          >
            <p className="text-xl md:text-2xl text-white italic">
              "Muchos enseñan a cocinar. Aquí te enseñamos a construir empresa gastronómica."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => scrollToSection('programa')}
              className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              Conoce el programa
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Habla con un asesor
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}