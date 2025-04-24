
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';
import { Button } from './button';

interface ContentItem {
  id: string;
  title: string;
  imageUrl: string;
  type: 'movie' | 'series';
  year?: number;
  rating?: string;
  duration?: string;
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
}

const ContentRow = ({ title, items }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      rowRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-xl font-medium mb-2 pl-4 md:pl-12">{title}</h2>
      
      <div className="relative group">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        
        <div 
          ref={rowRef}
          className="flex space-x-2 overflow-x-scroll scrollbar-none scroll-smooth px-4 md:px-12 py-4"
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[180px] md:w-[240px]">
              <ContentCard {...item} />
            </div>
          ))}
        </div>
        
        <Button
          variant="ghost" 
          size="icon" 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default ContentRow;
