import { motion } from "motion/react";
import { BookOpen, Award, MapPin, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    icon: BookOpen,
    title: "Técnico Laboral",
    subtitle: "Gestión del Emprendimiento Gastronómico",
    description: "Forma emprendedores capaces de crear negocios sostenibles, liderar experiencias memorables e innovar en productos y servicios.",
    link: "/movimiento",
    highlight: "Programa binacional Popayán–Puebla",
  },
  {
    icon: Award,
    title: "Certificación",
    subtitle: "Sello El Gran Anfitrión",
    description: "Reconocimiento a establecimientos y profesionales que demuestran excelencia en hospitalidad, servicio y experiencia del cliente.",
    link: "/movimiento",
    highlight: "Tres niveles de reconocimiento",
  },
  {
    icon: MapPin,
    title: "Ruta El Gran Anfitrión",
    subtitle: "Directorio de excelencia",
    description: "Red de establecimientos evaluados con altos estándares de calidad, servicio y autenticidad.",
    link: "/movimiento",
    highlight: "Georreferenciación en Google Maps",
  },
  {
    icon: Trophy,
    title: "Premios",
    subtitle: "Gala anual de reconocimiento",
    description: "Reconocimiento a personas, empresas e instituciones que elevan la calidad del servicio y la identidad gastronómica.",
    link: "/movimiento",
    highlight: "10 categorías de premiación",
  },
];

export function ProgramsSection() {
  const navigate = useNavigate();

  return (
    <section id="programas" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 font-display">
            Nuestros Beneficios
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una plataforma integral de formación, certificación y reconocimiento para el sector gastronómico
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 p-8 md:p-10 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(program.link)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(program.link);
                  }
                }}
              >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-5">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-orange-200">
                  <Icon className="text-white" size={30} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {program.highlight}
                  </span>
                  <h3 className="text-xl md:text-2xl text-gray-900 mb-1 font-display">
                    {program.title}
                  </h3>
                  <p className="text-orange-600 text-sm mb-3">
                    {program.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
