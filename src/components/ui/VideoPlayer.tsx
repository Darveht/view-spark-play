
import { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, 
  Maximize, Minimize, Subtitles, Settings 
} from 'lucide-react';
import { Button } from './button';
import { Slider } from './slider';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  autoPlay?: boolean;
  poster?: string;
}

const VideoPlayer = ({ videoUrl, title, autoPlay = false, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  // Hide controls after inactivity
  useEffect(() => {
    if (!isPlaying) return;
    
    let timer: NodeJS.Timeout;
    const resetTimer = () => {
      clearTimeout(timer);
      setShowControls(true);
      timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };
    
    resetTimer();
    const player = playerRef.current;
    player?.addEventListener('mousemove', resetTimer);
    player?.addEventListener('click', () => setShowControls(true));
    
    return () => {
      clearTimeout(timer);
      player?.removeEventListener('mousemove', resetTimer);
      player?.removeEventListener('click', () => setShowControls(true));
    };
  }, [isPlaying]);
  
  // Update video state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    
    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);
  
  // Handle play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.play().catch(error => {
        console.error("Error playing video:", error);
        setIsPlaying(false);
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);
  
  // Handle volume/mute
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);
  
  // Format time (seconds -> MM:SS)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Toggle fullscreen
  const toggleFullscreen = () => {
    const player = playerRef.current;
    if (!player) return;
    
    if (!isFullscreen) {
      if (player.requestFullscreen) {
        player.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  
  // Update fullscreen state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  
  // Skip forward/backward
  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    
    video.currentTime += seconds;
  };

  return (
    <div 
      ref={playerRef}
      className="relative w-full h-full bg-black aspect-video rounded-lg overflow-hidden"
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        className="w-full h-full"
        autoPlay={autoPlay}
        onClick={() => setIsPlaying(!isPlaying)}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Controls overlay */}
      {showControls && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4 transition-opacity">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <h2 className="text-white font-medium">{title}</h2>
            
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="ghost" onClick={() => setShowControls(false)}>
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Center play control */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {!isPlaying && (
              <Button 
                size="icon"
                variant="ghost"
                className="h-16 w-16 rounded-full bg-black/30 border border-white/60 hover:bg-black/60"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="h-8 w-8" />
              </Button>
            )}
          </div>
          
          {/* Bottom controls */}
          <div className="space-y-2">
            {/* Scrubber */}
            <Slider 
              value={[currentTime]} 
              max={duration || 100}
              step={0.1}
              onValueChange={(value) => {
                if (videoRef.current) {
                  videoRef.current.currentTime = value[0];
                }
              }}
              className="cursor-pointer"
            />
            
            {/* Control buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button 
                  size="icon"
                  variant="ghost" 
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                
                <Button 
                  size="icon"
                  variant="ghost" 
                  onClick={() => skip(-10)}
                >
                  <SkipBack className="h-5 w-5" />
                </Button>
                
                <Button 
                  size="icon"
                  variant="ghost" 
                  onClick={() => skip(10)}
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    size="icon"
                    variant="ghost" 
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </Button>
                  
                  <Slider 
                    value={[isMuted ? 0 : volume * 100]} 
                    max={100}
                    onValueChange={(value) => {
                      setVolume(value[0] / 100);
                      setIsMuted(value[0] === 0);
                    }}
                    className="w-20"
                  />
                </div>
                
                <span className="text-sm text-gray-300">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button size="icon" variant="ghost">
                  <Subtitles className="h-5 w-5" />
                </Button>
                
                <Button 
                  size="icon"
                  variant="ghost" 
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? (
                    <Minimize className="h-5 w-5" />
                  ) : (
                    <Maximize className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
