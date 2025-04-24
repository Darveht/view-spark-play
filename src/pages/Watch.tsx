
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { Button } from '@/components/ui/button';
import { Media, getContentById, Episode } from '@/lib/api/mockData';

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const episodeId = searchParams.get('ep');
  const navigate = useNavigate();
  
  const [content, setContent] = useState<Media | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  
  useEffect(() => {
    if (id) {
      const contentData = getContentById(id);
      if (contentData) {
        setContent(contentData);
        document.title = `Viendo: ${contentData.title} - NetStream`;
        
        // For series, get the requested episode or the first one
        if (contentData.type === 'series' && contentData.episodes) {
          if (episodeId) {
            const episode = contentData.episodes.find(ep => ep.id === episodeId);
            if (episode) {
              setCurrentEpisode(episode);
            } else {
              setCurrentEpisode(contentData.episodes[0]);
            }
          } else {
            setCurrentEpisode(contentData.episodes[0]);
          }
        }
      }
    }
  }, [id, episodeId]);

  // Determine video source and title
  const videoSource = currentEpisode ? currentEpisode.videoUrl : content?.videoUrl;
  const videoTitle = currentEpisode 
    ? `${content?.title} - T${currentEpisode.seasonNumber}:E${currentEpisode.episodeNumber} - ${currentEpisode.title}`
    : content?.title;

  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <div className="p-4 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-black/20"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="ml-2 font-medium text-lg">{videoTitle}</h1>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        {videoSource ? (
          <VideoPlayer 
            videoUrl={videoSource} 
            title={videoTitle || ''} 
            autoPlay
          />
        ) : (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-netflix-red"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watch;
