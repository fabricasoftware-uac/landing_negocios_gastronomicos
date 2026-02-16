import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

type PaymentState = 'approved' | 'pending' | 'rejected';

const states: { key: PaymentState; label: string }[] = [
  { key: 'approved', label: 'Aprobado' },
  { key: 'pending', label: 'Pendiente' },
  { key: 'rejected', label: 'Rechazado' },
];

export default function PaymentStatus() {
  const [paymentState, setPaymentState] = useState<PaymentState>('approved');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 pb-20">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          {/* Simulator toggle */}
          <div className="flex gap-2 justify-center mb-10">
            {states.map(s => (
              <button
                key={s.key}
                onClick={() => setPaymentState(s.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  paymentState === s.key
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {paymentState === 'approved' && (
            <motion.div key="approved" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-green-600" size={44} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">¡Pago aprobado!</h2>
              <p className="text-gray-600">Tu inscripción al programa ha sido confirmada exitosamente. Recibirás un correo con todos los detalles.</p>
              <button onClick={() => navigate('/')} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
                Volver al inicio
              </button>
            </motion.div>
          )}

          {paymentState === 'pending' && (
            <motion.div key="pending" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-yellow-50 border border-yellow-200 rounded-2xl p-10 text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="text-yellow-600" size={44} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pago pendiente</h2>
              <p className="text-gray-600">Tu pago está siendo procesado. Este proceso puede tardar unos minutos. Te notificaremos por correo cuando se confirme.</p>
              <button onClick={() => navigate('/')} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
                Volver al inicio
              </button>
            </motion.div>
          )}

          {paymentState === 'rejected' && (
            <motion.div key="rejected" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-red-50 border border-red-200 rounded-2xl p-10 text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="text-red-500" size={44} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pago rechazado</h2>
              <p className="text-gray-600">Lamentablemente tu pago no pudo ser procesado. Por favor, verifica tus datos de pago e inténtalo nuevamente.</p>
              <button onClick={() => navigate('/inscripcion')} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
                Reintentar pago
              </button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
