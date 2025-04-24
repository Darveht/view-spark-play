
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? 'bg-netflix-background' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
        {/* Left side - Logo and navigation */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-netflix-red font-bold text-3xl">NETSTREAM</h1>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`text-sm font-medium ${location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
              Inicio
            </Link>
            <Link to="/series" className={`text-sm font-medium ${location.pathname === '/series' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
              Series
            </Link>
            <Link to="/peliculas" className={`text-sm font-medium ${location.pathname === '/peliculas' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
              Películas
            </Link>
            <Link to="/mi-lista" className={`text-sm font-medium ${location.pathname === '/mi-lista' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
              Mi Lista
            </Link>
          </div>
        </div>
        
        {/* Right side - Search, Notifications, Profile */}
        <div className="flex items-center space-x-6">
          {showSearch ? (
            <div className="animate-fade-in flex items-center bg-black/80 rounded overflow-hidden">
              <Input 
                className="bg-transparent border-none focus-visible:ring-0 text-sm w-36 md:w-64" 
                placeholder="Títulos, personas, géneros..." 
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <Search className="h-5 w-5 text-gray-400" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="hover:bg-transparent" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Link to="/perfil">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-netflix-red text-white">US</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
