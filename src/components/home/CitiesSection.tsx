import { motion } from "motion/react";
import { MapPin, Landmark, UtensilsCrossed, Globe } from "lucide-react";

export function CitiesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
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
            El primer corredor internacional de formación, innovación y hospitalidad de América Latina
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                <MapPin className="text-white" size={30} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl text-gray-900 font-display">
                  Popayán
                </h3>
                <p className="text-orange-600 text-sm tracking-wider uppercase">
                  Colombia
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <Landmark className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <span>Ciudad Creativa UNESCO de Gastronomía desde 2005</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <UtensilsCrossed className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <span>Gastronomía ancestral indígena, afrodescendiente y colonial</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Globe className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <span>Alta biodiversidad gastronómica y patrimonio culinario reconocido</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                <MapPin className="text-white" size={30} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl text-gray-900 font-display">
                  Puebla
                </h3>
                <p className="text-orange-600 text-sm tracking-wider uppercase">
                  México
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <Landmark className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <span>Cocina Tradicional Mexicana, Patrimonio Cultural Inmaterial UNESCO 2010</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <UtensilsCrossed className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <span>Referente internacional de gastronomía con universidades de prestigio mundial</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Globe className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <span>Red empresarial consolidada y modelos exitosos de desarrollo turístico</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
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
