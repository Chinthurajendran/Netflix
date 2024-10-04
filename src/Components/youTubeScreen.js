import React, { useContext, useEffect } from 'react';
import YouTube from 'react-youtube'; 
import { YoutubeContexs } from '../YoutubeContexs'; 

function YouTubeScreen() {
  const { youTubeVideo } = useContext(YoutubeContexs); 


  const opts = {
    height: window.innerHeight, 
    width: window.innerWidth,    
    playerVars: {
      autoplay: 1,
      fs: 1,  
    },
  };

  useEffect(() => {
 
    const handleResize = () => {
      opts.height = window.innerHeight;
      opts.width = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.src = '';  
      }
    };
  }, []);

  if (!youTubeVideo) {
    return <div>Loading video...</div>; 
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <YouTube videoId={youTubeVideo.key} opts={opts} />
    </div>
  );
}

export default YouTubeScreen;
