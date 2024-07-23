import { useCallback, useContext, useState } from "react";
import {
  activeTrack,
  sliderTrack,
  timePassedInput,
  hoverTimeDiv,
} from "./PlaybackInfo.css";
import { sprinkles } from "@/styles/sprinkles.css";
import useSubscribeBrowserEvent from "@/hooks/useSubscribeBrowserEvent";
import { MusicContext, MusicContextType } from "@/components/main-page/Mainpage";
import { formatTime } from "@/utils/helpers";

const PlaybackInfo = () => {
  const [playedTime, setPlayedTime] = useState(0);
  const [hoverTime, setHoverTime] = useState<{
    time: number | null;
    positionX: number;
  }>({ time: null, positionX: 0 });
  const { audioRef, handleTrackNext } = useContext(MusicContext) as MusicContextType;

  const audioElement = audioRef.current!;
  const handleTimeUpdate = useCallback(() => {
    // useCallback to save function reference to dynamically remove or add EventListener.
    setPlayedTime(audioElement.currentTime);
  }, [audioElement]);
  useSubscribeBrowserEvent(audioRef, handleTimeUpdate, "timeupdate");

  

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    // calculate current time hover box position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    let time = percent * audioElement.duration;
    if (time > audioElement.duration) time = audioElement.duration;
    else if (time < 1) time = 0;

    if (Math.round(time) === hoverTime.time) {
      return;
    }

    setHoverTime({ time: Math.round(time), positionX: x });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.currentTime = Number(playedTime);
    if (Number(e.currentTarget.value) >= audioElement.duration) {
      handleTrackNext();
    }
  };

  const handleMouseDown = () => {
    audioElement.removeEventListener("timeupdate", handleTimeUpdate);
  };

  const handleMouseLeave = () => {
    setHoverTime({ time: null, positionX: 0 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayedTime(Number(e.target.value));
  };

  return (
    <div
      className={`${sprinkles({
        display: "flex",
        placeItems: "center",
        position: "relative",
        width: "100",
      })}`}
    >
      <p
        className={`${sprinkles({
          paddingRight: "size-2",
          fontSize: "font-size-2",
        })}`}
      >
        {formatTime(playedTime)}
      </p>
      <div className={`${sliderTrack} ${sprinkles({ width: "100" })}`}>
        <div
          style={{
            width: `${(playedTime / audioElement.duration || 0) * 100}%`,
          }}
          className={`${sliderTrack} ${activeTrack}`}
        ></div>

        <input
          className={`${timePassedInput} ${sprinkles({ width: "100" })}`}
          aria-label="Track time"
          type="range"
          min="0"
          max={Math.round(audioElement.duration || 0)}
          value={playedTime}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          onChange={handleInputChange}
        />
        {hoverTime.time !== null ? (
          <div
            style={{ left: `${hoverTime.positionX}px` }}
            className={`${hoverTimeDiv}`}
          >
            <p className={sprinkles({ fontSize: "font-size-2" })}>
              {formatTime(hoverTime.time)}
            </p>
          </div>
        ) : null}
      </div>

      <p
        className={`${sprinkles({
          paddingLeft: "size-2",
          fontSize: "font-size-2",
        })}`}
      >
        {formatTime(Math.round(audioElement.duration || 0))}
      </p>
    </div>
  );
};

export default PlaybackInfo;
