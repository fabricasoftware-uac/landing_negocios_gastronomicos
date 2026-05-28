import { motion } from 'motion/react'
import { Clock, BookOpen } from 'lucide-react'
import { CursoDetail } from './CursoDetail'
import type { ModuloSemestral } from '@/types/curriculum'

interface ModuloCardProps {
  modulo: ModuloSemestral
  index: number
}

const gradients = [
  'from-orange-600 to-orange-500',
  'from-amber-600 to-amber-500',
  'from-rose-600 to-rose-500',
  'from-violet-600 to-violet-500',
  'from-emerald-600 to-emerald-500',
  'from-blue-600 to-blue-500',
]

export function ModuloCard({ modulo, index }: ModuloCardProps) {
  const { nombreDelModulo, totalDeHoras, descripcionDelSemestre, cursosAsociados: cursos } =
    modulo.fields
  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
    >
      <div className={`bg-gradient-to-r ${gradient} p-5 text-white`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="flex-shrink-0 w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg backdrop-blur-sm">
            {index + 1}
          </span>
          <h3 className="text-lg font-bold leading-tight">{nombreDelModulo}</h3>
        </div>
        <div className="flex gap-3 text-sm text-white/80 ml-12">
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            {totalDeHoras}h
          </span>
          <span className="inline-flex items-center gap-1">
            <BookOpen size={14} />
            {cursos?.length || 0} cursos
          </span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {descripcionDelSemestre}
        </p>

        {cursos && cursos.length > 0 && (
          <div className="grid grid-cols-1 gap-2 mt-auto">
            {cursos.map((curso, i) => (
              <CursoDetail key={`${curso.sys?.id || ''}-${i}`} curso={curso} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
