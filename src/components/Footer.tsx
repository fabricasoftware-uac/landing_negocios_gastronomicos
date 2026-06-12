import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Información del programa */}
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-2 text-orange-500 font-display">
              EL GRAN ANFITRIÓN
            </h3>
            <p className="text-gray-400 mb-1 text-sm italic">
              El arte de sentirse bienvenido
            </p>
            <p className="text-gray-500 mb-6 text-sm">
              Técnico Laboral en Gestión de Negocios Gastronómicos
            </p>
            <p className="text-gray-400 mb-6">
              Construye empresa gastronómica con estructura, estrategia y acompañamiento profesional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg mb-4">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/movimiento" className="text-gray-400 hover:text-orange-500 transition-colors">El Movimiento</Link>
              </li>
              <li>
                <Link to="/movimiento" className="text-gray-400 hover:text-orange-500 transition-colors">Programa</Link>
              </li>
              <li>
                <Link to="/movimiento" className="text-gray-400 hover:text-orange-500 transition-colors">Malla académica</Link>
              </li>
              <li>
                <Link to="/inscripcion" className="text-gray-400 hover:text-orange-500 transition-colors">Inscríbete</Link>
              </li>
              <li>
                <Link to="/reanudar" className="text-gray-400 hover:text-orange-500 transition-colors">Completar inscripción</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="text-orange-500 flex-shrink-0 mt-1 w-fit " size={18} />
                <a href="mailto:infotecnicogastro@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors text-sm break-all">
                  infotecnicogastro@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                <a href="tel:+573001234567" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">
                  Popayán, Cauca, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © 2026 El Gran Anfitrión. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-500 transition-colors">Términos y condiciones</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Política de privacidad</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            En alianza con: <span className="text-orange-500">Corporación Gastronómica de Popayán</span> | <span className="text-orange-500">Emprendelab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
