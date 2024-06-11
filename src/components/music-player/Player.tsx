import { useState, useRef } from "react";
import Button from "../Buttons/Button";
import { TrackInfo } from "./TrackInfo/TrackInfo";
import { baseButton, playButton } from "../Buttons/Button.css";
import { playerLayout, playerPosition } from "./Player.css";
import useSubscribeAudioEvents from "../../hooks/useSubscribeAudioEvents";
import PlaybackInfo from "./PlaybackInfo/PlaybackInfo";
import { Track } from "../../types/deezerApiTypes";

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
            <div className={`${playerLayout} ${playerPosition}`}>
              <TrackInfo track={tracks[currentTrackId]} />
              <div>
                <div>
                  <Button
                    onClick={handlePreviousClick}
                    className={`${baseButton}`}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={togglePlay}
                    className={`${baseButton} ${playButton} `}
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button onClick={handleNextClick} className={`${baseButton}`}>
                    Next
                  </Button>
                </div>
                {audioRef.current && (
                  <div>
                    <PlaybackInfo audioRef={audioRef} />
                  </div>
                )}
              </div>
              <div></div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Player;
