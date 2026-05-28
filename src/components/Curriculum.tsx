import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { ModuloCard } from "./ModuloCard";
import type { ModuloSemestral } from "@/types/curriculum";

interface CurriculumProps {
  modulos?: ModuloSemestral[];
}

export function Curriculum({ modulos = [] }: CurriculumProps) {
  if (!modulos || modulos.length === 0) {
    return null;
  }

  const totalHours = modulos.reduce(
    (sum, m) => sum + (m.fields.totalDeHoras || 0),
    0,
  );

  const totalCursos = modulos.reduce(
    (sum, m) => sum + (m.fields.cursosAsociados?.length || 0),
    0,
  );

  return (
    <section
      id="malla"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Malla Académica
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {modulos.length} módulos diseñados para construir tu empresa
            gastronómica desde cero
          </p>
          <div className="flex items-center justify-center gap-2 text-orange-600">
            <Clock size={24} />
            <span className="text-xl">
              +{totalHours} horas totales &bull; {totalCursos} cursos
            </span>
          </div>
        </motion.div>

        <div className="grid gap-5 md:gap-6">
          {modulos.map((modulo, index) => (
            <ModuloCard key={modulo.sys.id} modulo={modulo} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center shadow-xl"
        >
          <h3 className="text-2xl mb-4 font-semibold">
            Enfoque 100% aplicado al negocio real
          </h3>
          <p className="text-orange-100 text-lg">
            Cada módulo incluye ejercicios prácticos aplicados directamente a tu
            proyecto empresarial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
