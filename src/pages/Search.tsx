
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ContentCard from '@/components/ui/ContentCard';
import { searchContent, Media } from '@/lib/api/mockData';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState<Media[]>([]);
  const [searchQuery, setSearchQuery] = useState(query);
  
  useEffect(() => {
    document.title = `Búsqueda: ${query || ''} - NetStream`;
    
    if (query) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  return (
    <Layout>
      <div className="pt-16 pb-6 px-4 md:px-12 bg-gradient-to-b from-netflix-dark to-netflix-background">
        <h1 className="text-3xl font-bold mb-6">Buscar</h1>
        
        <form onSubmit={handleSearch} className="flex w-full max-w-lg mb-8">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Títulos, personas, géneros..."
              className="pl-10 bg-netflix-dark border-gray-700 focus-visible:ring-netflix-red"
            />
          </div>
          <button 
            type="submit" 
            className="ml-2 px-6 py-2 bg-netflix-red text-white rounded-md hover:bg-netflix-hover transition-colors"
          >
            Buscar
          </button>
        </form>
        
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">Filtros</h2>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors">Todos</button>
            <button className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors">Películas</button>
            <button className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors">Series</button>
            <button className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors">Acción</button>
            <button className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors">Drama</button>
            <button className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors">Comedia</button>
          </div>
        </div>
      </div>
      
      <div className="px-4 md:px-12 py-8">
        {query ? (
          <>
            <h2 className="text-2xl font-medium mb-4">
              {results.length > 0 
                ? `Resultados para "${query}" (${results.length})` 
                : `No hay resultados para "${query}"`}
            </h2>
            
            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {results.map(item => (
                  <ContentCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <div className="text-gray-400 py-12 text-center">
                <p>No se encontraron resultados para tu búsqueda. Intenta con otro término o explora nuestras categorías.</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-300 mb-4">Ingresa un término de búsqueda para encontrar contenido</p>
            <p className="text-gray-500">Puedes buscar por título, género o nombre de actor</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
