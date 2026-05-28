import { motion } from 'motion/react'
import { BookOpen, Sparkles } from 'lucide-react'
import type { Curso } from '@/types/curriculum'

interface CursoDetailProps {
  curso: Curso
  index: number
}

export function CursoDetail({ curso, index }: CursoDetailProps) {
  const { nombreDelCurso, queAprenderas, actividadDestacada } = curso.fields

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <BookOpen size={16} className="text-orange-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 pt-0.5">
            {nombreDelCurso}
          </h4>
        </div>

        <div className="ml-11 space-y-3">
          <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles size={12} />
              Qué aprenderás
            </h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              {queAprenderas}
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
            <h5 className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-1">
              Actividad destacada
            </h5>
            <p className="text-sm text-orange-800 leading-relaxed">
              {actividadDestacada}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
