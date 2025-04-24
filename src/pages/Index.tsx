
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import Featured from '@/components/ui/Featured';
import ContentRow from '@/components/ui/ContentRow';
import { getFeaturedContent, getContentByCategory } from '@/lib/api/mockData';

const Index = () => {
  const [featured, setFeatured] = useState(getFeaturedContent());
  const [continueWatching, setContinueWatching] = useState(getContentByCategory('continue-watching'));
  const [trending, setTrending] = useState(getContentByCategory('trending'));
  const [newReleases, setNewReleases] = useState(getContentByCategory('new-releases'));
  const [recommended, setRecommended] = useState(getContentByCategory('recommended'));

  useEffect(() => {
    // In a real app, this data would be fetched from an API
    document.title = 'NetStream - Ver series y películas online';
  }, []);

  return (
    <Layout>
      <Featured {...featured} />
      
      <div className="space-y-1">
        <ContentRow title="Continuar viendo" items={continueWatching} />
        <ContentRow title="Series populares" items={trending} />
        <ContentRow title="Nuevos estrenos" items={newReleases} />
        <ContentRow title="Recomendado para ti" items={recommended} />
      </div>
    </Layout>
  );
};

export default Index;
