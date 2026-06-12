import { motion } from "motion/react";
import { Building2, Lightbulb, UtensilsCrossed, Landmark } from "lucide-react";

const allies = [
  {
    icon: Building2,
    name: "Uniautónoma del Cauca",
    description: "Liderazgo académico, certificación y formación",
  },
  {
    icon: Lightbulb,
    name: "Club Mentes Brillantes",
    description: "Internacionalización, formación especializada y articulación empresarial",
  },
  {
    icon: UtensilsCrossed,
    name: "Corporación Gastronómica de Popayán",
    description: "Conexión con el sector productivo gastronómico",
  },
  {
    icon: Landmark,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {allies.map((ally, index) => {
            const Icon = ally.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="w-18 h-18 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-orange-200">
                  <Icon className="text-white" size={32} />
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
      </div>
    </section>
  );
}
