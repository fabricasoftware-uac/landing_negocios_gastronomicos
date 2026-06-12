import { motion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function FinalCTAMain() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzA3MzM0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Experiencia gastronómica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-10 border border-white/20">
            <Users className="text-orange-500" size={20} />
            <span className="text-white/80 text-sm tracking-wider uppercase">
              Forma parte del cambio
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-display leading-tight">
            Únete al
            <br />
            <span className="text-orange-500">Movimiento</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light">
            Aprende. Certifícate. Conéctate. Crece.
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
            Forma parte de la nueva generación de líderes que transforman la gastronomía, el turismo y la hospitalidad en América Latina.
          </p>

          <button
            onClick={() => navigate("/movimiento")}
            className="group bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-lg transition-all inline-flex items-center gap-3 text-lg shadow-2xl shadow-orange-600/30"
          >
            Únete al Movimiento
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>

          <div className="mt-12">
            <p className="text-white/90 text-xl italic font-light">
              El Gran Anfitrión
            </p>
            <p className="text-orange-400 text-lg italic">
              El arte de sentirse bienvenido
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
