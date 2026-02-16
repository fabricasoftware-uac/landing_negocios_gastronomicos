import { motion } from 'motion/react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold z-10 transition-all duration-300 ${
                index < currentStep
                  ? 'bg-orange-600 text-white'
                  : index === currentStep
                  ? 'bg-orange-600 text-white ring-4 ring-orange-200'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index < currentStep ? '✓' : index + 1}
            </div>
            <span
              className={`mt-2 text-xs md:text-sm text-center transition-colors duration-300 ${
                index <= currentStep ? 'text-orange-600 font-medium' : 'text-gray-400'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="relative h-2 bg-gray-200 rounded-full mx-8">
        <motion.div
          className="absolute top-0 left-0 h-full bg-orange-600 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
