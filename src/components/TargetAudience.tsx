import { motion } from 'motion/react';
import { Store, Coffee, Cake, Package, ChefHat, GraduationCap } from 'lucide-react';

const audiences = [
  {
    icon: Store,
    title: 'Emprendedores Gastronómicos',
    description: 'Con idea de negocio o proyecto en desarrollo'
  },
  {
    icon: Coffee,
    title: 'Restaurantes y Cafés',
    description: 'Propietarios que buscan profesionalizar su operación'
  },
  {
    icon: Cake,
    title: 'Panaderías y Reposterías',
    description: 'Negocios que quieren escalar y crecer'
  },
  {
    icon: Package,
    title: 'Marcas de Alimentos',
    description: 'Productores que buscan estructura comercial'
  },
  {
    icon: ChefHat,
    title: 'Cocinas Ocultas',
    description: 'Dark kitchens y ghost restaurants emergentes'
  },
  {
    icon: GraduationCap,
    title: 'Egresados de Gastronomía',
    description: 'Profesionales que quieren emprender'
  }
];

export function TargetAudience() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            ¿Para quién es este programa?
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñado para emprendedores y empresarios del sector gastronómico que quieren construir negocios rentables y sostenibles
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">
                  {audience.title}
                </h3>
                <p className="text-gray-600">
                  {audience.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
