import { motion } from 'motion/react'
import { Clock, ChevronDown, BookOpen } from 'lucide-react'
import { useState } from 'react'
import { CursoDetail } from './CursoDetail'
import type { ModuloSemestral } from '@/types/curriculum'

interface ModuloCardProps {
  modulo: ModuloSemestral
  index: number
}

export function ModuloCard({ modulo, index }: ModuloCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { nombreDelModulo, totalDeHoras, descripcionDelSemestre, cursosAsociados: cursos } =
    modulo.fields

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
            {index + 1}
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {nombreDelModulo}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 bg-gray-800 text-white px-3 py-1 rounded-full font-medium">
                <Clock size={14} />
                {totalDeHoras} horas
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-500">
                <BookOpen size={14} />
                {cursos?.length || 0} cursos
              </span>
            </div>
          </div>
        </div>
        <div
          className={`flex-shrink-0 mt-2 text-orange-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <ChevronDown size={24} />
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-gray-100">
          <div className="px-6 pt-4 pb-2">
            <p className="text-gray-600 leading-relaxed">
              {descripcionDelSemestre}
            </p>
          </div>

          {cursos && cursos.length > 0 && (
            <div className="px-6 pb-6 space-y-3">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider pt-2">
                Cursos del módulo
              </h4>
              {cursos.map((curso, i) => (
                <CursoDetail key={curso.sys.id} curso={curso} index={i} />
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}
