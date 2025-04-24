
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import ContentCard from '@/components/ui/ContentCard';
import { getContentByCategory } from '@/lib/api/mockData';

const MiLista = () => {
  // For demo purposes, using random content
  const [myListContent, setMyListContent] = useState(
    getContentByCategory('trending').slice(0, 8)
  );
  
  useEffect(() => {
    document.title = 'Mi Lista - NetStream';
  }, []);

  return (
    <Layout>
      <div className="pt-16 pb-6 px-4 md:px-12 bg-gradient-to-b from-netflix-dark to-netflix-background">
        <h1 className="text-4xl font-bold mb-2">Mi Lista</h1>
        <p className="text-gray-400">Contenido guardado para ver más tarde</p>
      </div>
      
      <div className="px-4 md:px-12 py-8">
        {myListContent.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {myListContent.map(item => (
              <ContentCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-400 mb-4">Tu lista está vacía</p>
            <p className="text-gray-500 mb-6">Agrega series y películas a tu lista para verlas más tarde</p>
            <a 
              href="/" 
              className="px-6 py-2 bg-netflix-red text-white rounded-md hover:bg-netflix-hover transition-colors"
            >
              Explorar contenido
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MiLista;
