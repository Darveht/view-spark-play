
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import ContentRow from '@/components/ui/ContentRow';
import { getContentByCategory } from '@/lib/api/mockData';

const Peliculas = () => {
  const [moviesContent, setMoviesContent] = useState(getContentByCategory('movies'));
  
  useEffect(() => {
    document.title = 'Películas - NetStream';
  }, []);

  // Group movies by genre
  const groupedByGenre: Record<string, any[]> = {};
  moviesContent.forEach(movie => {
    movie.genres.forEach(genre => {
      if (!groupedByGenre[genre]) {
        groupedByGenre[genre] = [];
      }
      if (!groupedByGenre[genre].find(m => m.id === movie.id)) {
        groupedByGenre[genre].push(movie);
      }
    });
  });

  return (
    <Layout>
      <div className="pt-16 pb-6 px-4 md:px-12 bg-gradient-to-b from-netflix-dark to-netflix-background">
        <h1 className="text-4xl font-bold mb-2">Películas</h1>
        <p className="text-gray-400">Todas las películas disponibles para disfrutar</p>
      </div>
      
      <div className="space-y-1">
        {Object.keys(groupedByGenre).map(genre => (
          <ContentRow key={genre} title={genre} items={groupedByGenre[genre]} />
        ))}
      </div>
    </Layout>
  );
};

export default Peliculas;
