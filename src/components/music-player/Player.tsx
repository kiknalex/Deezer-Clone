import { useState, useRef } from "react";

import { playerLayout, playerPosition } from "./Player.css";
import { sprinkles } from "@/styles/sprinkles.css";

import TrackPlaybackControls from "./TrackPlaybackControls/TrackPlaybackControls";
import AudioControls from "./AudioControls/AudioControls";
import PlaybackInfo from "./TrackPlaybackControls/PlaybackInfo/PlaybackInfo";
import TrackControls from "./TrackPlaybackControls/TrackControls/TrackControls";
import TrackInfo from "./TrackInfo/TrackInfo";
import { Track } from "@/types/deezerApiTypes";

const Player = ({ tracks }: { tracks: Track[] }) => {
  const [currentTrackId, setCurrentTrackId] = useState(0);
  const [audioReady, setAudioReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleLoadedData = () => {
    if (audioRef.current && audioRef.current.readyState > 2) {
      setAudioReady(true);
      audioRef.current?.play();
    }
  }
  const handleEnded = () => {
    if (currentTrackId < tracks.length - 1) {
      setCurrentTrackId((cti) => cti + 1);
    }
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

  const handlePreviousClick = () => {
    if (currentTrackId > 0) {
      setCurrentTrackId((cti) => cti - 1);
      setIsPlaying(true);
    }
  };

  const handleNextClick = () => {
    if (currentTrackId < tracks.length - 1) {
      setCurrentTrackId((cti) => cti + 1);
      setIsPlaying(true);
    }
  };

  return (
    <>
      {tracks && tracks.length > 0 && (
        <>
          <audio
            onLoadedData={handleLoadedData}
            onEnded={handleEnded}
            ref={audioRef}
            src={tracks[currentTrackId].preview}
          ></audio>

          {audioReady ? (
            <div
              style={{ minWidth: "700px" }}
              className={`${sprinkles({
                paddingX: "size-3",
              })} ${playerLayout} ${playerPosition}`}
            >
              <TrackInfo track={tracks[currentTrackId]} />
              <TrackPlaybackControls>
                <TrackControls
                  handlePreviousClick={handlePreviousClick}
                  togglePlay={togglePlay}
                  handleNextClick={handleNextClick}
                  isPlaying={isPlaying}
                  tracks={tracks}
                  currentTrackId={currentTrackId}
                />
                <PlaybackInfo
                  audioRef={audioRef}
                  handleNextClick={handleNextClick}
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
