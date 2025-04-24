
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import ContentRow from '@/components/ui/ContentRow';
import { getContentByCategory } from '@/lib/api/mockData';

const Series = () => {
  const [seriesContent, setSeriesContent] = useState(getContentByCategory('series'));
  
  useEffect(() => {
    document.title = 'Series - NetStream';
  }, []);

  // Group series by genre
  const groupedByGenre: Record<string, any[]> = {};
  seriesContent.forEach(series => {
    series.genres.forEach(genre => {
      if (!groupedByGenre[genre]) {
        groupedByGenre[genre] = [];
      }
      if (!groupedByGenre[genre].find(s => s.id === series.id)) {
        groupedByGenre[genre].push(series);
      }
    });
  });

  return (
    <Layout>
      <div className="pt-16 pb-6 px-4 md:px-12 bg-gradient-to-b from-netflix-dark to-netflix-background">
        <h1 className="text-4xl font-bold mb-2">Series</h1>
        <p className="text-gray-400">Todas las series disponibles para disfrutar</p>
      </div>
      
      <div className="space-y-1">
        {Object.keys(groupedByGenre).map(genre => (
          <ContentRow key={genre} title={genre} items={groupedByGenre[genre]} />
        ))}
      </div>
    </Layout>
  );
};

export default Series;
