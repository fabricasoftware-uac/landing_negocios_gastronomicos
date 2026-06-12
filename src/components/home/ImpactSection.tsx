import { motion } from "motion/react";
import { GraduationCap, Award, Globe2 } from "lucide-react";

const impacts = [
  {
    icon: GraduationCap,
    title: "Formación",
    items: ["Programas académicos", "Experiencias de aprendizaje", "Competencias sectoriales"],
  },
  {
    icon: Award,
    title: "Certificación",
    items: ["Sello de calidad", "Reconocimiento a la excelencia", "Estándares de servicio"],
  },
  {
    icon: Globe2,
    title: "Internacionalización",
    items: ["Corredor Popayán–Puebla", "Misiones académicas", "Conexión empresarial"],
  },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 font-display">
            Tres pilares que transforman
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un ecosistema integral para elevar los estándares de la gastronomía, el turismo y la hospitalidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-orange-200">
                  <Icon className="text-white" size={36} />
                </div>

                <h3 className="text-2xl text-gray-900 mb-6 font-display">
                  {impact.title}
                </h3>

                <ul className="space-y-3">
                  {impact.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
