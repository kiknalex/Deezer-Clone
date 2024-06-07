import { useRef, useEffect } from "react";


const Player = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Create a script element to load the YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Function called by YouTube IFrame API when it's ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
          playsinline: 1,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING && !playerRef.current.done) {
        setTimeout(() => {
          playerRef.current.stopVideo();
        }, 6000);
        playerRef.current.done = true;
      }
    };

    // Cleanup the effect
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
  <div id="player"></div>
  <button onClick={() => playerRef.current.seekTo(playerRef.current.getCurrentTime() - 15)}>-15S</button>
  <button onClick={() => playerRef.current.playVideo()}>Play</button>
  <button onClick={() => playerRef.current.seekTo(playerRef.current.getCurrentTime() + 15)}>+15S</button>
  </div>
);
};
export default Player;
