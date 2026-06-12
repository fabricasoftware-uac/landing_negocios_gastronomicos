import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    const targetsHomepage = ["inicio", "impacto", "programas"].includes(id);
    const targetPage = targetsHomepage ? "/" : "/movimiento";

    if (location.pathname !== targetPage) {
      navigate(targetPage);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollOnCurrentPage = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md shadow-orange-200">
              <span className="text-white text-lg font-bold font-display">GA</span>
            </div>
            <div className="leading-tight">
              <span className="text-sm md:text-base font-semibold text-[#f59300] font-[Quicksand] tracking-wide block">
                EL GRAN ANFITRIÓN
              </span>
              <span className="text-xs text-gray-500 font-[Quicksand] block">
                El arte de sentirse bienvenido
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("impacto")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm"
                >
                  Impacto
                </button>
                <button
                  onClick={() => scrollToSection("programas")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm"
                >
                  Programas
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm"
                >
                  Inicio
                </Link>
                <button
                  onClick={() => scrollToSection("programa")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm"
                >
                  Programa
                </button>
                <button
                  onClick={() => scrollToSection("malla")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm"
                >
                  Malla
                </button>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm"
                >
                  Beneficios
                </button>
              </>
            )}
            <Link
              to="/movimiento"
              className="text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
            >
              El Movimiento
            </Link>
            <button
              onClick={() => scrollOnCurrentPage("contacto")}
              className="text-gray-700 hover:text-orange-600 transition-colors text-sm"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => navigate("/inscripcion")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Inscríbete ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                  >
                    Inicio
                  </button>
                  <button
                    onClick={() => scrollToSection("impacto")}
                    className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                  >
                    Impacto
                  </button>
                  <button
                    onClick={() => scrollToSection("programas")}
                    className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                  >
                    Programas
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <button
                    onClick={() => scrollToSection("programa")}
                    className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                  >
                    Programa
                  </button>
                  <button
                    onClick={() => scrollToSection("malla")}
                    className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                  >
                    Malla
                  </button>
                  <button
                    onClick={() => scrollToSection("beneficios")}
                    className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                  >
                    Beneficios
                  </button>
                </>
              )}
              <Link
                to="/movimiento"
                className="text-gray-700 hover:text-orange-600 transition-colors text-left font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                El Movimiento
              </Link>
              <button
                onClick={() => scrollOnCurrentPage("contacto")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Contacto
              </button>
              <button
                onClick={() => {
                  navigate("/inscripcion");
                  setIsMenuOpen(false);
                }}
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
