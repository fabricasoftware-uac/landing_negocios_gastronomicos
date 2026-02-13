import { motion } from 'motion/react';
import { Building2, Users, Briefcase, Network } from 'lucide-react';

const benefits = [
  {
    icon: Network,
    title: 'Conexión con el sector real',
    description: 'Acceso directo al ecosistema gastronómico de Popayán'
  },
  {
    icon: Users,
    title: 'Mentorías con empresarios',
    description: 'Acompañamiento de líderes del sector con experiencia comprobada'
  },
  {
    icon: Briefcase,
    title: 'Prácticas reales',
    description: 'Experiencia práctica en negocios gastronómicos operando'
  },
  {
    icon: Building2,
    title: 'Ecosistema gastronómico',
    description: 'Networking y oportunidades de colaboración estratégica'
  }
];

export function StrategicPartner() {
  return (
    <section className="py-20 md:py-32 bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Aliado Estratégico
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl mb-4">
              Corporación Gastronómica de Popayán
            </h3>
            <p className="text-lg text-orange-100">
              Trabajamos de la mano con la principal organización del sector gastronómico en la región, garantizando conexión real con la industria
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl mb-3">
                  {benefit.title}
                </h3>
                <p className="text-orange-100">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
