
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Plus } from 'lucide-react';
import { Button } from './button';

interface ContentCardProps {
  id: string;
  title: string;
  imageUrl: string;
  type: 'movie' | 'series';
  year?: number;
  rating?: string;
  duration?: string;
}

const ContentCard = ({ id, title, imageUrl, type, year, rating, duration }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="content-card" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover rounded-md transition-transform duration-300" 
      />
      
      {isHovered && (
        <div className="content-card-detail animate-fade-in">
          <h3 className="font-bold text-sm md:text-base mb-1">{title}</h3>
          
          <div className="flex items-center text-xs mb-2 text-gray-300 space-x-2">
            {year && <span>{year}</span>}
            {rating && <><span className="bg-gray-700 px-1">+{rating}</span></>}
            {duration && <span>{duration}</span>}
          </div>
          
          <div className="flex space-x-2">
            <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200 rounded-full">
              <Link to={`/watch/${id}`}>
                <Play className="h-4 w-4 mr-1" />
                <span>Reproducir</span>
              </Link>
            </Button>
            
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full border border-gray-400 hover:border-white bg-black/20 backdrop-blur-sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
            
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full border border-gray-400 hover:border-white bg-black/20 backdrop-blur-sm"
              asChild
            >
              <Link to={`/${type}/${id}`}>
                <Info className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
