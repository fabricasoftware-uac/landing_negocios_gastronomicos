import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Target, Sparkles, Building2, HandHelping } from 'lucide-react';

const benefits = [
  {
    icon: Building2,
    title: 'Negocio organizado',
    description: 'Estructura empresarial clara con procesos estandarizados y flujos de trabajo eficientes'
  },
  {
    icon: DollarSign,
    title: 'Costos claros',
    description: 'Control financiero total, conociendo tus números y tomando decisiones basadas en datos'
  },
  {
    icon: Target,
    title: 'Estrategia de ventas',
    description: 'Plan comercial estructurado con canales de venta definidos y metas alcanzables'
  },
  {
    icon: Sparkles,
    title: 'Marca sólida',
    description: 'Identidad diferenciada en el mercado con posicionamiento claro y propuesta de valor única'
  },
  {
    icon: TrendingUp,
    title: 'Empresa lista para crecer',
    description: 'Base sólida para escalar tu negocio de manera sostenible y rentable'
  },
  {
    icon: HandHelping,
    title: 'Acompañamiento desde Emprendelab',
    description: 'Mentorías continuas y red de apoyo para implementar lo aprendido'
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Beneficios para el participante
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Al finalizar el programa, tendrás las herramientas y conocimientos para transformar tu idea en un negocio rentable
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <img 
              src="https://images.unsplash.com/photo-1611653682161-f58ba65ead46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcwNzAyMTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Modern cafe" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl text-gray-900">
              Tu negocio gastronómico merece una base sólida
            </h3>
            <p className="text-lg text-gray-700">
              No basta con tener buenas recetas. Para construir una empresa gastronómica exitosa necesitas estructura, estrategia y acompañamiento profesional.
            </p>
            <p className="text-lg text-gray-700">
              Este programa te da las herramientas que la mayoría de emprendedores aprenden por ensayo y error, ahorrándote tiempo y recursos valiosos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
