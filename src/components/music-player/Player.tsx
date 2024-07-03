import { useState, useRef, useContext } from "react";

import { playerLayout, playerPosition } from "./Player.css";
import { sprinkles } from "@/styles/sprinkles.css";

import TrackPlaybackControls from "./TrackPlaybackControls/TrackPlaybackControls";
import AudioControls from "./AudioControls/AudioControls";
import PlaybackInfo from "./TrackPlaybackControls/PlaybackInfo/PlaybackInfo";
import TrackControls from "./TrackPlaybackControls/TrackControls/TrackControls";
import TrackInfo from "./TrackInfo/TrackInfo";
import { Track } from "@/types/deezerApiTypes";
import { MusicContext, MusicContextType } from "@/app/App";

const Player = ({ tracks }: { tracks: Track[] }) => {
  const [audioReady, setAudioReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { currentTrackIndex, handleTrackNext } = useContext(
    MusicContext
  ) as MusicContextType;

  const handleLoadedData = () => {
    if (audioRef.current && audioRef.current.readyState > 2) {
      setAudioReady(true);
      // audioRef.current?.play();
      startPlay();
    }
  };
  const handleTrackEnded = () => {
    handleTrackNext();
  };

  const stopPlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  const startPlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play();
      setIsPlaying(true);
    }
  };
  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      stopPlay();
    } else {
      startPlay();
    }
  };

  return (
    <>
      {tracks && tracks.length > 0 && (
        <>
          <audio
            onLoadedData={handleLoadedData}
            onEnded={handleTrackEnded}
            ref={audioRef}
            src={tracks[currentTrackIndex].preview}
          ></audio>

          {audioReady ? (
            <div
              style={{ minWidth: "700px" }}
              className={`${sprinkles({
                paddingX: "size-3",
              })} ${playerLayout} ${playerPosition}`}
            >
              <TrackInfo track={tracks[currentTrackIndex]} />
              <TrackPlaybackControls>
                <TrackControls
                  togglePlay={togglePlay}
                  isPlaying={isPlaying}
                  tracks={tracks}
                />
                <PlaybackInfo
                  audioRef={audioRef}
                  // handleNextClick={handleNextClick}
                />
              </TrackPlaybackControls>
              <AudioControls audioRef={audioRef} />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default Player;
