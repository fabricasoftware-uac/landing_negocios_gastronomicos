import { motion } from "motion/react";
import { Landmark } from "lucide-react";

const allies = [
  {
    logo: "/uniautonoma.png",
    name: "Uniautónoma del Cauca",
    description: "Liderazgo académico, certificación y formación",
  },
  {
    logo: "/mentes_brillantes.png",
    name: "Club Mentes Brillantes",
    description: "Internacionalización, formación especializada y articulación empresarial",
  },
  {
    logo: "/mundo_mujer.webp",
    name: "Banco Mundo Mujer",
    description: "Fortalecimiento empresarial, educación financiera y apoyo al emprendimiento",
  },
];

export function AlliesSection() {
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
            Aliados Estratégicos
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Instituciones comprometidas con el desarrollo del ecosistema gastronómico y turístico
          </p>
        </motion.div>

        {/* 3-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {allies.map((ally, index) => {
            const Icon = "icon" in ally ? ally.icon : null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="flex items-center justify-center mb-6">
                    <img
                      src={ally.logo}
                      alt={ally.name}
                      className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <h3 className="text-lg text-gray-900 mb-3 font-display">
                  {ally.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {ally.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Corporación Gastronómica de Popayán - standalone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 text-center group">
            <img
              src="/corpo_gastronomica.png"
              alt="Corporación Gastronómica de Popayán"
              className="h-32 w-auto object-contain mx-auto group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-lg text-gray-900 mb-3 font-display">
              Corporación Gastronómica de Popayán
                </h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-6">
              Conexión con el sector productivo gastronómico
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
