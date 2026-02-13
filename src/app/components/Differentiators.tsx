import { motion } from 'motion/react';
import { Rocket, BookOpen, Award, Briefcase, Users } from 'lucide-react';

const differentiators = [
  {
    icon: Rocket,
    title: 'Aceleración en Emprendelab',
    description: 'Programa de acompañamiento para impulsar tu negocio con metodologías probadas'
  },
  {
    icon: BookOpen,
    title: 'Cursos complementarios incluidos',
    description: 'Formación adicional en áreas clave sin costo adicional'
  },
  {
    icon: Award,
    title: 'Certificación en Servicio al Cliente',
    description: 'Diploma adicional que fortalece tu perfil profesional'
  },
  {
    icon: Briefcase,
    title: 'Prácticas en negocios reales',
    description: 'Experiencia directa en empresas gastronómicas operando'
  },
  {
    icon: Users,
    title: 'Conexiones estratégicas',
    description: 'Red de contactos en el sector gastronómico regional y nacional'
  }
];

export function Differentiators() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            ¿Qué hace diferente este programa?
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que formación académica, es un ecosistema completo para construir tu empresa gastronómica
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-lg mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
