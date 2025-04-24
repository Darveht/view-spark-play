
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, ThumbsDown, Share2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import ContentRow from '@/components/ui/ContentRow';
import { Media, getContentById, getSimilarContent } from '@/lib/api/mockData';

const Detail = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [content, setContent] = useState<Media | null>(null);
  const [similar, setSimilar] = useState<Media[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  
  useEffect(() => {
    if (id) {
      const contentData = getContentById(id);
      if (contentData) {
        setContent(contentData);
        setSimilar(getSimilarContent(id));
        document.title = `${contentData.title} - NetStream`;
      }
    }
  }, [id]);

  if (!content) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-netflix-red"></div>
        </div>
      </Layout>
    );
  }

  // Filter episodes by selected season
  const episodesBySeason = content.episodes?.filter(
    episode => episode.seasonNumber === selectedSeason
  );

  // Count total seasons
  const totalSeasons = content.episodes 
    ? Math.max(...content.episodes.map(episode => episode.seasonNumber))
    : 0;
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src={content.backdropUrl} 
            alt={content.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-background via-netflix-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-background via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-4 md:p-12 w-full md:w-1/2 lg:w-2/5 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-slide-up">{content.title}</h1>
          
          <div className="flex items-center space-x-4 text-sm animate-slide-up" style={{animationDelay: "0.1s"}}>
            <span className="text-green-500 font-medium">97% Coincidencia</span>
            <span>{content.year}</span>
            <span className="border border-gray-500 px-1">{content.rating}</span>
            <span>{content.duration}</span>
          </div>
          
          <div className="flex space-x-4 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link to={`/watch/${content.id}`}>
                <Play className="h-5 w-5 mr-2" />
                <span>Reproducir</span>
              </Link>
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full">
              <Plus className="h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full">
              <ThumbsUp className="h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full">
              <ThumbsDown className="h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-gray-300 animate-slide-up" style={{animationDelay: "0.3s"}}>
            {content.description}
          </p>
          
          <div className="animate-slide-up" style={{animationDelay: "0.4s"}}>
            <p className="text-gray-400">
              <span className="text-gray-200 font-medium">Géneros: </span>
              {content.genres.join(', ')}
            </p>
            <p className="text-gray-400">
              <span className="text-gray-200 font-medium">Reparto: </span>
              {content.cast.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Episodes Section (for series) */}
      {content.type === 'series' && content.episodes && (
        <div className="px-4 md:px-12 py-8 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium">Episodios</h2>
            
            {totalSeasons > 1 && (
              <div className="relative">
                <select 
                  className="appearance-none bg-black border border-gray-700 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-netflix-red"
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(Number(e.target.value))}
                >
                  {[...Array(totalSeasons)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      Temporada {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            {episodesBySeason?.map(episode => (
              <div key={episode.id} className="flex flex-col md:flex-row p-4 border border-gray-800 rounded-lg bg-netflix-dark hover:bg-neutral-800 transition-colors">
                <div className="md:w-64 flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <Link to={`/watch/${content.id}?ep=${episode.id}`}>
                    <div className="relative w-full aspect-video rounded-md overflow-hidden group">
                      <img 
                        src={episode.imageUrl} 
                        alt={episode.title} 
                        className="w-full h-full object-cover group-hover:opacity-70 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <Link to={`/watch/${content.id}?ep=${episode.id}`}>
                      <h3 className="font-medium hover:text-gray-300 transition-colors">
                        {episode.episodeNumber}. {episode.title}
                      </h3>
                    </Link>
                    <span className="text-sm text-gray-400">{episode.duration}</span>
                  </div>
                  
                  <p className="text-sm text-gray-400">
                    {episode.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Trailer Section */}
      <div className="px-4 md:px-12 py-8 border-b border-gray-800">
        <h2 className="text-2xl font-medium mb-4">Trailers y más</h2>
        <div className="aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title="Trailer"
          ></iframe>
        </div>
      </div>
      
      {/* Similar Content */}
      <div className="py-8">
        <ContentRow title="Contenido similar" items={similar} />
      </div>
    </Layout>
  );
};

export default Detail;
