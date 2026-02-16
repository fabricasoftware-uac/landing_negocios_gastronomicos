import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

export function StepProcesandoPago() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/payment-status');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-16 space-y-6"
    >
      <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
        <CreditCard className="text-orange-600" size={36} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Redirigiendo a la pasarela de pago...</h3>
        <p className="text-gray-500">Por favor no cierres esta ventana</p>
      </div>

      <div className="flex justify-center">
        <svg className="animate-spin h-8 w-8 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    </motion.div>
  );
}
