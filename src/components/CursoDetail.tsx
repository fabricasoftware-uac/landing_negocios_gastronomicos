import { motion } from 'motion/react'
import { ChevronDown, Sparkles, BookOpen } from 'lucide-react'
import { useState } from 'react'
import type { Curso } from '@/types/curriculum'

interface CursoDetailProps {
  curso: Curso
}

export function CursoDetail({ curso }: CursoDetailProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { nombreDelCurso, queAprenderas, actividadDestacada } = curso.fields

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 text-left flex items-center justify-between gap-2"
      >
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen size={14} className="text-orange-600 flex-shrink-0" />
          <span className="text-sm font-medium text-gray-900 truncate">
            {nombreDelCurso}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-gray-200 px-3 pb-3 pt-2 space-y-2"
        >
          <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={11} />
              Qué aprenderás
            </h5>
            <p className="text-xs text-gray-700 leading-relaxed mt-0.5">
              {queAprenderas}
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-2.5">
            <h5 className="text-xs font-bold text-orange-700 uppercase tracking-wider">
              Actividad destacada
            </h5>
            <p className="text-xs text-orange-800 leading-relaxed mt-0.5">
              {actividadDestacada}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
