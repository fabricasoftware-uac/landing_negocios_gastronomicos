import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export function AboutProgram() {
  return (
    <section id="programa" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            ¿De qué trata este programa?
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/enrique_gastronomico.png" 
              alt="Business owner" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              Este programa está diseñado específicamente para transformar ideas gastronómicas en negocios rentables y sostenibles. Aquí aprenderás a estructurar, organizar y hacer crecer tu empresa desde una perspectiva estratégica.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">
                  <strong>No enseña recetas</strong> ni técnicas culinarias tradicionales
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">
                  <strong>Enseña a organizar y hacer crecer</strong> negocios gastronómicos con estructura empresarial
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">
                  <strong>Pensado para quienes ya tienen o quieren crear empresa</strong> en el sector de alimentos
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">
                  <strong>Enfoque 100% aplicado</strong> a la realidad del negocio gastronómico
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
