
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-netflix-background py-10 px-4 md:px-12 mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-gray-300 text-sm">Inicio</Link></li>
              <li><Link to="/series" className="text-gray-500 hover:text-gray-300 text-sm">Series</Link></li>
              <li><Link to="/peliculas" className="text-gray-500 hover:text-gray-300 text-sm">Películas</Link></li>
              <li><Link to="/mi-lista" className="text-gray-500 hover:text-gray-300 text-sm">Mi Lista</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Cuenta</h3>
            <ul className="space-y-2">
              <li><Link to="/perfil" className="text-gray-500 hover:text-gray-300 text-sm">Perfil</Link></li>
              <li><Link to="/suscripcion" className="text-gray-500 hover:text-gray-300 text-sm">Suscripción</Link></li>
              <li><Link to="/ajustes" className="text-gray-500 hover:text-gray-300 text-sm">Ajustes</Link></li>
              <li><Link to="/ayuda" className="text-gray-500 hover:text-gray-300 text-sm">Ayuda</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terminos" className="text-gray-500 hover:text-gray-300 text-sm">Términos de uso</Link></li>
              <li><Link to="/privacidad" className="text-gray-500 hover:text-gray-300 text-sm">Privacidad</Link></li>
              <li><Link to="/cookies" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</Link></li>
              <li><Link to="/informacion" className="text-gray-500 hover:text-gray-300 text-sm">Información corporativa</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@netstream.com" className="text-gray-500 hover:text-gray-300 text-sm">info@netstream.com</a></li>
              <li><a href="tel:+34900000000" className="text-gray-500 hover:text-gray-300 text-sm">+34 900 000 000</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">© 2025 NetStream. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
