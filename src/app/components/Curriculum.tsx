import { motion } from 'motion/react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    name: 'Fundamentos de Gestión Empresarial',
    hours: 80,
    competencies: ['Estructura organizacional', 'Planeación estratégica', 'Análisis de mercado'],
    evidence: 'Plan de negocio inicial'
  },
  {
    name: 'Costos y Finanzas para Restaurantes',
    hours: 72,
    competencies: ['Cálculo de costos', 'Pricing estratégico', 'Estados financieros básicos'],
    evidence: 'Modelo de costos operacional'
  },
  {
    name: 'Marketing y Posicionamiento de Marca',
    hours: 64,
    competencies: ['Identidad de marca', 'Marketing digital', 'Estrategias de posicionamiento'],
    evidence: 'Plan de marketing 360°'
  },
  {
    name: 'Gestión de Operaciones Gastronómicas',
    hours: 88,
    competencies: ['Estandarización de procesos', 'Control de calidad', 'Logística operativa'],
    evidence: 'Manual de operaciones'
  },
  {
    name: 'Servicio al Cliente y Experiencia',
    hours: 56,
    competencies: ['Protocolos de servicio', 'Gestión de experiencias', 'Fidelización'],
    evidence: 'Manual de servicio'
  },
  {
    name: 'Gestión de Talento Humano',
    hours: 48,
    competencies: ['Selección de personal', 'Capacitación de equipos', 'Cultura organizacional'],
    evidence: 'Plan de gestión de talento'
  },
  {
    name: 'Innovación y Desarrollo de Producto',
    hours: 60,
    competencies: ['Tendencias gastronómicas', 'Desarrollo de menú', 'Innovación comercial'],
    evidence: 'Propuesta de innovación'
  },
  {
    name: 'Ventas y Estrategia Comercial',
    hours: 52,
    competencies: ['Canales de venta', 'Negociación comercial', 'Estrategias de crecimiento'],
    evidence: 'Plan comercial'
  },
  {
    name: 'Normatividad y Buenas Prácticas',
    hours: 40,
    competencies: ['BPM', 'Legislación sanitaria', 'Permisos y licencias'],
    evidence: 'Plan de cumplimiento normativo'
  },
  {
    name: 'Proyecto Final Integrador',
    hours: 120,
    competencies: ['Aplicación integral', 'Presentación ejecutiva', 'Plan de implementación'],
    evidence: 'Proyecto empresarial completo'
  }
];

export function Curriculum() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const totalHours = modules.reduce((sum, module) => sum + module.hours, 0);

  return (
    <section id="malla" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
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
            {modules.length} módulos diseñados para construir tu empresa gastronómica desde cero
          </p>
          <div className="flex items-center justify-center gap-2 text-orange-600">
            <Clock size={24} />
            <span className="text-xl">{totalHours} horas totales • Modalidad teórico-práctica</span>
          </div>
        </motion.div>

        <div className="grid gap-4 md:gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <button
                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-gray-900 mb-2">
                        {module.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} />
                        <span>{module.hours} horas</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-orange-600">
                  {expandedModule === index ? '−' : '+'}
                </div>
              </button>

              {expandedModule === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 border-t border-gray-200"
                >
                  <div className="pt-6 space-y-4">
                    <div>
                      <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-3">
                        Competencias desarrolladas
                      </h4>
                      <ul className="space-y-2">
                        {module.competencies.map((competency, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-gray-700">{competency}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="text-sm text-orange-900 uppercase tracking-wide mb-2">
                        Evidencia final
                      </h4>
                      <p className="text-orange-800">{module.evidence}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl mb-4">Enfoque 100% aplicado al negocio real</h3>
          <p className="text-orange-100 text-lg">
            Cada módulo incluye ejercicios prácticos aplicados directamente a tu proyecto empresarial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
