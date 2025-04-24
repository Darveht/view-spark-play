
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, User, Clock, Heart, Shield, LogOut } from 'lucide-react';

const profileAvatars = [
  { id: '1', url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&auto=format&fit=crop' },
  { id: '2', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop' },
  { id: '3', url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&auto=format&fit=crop' },
  { id: '4', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&auto=format&fit=crop' },
  { id: '5', url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&auto=format&fit=crop' },
  { id: '6', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop' },
];

interface Profile {
  id: string;
  name: string;
  avatarUrl: string;
  isKid: boolean;
}

const profiles: Profile[] = [
  { id: '1', name: 'Usuario Principal', avatarUrl: profileAvatars[0].url, isKid: false },
  { id: '2', name: 'Invitado', avatarUrl: profileAvatars[1].url, isKid: false },
  { id: '3', name: 'Niños', avatarUrl: profileAvatars[5].url, isKid: true },
];

const Perfil = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(profileAvatars[0].url);
  const [profileName, setProfileName] = useState('Usuario Principal');
  
  useEffect(() => {
    document.title = 'Mi Perfil - NetStream';
  }, []);

  return (
    <Layout>
      <div className="pt-16 pb-6 px-4 md:px-12 bg-gradient-to-b from-netflix-dark to-netflix-background">
        <h1 className="text-4xl font-bold mb-2">Mi Perfil</h1>
        <p className="text-gray-400">Gestiona tu perfil y preferencias</p>
      </div>
      
      <div className="px-4 md:px-12 py-8">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full max-w-md mb-8">
            <TabsTrigger value="account" className="flex-1">Cuenta</TabsTrigger>
            <TabsTrigger value="profiles" className="flex-1">Perfiles</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1">Ajustes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-8">
            <div className="bg-netflix-dark rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-8 border border-gray-800">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-netflix-red">
                <img src={selectedAvatar} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{profileName}</h2>
                <p className="text-gray-400 mb-4">usuario@ejemplo.com</p>
                <h3 className="font-medium mb-2">Plan actual:</h3>
                <div className="inline-flex items-center bg-netflix-red/20 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-netflix-red rounded-full mr-2"></span>
                  <span>Premium 4K UHD</span>
                </div>
                <p className="text-gray-400 mt-2">Próximo cobro: 15/05/2023</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Editar Perfil</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Cambiar Contraseña</span>
                </Button>
              </div>
            </div>
            
            <div className="bg-netflix-dark rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Historial de Visualización</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                  <div>
                    <h3 className="font-medium">El Último Horizonte</h3>
                    <p className="text-sm text-gray-400">Visto: 3 horas atrás</p>
                  </div>
                  <Button variant="outline" size="sm">Continuar</Button>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                  <div>
                    <h3 className="font-medium">Conexión Oscura - T1:E5</h3>
                    <p className="text-sm text-gray-400">Visto: Ayer</p>
                  </div>
                  <Button variant="outline" size="sm">Continuar</Button>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                  <div>
                    <h3 className="font-medium">Cosmos: Nuevos Mundos - T1:E2</h3>
                    <p className="text-sm text-gray-400">Visto: 2 días atrás</p>
                  </div>
                  <Button variant="outline" size="sm">Continuar</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-netflix-dark rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Plan de Suscripción</h2>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="font-medium">Premium</h3>
                    <p className="text-sm text-gray-400">Calidad Ultra HD 4K · 4 pantallas simultáneas</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-xl font-bold">14,99 €/mes</span>
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-800">
                  <Button variant="outline">Cambiar Plan</Button>
                  <Button variant="destructive">Cancelar Suscripción</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="profiles" className="space-y-6">
            <div className="bg-netflix-dark rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-6">Perfiles</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {profiles.map((profile) => (
                  <div key={profile.id} className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                        <AvatarFallback>{profile.name[0]}</AvatarFallback>
                      </Avatar>
                      {profile.isKid && (
                        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Niños
                        </div>
                      )}
                    </div>
                    <span className="font-medium mb-2">{profile.name}</span>
                    <Button variant="ghost" size="sm">Editar</Button>
                  </div>
                ))}
                
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors mb-2">
                    <span className="text-4xl">+</span>
                  </div>
                  <span className="font-medium mb-2">Añadir Perfil</span>
                  <div className="h-8"></div> {/* Spacer to align with other profiles */}
                </div>
              </div>
            </div>
            
            <div className="bg-netflix-dark rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Control Parental</h2>
              <p className="text-gray-400 mb-4">Configura perfiles para niños y establece restricciones de contenido</p>
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <div>
                  <h3 className="font-medium">Perfil de Niños</h3>
                  <p className="text-sm text-gray-400">Restricción: Contenido para todas las edades</p>
                </div>
                <Button variant="outline">Modificar</Button>
              </div>
              
              <div className="pt-4">
                <h3 className="font-medium mb-2">PIN de Control Parental</h3>
                <div className="flex items-center gap-3">
                  <Button variant="outline">Establecer PIN</Button>
                  <span className="text-gray-400 text-sm">Protege los perfiles adultos con un PIN</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <div className="bg-netflix-dark rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Preferencias de Reproducción</h2>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-gray-800">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-medium">Calidad de reproducción</h3>
                    <p className="text-sm text-gray-400">Selecciona la calidad automáticamente según tu conexión</p>
                  </div>
                  <div className="flex items-center">
                    <select className="bg-black border border-gray-700 rounded p-2 text-sm">
                      <option>Automático</option>
                      <option>Baja</option>
                      <option>Media</option>
                      <option>Alta</option>
                      <option>Máxima</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-gray-800">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-medium">Autoplay</h3>
                    <p className="text-sm text-gray-400">Reproducir automáticamente el siguiente episodio</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-700 accent-netflix-red" defaultChecked />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-gray-800">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-medium">Idioma de audio predeterminado</h3>
                    <p className="text-sm text-gray-400">Elige el idioma predeterminado para el audio</p>
                  </div>
                  <div className="flex items-center">
                    <select className="bg-black border border-gray-700 rounded p-2 text-sm">
                      <option>Español</option>
                      <option>Inglés</option>
                      <option>Francés</option>
                      <option>Alemán</option>
                      <option>Italiano</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-medium">Subtítulos</h3>
                    <p className="text-sm text-gray-400">Configuración de subtítulos</p>
                  </div>
                  <div className="flex items-center">
                    <select className="bg-black border border-gray-700 rounded p-2 text-sm">
                      <option>Desactivados</option>
                      <option>Español</option>
                      <option>Inglés</option>
                      <option>Francés</option>
                      <option>Alemán</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-netflix-dark rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Notificaciones</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <div>
                    <h3 className="font-medium">Nuevos lanzamientos</h3>
                    <p className="text-sm text-gray-400">Recibe notificaciones sobre nuevos contenidos</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-700 accent-netflix-red" defaultChecked />
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <div>
                    <h3 className="font-medium">Recomendaciones personalizadas</h3>
                    <p className="text-sm text-gray-400">Recibe sugerencias basadas en tus gustos</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-700 accent-netflix-red" defaultChecked />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Novedades de NetStream</h3>
                    <p className="text-sm text-gray-400">Información sobre actualizaciones y funcionalidades</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-700 accent-netflix-red" />
                </div>
              </div>
            </div>
            
            <div className="bg-netflix-dark rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">Dispositivos conectados</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <div>
                    <h3 className="font-medium">Google Chrome - Windows</h3>
                    <p className="text-sm text-gray-400">Último acceso: Hoy, 15:30</p>
                  </div>
                  <Button variant="outline" size="sm">Desconectar</Button>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <div>
                    <h3 className="font-medium">iPhone 14 Pro</h3>
                    <p className="text-sm text-gray-400">Último acceso: Ayer, 20:15</p>
                  </div>
                  <Button variant="outline" size="sm">Desconectar</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Smart TV - Samsung</h3>
                    <p className="text-sm text-gray-400">Último acceso: 23/04/2023</p>
                  </div>
                  <Button variant="outline" size="sm">Desconectar</Button>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="destructive" className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  <span>Cerrar sesión en todos los dispositivos</span>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Perfil;
