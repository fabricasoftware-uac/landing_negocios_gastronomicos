import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stepper } from '../components/Stepper';
import { StepDatosPersonales, type DatosPersonales } from '../components/enrollment/StepDatosPersonales';
import { StepConfirmacion } from '../components/enrollment/StepConfirmacion';
import { StepProcesandoPago } from '../components/enrollment/StepProcesandoPago';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const STEPS = ['Datos personales', 'Confirmación', 'Pago'];

const emptyData: DatosPersonales = {
  nombreCompleto: '',
  documento: '',
  email: '',
  telefono: '',
  ciudad: '',
  nivelEducativo: '',
  aceptaTerminos: false,
};

export default function Inscripcion() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<DatosPersonales>(emptyData);
  const [isLoading, setIsLoading] = useState(false);

  const handleDatosNext = (data: DatosPersonales) => {
    setFormData(data);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.from('inscripciones').insert({
        nombre_completo: formData.nombreCompleto,
        documento: formData.documento,
        email: formData.email,
        telefono: formData.telefono,
        ciudad: formData.ciudad,
        nivel_educativo: formData.nivelEducativo,
        acepta_terminos: formData.aceptaTerminos,
      });
      if (error) throw error;
      toast.success('Inscripción guardada correctamente');
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error(err);
      toast.error('Error al guardar la inscripción. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl text-gray-900 mb-3">Inscripción al programa</h1>
            <div className="w-16 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Técnico Laboral en Gestión de Negocios Gastronómicos</p>
            <p className="text-sm text-gray-500 mt-2">
              ¿Ya iniciaste tu inscripción? <Link to="/reanudar" className="text-orange-600 hover:text-orange-700 underline">Retómala aquí</Link>
            </p>
          </div>

          <Stepper steps={STEPS} currentStep={currentStep} />

          {currentStep === 0 && (
            <StepDatosPersonales initialData={formData} onNext={handleDatosNext} />
          )}
          {currentStep === 1 && (
            <StepConfirmacion
              data={formData}
              onEdit={() => setCurrentStep(0)}
              onConfirm={handleConfirm}
              isLoading={isLoading}
            />
          )}
          {currentStep === 2 && <StepProcesandoPago />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
