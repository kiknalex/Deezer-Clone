import { useState, useRef } from "react";
import { TrackInfo } from "./TrackInfo/TrackInfo";
import { playerLayout, playerPosition } from "./Player.css";
import { sprinkles } from "../../styles/sprinkles.css";
import useSubscribeAudioEvents from "../../hooks/useSubscribeAudioEvents";
import { Track } from "../../types/deezerApiTypes";
import TrackPlaybackControls from "./TrackPlaybackControls/TrackPlaybackControls";
import AudioControls from "./AudioControls/AudioControls";
import { vars } from "../../app/theme.css";
const Player = ({ tracks }: { tracks: Track[] }) => {
  const [currentTrackId, setCurrentTrackId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  console.log("rerender");
  useSubscribeAudioEvents(
    audioRef,
    () => {
      if (isPlaying) {
        audioRef.current?.play();
      }
    },
    "canplaythrough"
  );

  useSubscribeAudioEvents(
    audioRef,
    () => {
      if (currentTrackId < tracks.length - 1) {
        setCurrentTrackId((sti) => sti + 1);
      }
    },
    "ended"
  );

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
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

          {audioRef.current && (
            <div
              className={`${sprinkles({
                paddingX: "size-3",
              })} ${playerLayout} ${playerPosition}`}
            >
              <TrackInfo track={tracks[currentTrackId]} />
              <TrackPlaybackControls
                handlePreviousClick={handlePreviousClick}
                togglePlay={togglePlay}
                handleNextClick={handleNextClick}
                isPlaying={isPlaying}
                audioRef={audioRef}
              />
              <AudioControls />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Player;
