import { motion } from 'motion/react'
import { ChevronDown, Sparkles, Clock } from 'lucide-react'
import { useState } from 'react'
import type { Curso } from '@/types/curriculum'

interface CursoDetailProps {
  curso: Curso
  index: number
  total: number
}

export function CursoDetail({ curso, index, total }: CursoDetailProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { nombreDelCurso, queAprenderas, actividadDestacada } = curso.fields

  return (
    <div className="relative pl-10">
      {index < total - 1 && (
        <div className="absolute left-[15px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 to-orange-100" />
      )}

      <div className="absolute left-[7px] top-[6px]">
        <div className={`w-[18px] h-[18px] rounded-full border-[3px] border-orange-600 bg-white flex items-center justify-center transition-colors ${isOpen ? 'bg-orange-600' : ''}`}>
          <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isOpen ? 'bg-white' : 'bg-orange-600'}`} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left group"
        >
          <div className="flex items-center justify-between gap-2 px-3 py-2.5">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {nombreDelCurso}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Clock size={13} className="text-gray-400" />
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-3 pb-3 pt-0 space-y-2"
          >
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={12} className="text-orange-500" />
              Aprenderás
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {queAprenderas}
            </p>
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
              <p className="text-sm font-semibold text-orange-700 mb-0.5">
                Actividad destacada
              </p>
              <p className="text-sm text-orange-800 leading-relaxed">
                {actividadDestacada}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
