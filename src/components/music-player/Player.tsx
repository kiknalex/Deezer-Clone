import { useState, useRef, useCallback } from "react";
import TrackInfo from "./TrackInfo/TrackInfo";
import { playerLayout, playerPosition } from "./Player.css";
import { sprinkles } from "../../styles/sprinkles.css";
import useSubscribeAudioEvent from "../../hooks/useSubscribeAudioEvent";
import { Track } from "../../types/deezerApiTypes";
import TrackPlaybackControls from "./TrackPlaybackControls/TrackPlaybackControls";
import AudioControls from "./AudioControls/AudioControls";
import PlaybackInfo from "./TrackPlaybackControls/PlaybackInfo/PlaybackInfo";
import TrackControls from "./TrackPlaybackControls/TrackControls/TrackControls";
const Player = ({ tracks }: { tracks: Track[] }) => {
  const [currentTrackId, setCurrentTrackId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useSubscribeAudioEvent(
    audioRef,
    useCallback(() => {
      if (audioRef.current?.readyState > 2) {
        audioRef.current?.play();
      }
    }, [audioRef]),
    "loadeddata"
  );
  useSubscribeAudioEvent(
    audioRef,
    useCallback(() => {
      if (currentTrackId < tracks.length - 1) {
        setCurrentTrackId((cti) => cti + 1);
      }
    }, [currentTrackId, tracks]),
    "ended"
  );
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
          <audio ref={audioRef} src={tracks[currentTrackId].preview}></audio>

          {audioRef.current !== null ? (
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
                />
                <PlaybackInfo
                  audioRef={audioRef}
                  handleNextClick={handleNextClick}
                />
              </TrackPlaybackControls>
              <AudioControls />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default Player;
