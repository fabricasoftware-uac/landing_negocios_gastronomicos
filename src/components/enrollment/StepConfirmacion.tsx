import { motion } from 'motion/react';
import { Edit2 } from 'lucide-react';
import type { DatosPersonales } from './StepDatosPersonales';

interface Props {
  data: DatosPersonales;
  onEdit: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export function StepConfirmacion({ data, onEdit, onConfirm, isLoading }: Props) {
  const fields = [
    { label: 'Nombre completo', value: data.nombreCompleto },
    { label: 'Documento', value: data.documento },
    { label: 'Email', value: data.email },
    { label: 'Teléfono', value: data.telefono },
    { label: 'Ciudad', value: data.ciudad },
    { label: 'Nivel educativo', value: data.nivelEducativo },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Programa</h3>
        <p className="text-gray-700">Técnico Laboral en Gestión de Negocios Gastronómicos</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">Tus datos</h3>
          <button onClick={onEdit} className="flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors">
            <Edit2 size={16} /> Editar
          </button>
        </div>
        {fields.map(f => (
          <div key={f.label} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
            <span className="text-sm text-gray-500">{f.label}</span>
            <span className="text-gray-900 font-medium">{f.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-6 text-white">
        <div className="flex justify-between items-center">
          <span className="text-lg">Valor de inscripción</span>
          <span className="text-3xl font-bold">$250.000 COP</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onEdit}
          className="flex-1 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-lg transition-colors font-medium"
        >
          Editar datos
        </button>
        <button
          onClick={onConfirm}
          disabled={isLoading}
          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg transition-colors font-medium disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Procesando...
            </>
          ) : (
            'Confirmar y continuar al pago'
          )}
        </button>
      </div>
    </motion.div>
  );
}
