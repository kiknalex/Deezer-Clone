import { useState, useRef, useEffect } from "react";
import Button from "../Buttons/Button";
import { TrackInfo } from "./TrackInfo/TrackInfo";
import { baseButton, playButton } from "../Buttons/Button.css";
import { playerLayout, playerPosition } from "./Player.css";
const Player = ({ tracks }) => {
  const [currentTrackId, setCurrentTrackId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    console.log(tracks);
  });

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <>
      {tracks && (
        <>
          <audio ref={audioRef} src={tracks[currentTrackId].preview}></audio>

          <div className={`${playerLayout} ${playerPosition}`}>
            <TrackInfo
              album={tracks[currentTrackId].album}
              artist={tracks[currentTrackId].artist}
            />
            <div>
              <Button
                onClick={togglePlay}
                className={`${baseButton} ${playButton} `}
              />
            </div>
            <div></div>
          </div>
        </>
      )}
    </>
  );
};
export default Player;
