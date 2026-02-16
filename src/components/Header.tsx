import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl md:text-2xl text-orange-600">
              <span className="font-semibold text-[#f59300] font-[Quicksand]">Gestión de Negocios</span>
              <span className="block text-sm md:text-base text-gray-700 font-[Quicksand]">Gastronómicos</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('programa')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Programa
            </button>
            <button onClick={() => scrollToSection('malla')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Malla
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Beneficios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => navigate('/inscripcion')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Inscríbete ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('programa')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
                Programa
              </button>
              <button onClick={() => scrollToSection('malla')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
                Malla
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
                Beneficios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">
                Contacto
              </button>
              <button 
                onClick={() => navigate('/inscripcion')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors text-center"
              >
                Inscríbete ahora
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
