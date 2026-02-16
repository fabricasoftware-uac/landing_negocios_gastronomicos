import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

type SearchStatus = 'idle' | 'loading' | 'pending' | 'paid' | 'not_found';

export default function Reanudar() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<SearchStatus>('idle');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus('loading');
    setTimeout(() => {
      const q = query.trim().toLowerCase();
      if (q.includes('pagado') || q.includes('paid')) {
        setStatus('paid');
      } else if (q.includes('error') || q.includes('none')) {
        setStatus('not_found');
      } else {
        setStatus('pending');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 pb-20">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl text-gray-900 mb-3">Completar inscripción</h1>
            <div className="w-16 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">
              Si ya iniciaste tu proceso de inscripción, ingresa tu email o documento para continuar.
            </p>
          </div>

          <form onSubmit={handleSearch} className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email o Documento</label>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                placeholder="tu@email.com o número de documento"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Buscando...
                </>
              ) : (
                <>
                  <Search size={20} />
                  Buscar inscripción
                </>
              )}
            </button>
          </form>

          {/* Results */}
          {status === 'pending' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center space-y-4">
              <Clock className="mx-auto text-orange-600" size={40} />
              <h3 className="text-lg font-semibold text-gray-900">Inscripción pendiente de pago</h3>
              <p className="text-gray-600 text-sm">Tu inscripción fue encontrada pero aún no se ha completado el pago.</p>
              <button
                onClick={() => navigate('/payment-status')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
              >
                Continuar al pago
              </button>
            </motion.div>
          )}

          {status === 'paid' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-3">
              <CheckCircle2 className="mx-auto text-green-600" size={40} />
              <h3 className="text-lg font-semibold text-gray-900">¡Inscripción completada!</h3>
              <p className="text-gray-600 text-sm">Tu inscripción ya fue pagada exitosamente. Revisa tu email para más información.</p>
            </motion.div>
          )}

          {status === 'not_found' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 border border-red-200 rounded-xl p-6 text-center space-y-3">
              <AlertCircle className="mx-auto text-red-500" size={40} />
              <h3 className="text-lg font-semibold text-gray-900">Inscripción no encontrada</h3>
              <p className="text-gray-600 text-sm">No encontramos ninguna inscripción con esos datos. Verifica e intenta de nuevo o inicia una nueva inscripción.</p>
              <button
                onClick={() => navigate('/inscripcion')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
              >
                Nueva inscripción
              </button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
