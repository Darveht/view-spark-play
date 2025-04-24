
import { Play, Info } from 'lucide-react';
import { Button } from './button';
import { Link } from 'react-router-dom';

interface FeaturedProps {
  id: string;
  title: string;
  type: 'movie' | 'series';
  backdropUrl: string;
  description: string;
  year?: number;
  rating?: string;
  duration?: string;
}

const Featured = ({ id, title, type, backdropUrl, description, year, rating, duration }: FeaturedProps) => {
  return (
    <div className="relative h-[70vh] mb-8">
      <div className="absolute inset-0">
        <img 
          src={backdropUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-background via-netflix-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-background via-transparent to-netflix-background/40" />
      </div>
      
      <div className="absolute bottom-0 left-0 p-4 md:p-12 w-full md:w-1/2 lg:w-2/5 space-y-3 md:space-y-6">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight animate-slide-up">{title}</h1>
        
        <div className="flex items-center space-x-3 text-sm md:text-base animate-slide-up" style={{animationDelay: "0.1s"}}>
          {year && <span>{year}</span>}
          {rating && <span className="border border-gray-400 px-2">+{rating}</span>}
          {duration && <span>{duration}</span>}
        </div>
        
        <p className="text-sm md:text-base text-gray-300 line-clamp-3 md:line-clamp-4 animate-slide-up" style={{animationDelay: "0.2s"}}>
          {description}
        </p>
        
        <div className="flex space-x-4 animate-slide-up" style={{animationDelay: "0.3s"}}>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <Link to={`/watch/${id}`}>
              <Play className="h-5 w-5 mr-2" />
              <span>Reproducir</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to={`/${type}/${id}`}>
              <Info className="h-5 w-5 mr-2" />
              <span>Más información</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
