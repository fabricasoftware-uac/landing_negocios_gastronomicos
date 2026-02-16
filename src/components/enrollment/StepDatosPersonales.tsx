import { useState } from 'react';
import { motion } from 'motion/react';

export interface DatosPersonales {
  nombreCompleto: string;
  documento: string;
  email: string;
  telefono: string;
  ciudad: string;
  nivelEducativo: string;
  aceptaTerminos: boolean;
}

interface Props {
  initialData: DatosPersonales;
  onNext: (data: DatosPersonales) => void;
}

const nivelesEducativos = [
  'Bachiller',
  'Técnico',
  'Tecnólogo',
  'Profesional',
  'Especialización',
  'Maestría',
  'Otro',
];

export function StepDatosPersonales({ initialData, onNext }: Props) {
  const [data, setData] = useState<DatosPersonales>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof DatosPersonales, string>>>({});

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!data.nombreCompleto.trim()) newErrors.nombreCompleto = 'Campo obligatorio';
    if (!data.documento.trim()) newErrors.documento = 'Campo obligatorio';
    if (!data.email.trim()) newErrors.email = 'Campo obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Email inválido';
    if (!data.telefono.trim()) newErrors.telefono = 'Campo obligatorio';
    if (!data.ciudad.trim()) newErrors.ciudad = 'Campo obligatorio';
    if (!data.nivelEducativo) newErrors.nivelEducativo = 'Selecciona una opción';
    if (!data.aceptaTerminos) newErrors.aceptaTerminos = 'Debes aceptar los términos';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onNext(data);
  };

  const update = (field: keyof DatosPersonales, value: string | boolean) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Nombre */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
        <input
          value={data.nombreCompleto}
          onChange={e => update('nombreCompleto', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          placeholder="Tu nombre completo"
        />
        {errors.nombreCompleto && <p className="text-red-500 text-sm mt-1">{errors.nombreCompleto}</p>}
      </div>

      {/* Documento */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Documento de identidad *</label>
        <input
          value={data.documento}
          onChange={e => update('documento', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          placeholder="Número de documento"
        />
        {errors.documento && <p className="text-red-500 text-sm mt-1">{errors.documento}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          value={data.email}
          onChange={e => update('email', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          placeholder="tu@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Teléfono */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
        <input
          value={data.telefono}
          onChange={e => update('telefono', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          placeholder="Tu número de contacto"
        />
        {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
      </div>

      {/* Ciudad */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
        <input
          value={data.ciudad}
          onChange={e => update('ciudad', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          placeholder="Ciudad de residencia"
        />
        {errors.ciudad && <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>}
      </div>

      {/* Nivel educativo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nivel educativo *</label>
        <select
          value={data.nivelEducativo}
          onChange={e => update('nivelEducativo', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
        >
          <option value="">Seleccionar...</option>
          {nivelesEducativos.map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        {errors.nivelEducativo && <p className="text-red-500 text-sm mt-1">{errors.nivelEducativo}</p>}
      </div>

      {/* Términos */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.aceptaTerminos}
            onChange={e => update('aceptaTerminos', e.target.checked)}
            className="mt-1 w-5 h-5 accent-orange-600"
          />
          <span className="text-sm text-gray-600">
            Acepto los términos y condiciones del programa y autorizo el tratamiento de mis datos personales. *
          </span>
        </label>
        {errors.aceptaTerminos && <p className="text-red-500 text-sm mt-1">{errors.aceptaTerminos}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg transition-colors font-medium text-lg"
      >
        Continuar
      </button>
    </motion.form>
  );
}
