import { motion } from "motion/react";
import { Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export interface ModuloFields {
  nombre: string;
  horas: number;
  competencias: string[];
  evidencia?: string;
}

export interface Modulo {
  fields: ModuloFields;
}

export interface CurriculumProps {
  modulos?: Modulo[];
}

export function Curriculum({ modulos = [] }: CurriculumProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  // Validación: si no hay módulos, no renderiza la sección
  if (!modulos || modulos.length === 0) {
    return null;
  }

  const totalHours = modulos.reduce(
    (sum, modulo) => sum + (modulo.fields.horas || 0),
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
              +380 horas totales • Modalidad teórico-práctica
            </span>
          </div>
        </motion.div>

        <div className="grid gap-4 md:gap-6">
          {modulos.map((modulo, index) => {
            const { nombre, horas, competencias, evidencia } = modulo.fields;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={() =>
                    setExpandedModule(expandedModule === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-xl text-gray-900 mb-3 font-semibold">
                          {nombre}
                        </h3>
                        <div className="inline-flex items-center gap-2 text-white bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          <Clock size={14} />
                          <span>{horas} horas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-orange-600 text-3xl font-light leading-none">
                    {expandedModule === index ? "−" : "+"}
                  </div>
                </button>

                {expandedModule === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-gray-200"
                  >
                    <div className="pt-6 space-y-6 lg:pl-16">
                      <div>
                        <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-bold">
                          Competencias desarrolladas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {competencias?.map((competencia, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200 shadow-sm"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-green-600"
                              />
                              {competencia}
                            </span>
                          ))}
                        </div>
                      </div>

                      {evidencia && (
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                          <h4 className="text-sm text-orange-900 uppercase tracking-wider mb-2 font-bold">
                            Evidencia final
                          </h4>
                          <p className="text-orange-800">{evidencia}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
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
