import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inscripcion" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560963614-153d4432f741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cnklMjBidXNpbmVzc3xlbnwxfHx8fDE3NzA3MzM0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Bakery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            Cocinar bien es solo el comienzo.
            <br />
            <span className="text-orange-500">Aquí aprendes a crear empresa.</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            No dejes que tu talento gastronómico se pierda por falta de estructura empresarial. Es momento de profesionalizar tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contacto')}
              className="group bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-lg transition-all flex items-center justify-center gap-2 text-lg shadow-xl"
            >
              Inscríbete ahora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
            <button 
              onClick={() => scrollToSection('programa')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-5 rounded-lg transition-all text-lg"
            >
              Conocer más del programa
            </button>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl mb-2 text-orange-500">680+</div>
              <div className="text-gray-300">Horas de formación</div>
            </div>
            <div>
              <div className="text-4xl mb-2 text-orange-500">10</div>
              <div className="text-gray-300">Módulos especializados</div>
            </div>
            <div>
              <div className="text-4xl mb-2 text-orange-500">100%</div>
              <div className="text-gray-300">Enfoque empresarial</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
