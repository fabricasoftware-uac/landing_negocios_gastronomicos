import { motion } from "motion/react";
import { MapPin, Landmark, UtensilsCrossed, Globe } from "lucide-react";

export function CitiesSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 font-display">
            Dos Ciudades Unidas por la Gastronomía
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El primer corredor internacional de formación, innovación y
            hospitalidad de América Latina
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Popayán */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl overflow-hidden min-h-[420px] md:min-h-[480px]"
          >
            <img
              src="/popayan.webp"
              alt="Popayán, Colombia"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-orange-500/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <MapPin className="text-white" size={26} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl text-white font-display">
                    Popayán
                  </h3>
                  <p className="text-orange-400 text-sm tracking-[0.2em] uppercase">
                    Colombia
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/90">
                  <Landmark className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                  <span>Ciudad Creativa UNESCO de Gastronomía desde 2005</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <UtensilsCrossed className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                  <span>Gastronomía ancestral indígena, afrodescendiente y colonial</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <Globe className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                  <span>Alta biodiversidad gastronómica y patrimonio culinario reconocido</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Puebla */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group relative rounded-2xl overflow-hidden min-h-[420px] md:min-h-[480px]"
          >
            <img
              src="/puebla.webp"
              alt="Puebla, México"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-orange-500/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <MapPin className="text-white" size={26} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl text-white font-display">
                    Puebla
                  </h3>
                  <p className="text-orange-400 text-sm tracking-[0.2em] uppercase">
                    México
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/90">
                  <Landmark className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                  <span>Cocina Tradicional Mexicana, Patrimonio Cultural Inmaterial UNESCO 2010</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <UtensilsCrossed className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                  <span>Referente internacional de gastronomía con universidades de prestigio mundial</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <Globe className="text-orange-400 flex-shrink-0 mt-0.5" size={18} />
                  <span>Red empresarial consolidada y modelos exitosos de desarrollo turístico</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-2xl shadow-xl">
            <Globe size={24} />
            <span className="text-lg font-display">
              Primer corredor internacional de hospitalidad de América Latina
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
