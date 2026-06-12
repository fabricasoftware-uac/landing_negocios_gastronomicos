import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroMain() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmclMjBwcm9mZXNzaW9uYWwlMjBraXRjaGVufGVufDF8fHx8MTc3MDczMzQzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="El Gran Anfitrión"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-orange-500 text-lg md:text-xl tracking-[0.3em] uppercase mb-4 font-display">
            De Popayán para el mundo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-display mb-6 leading-tight">
            EL GRAN
            <br />
            <span className="text-orange-500">ANFITRIÓN</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-xl md:text-3xl text-gray-200 font-light italic mb-10 max-w-2xl mx-auto">
            El arte de sentirse bienvenido
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => navigate("/movimiento")}
            className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-all flex items-center gap-2 text-lg shadow-xl shadow-orange-600/25"
          >
            Conocer el Movimiento
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={() => scrollToSection("programas")}
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 px-8 py-4 rounded-lg transition-all flex items-center gap-2 text-lg"
          >
            Explorar la Ruta
            <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("impacto")}
            className="text-white/60 hover:text-orange-500 transition-colors animate-bounce"
            aria-label="Desplazar hacia abajo"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
