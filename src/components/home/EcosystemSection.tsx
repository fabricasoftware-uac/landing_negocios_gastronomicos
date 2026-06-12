import { motion } from "motion/react";
import { Users, Lightbulb, Building2, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const actors = [
  {
    icon: GraduationCap,
    title: "Estudiantes",
    description: "Formación especializada, certificaciones internacionales y oportunidades de movilidad académica",
    link: "/movimiento",
  },
  {
    icon: Lightbulb,
    title: "Emprendedores",
    description: "Mentorías, fortalecimiento empresarial, desarrollo de marca e internacionalización",
    link: "/movimiento",
  },
  {
    icon: Building2,
    title: "Empresas",
    description: "Certificación de calidad, visibilidad, diferenciación competitiva y acceso a redes",
    link: "/movimiento",
  },
  {
    icon: Users,
    title: "Instituciones",
    description: "Cooperación académica, articulación empresarial y desarrollo del ecosistema",
    link: "/movimiento",
  },
];

export function EcosystemSection() {
  const navigate = useNavigate();

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
            Un Ecosistema que Conecta
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Formamos una red de talento, empresas e instituciones comprometidas con la excelencia
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {actors.map((actor, index) => {
            const Icon = actor.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => navigate(actor.link)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(actor.link);
                  }
                }}
              >
                <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-orange-200">
                    <Icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-4 font-display">
                    {actor.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {actor.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-orange-600 font-medium group-hover:gap-2 transition-all">
                    Conocer más
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
