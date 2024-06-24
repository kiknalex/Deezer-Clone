import { vars } from "@/app/theme.css";
import { ButtonHoverableWithTooltip } from "@/components/util-components/Buttons/ButtonHoverableWithTooltip";
import { sprinkles } from "@/styles/sprinkles.css";
import { useState } from "react";
import { RefObject } from "react";
import {
  activeVolumeTrack,
  volumeInput,
  volumeInputWrapper,
  volumeTrack,
} from "./VolumeControl.css";

const VolumeControl = ({
  audioRef,
}: {
  audioRef: RefObject<HTMLAudioElement>;
}) => {
  const [volume, setVolume] = useState<number>(100);
  const [lastVolume, setLastVolume] = useState<number>(0);
  const audioElement = audioRef.current!;
  const toggleMute = () => {
    if (volume > 0) {
      setLastVolume(volume);
      setVolume(0);
      audioElement.volume = lastVolume / 100;
    } else if (volume === 0 && lastVolume === 0) {
      setVolume(50);
      audioElement.volume = 0.5;
    } else {
      setVolume(lastVolume);
      setLastVolume(volume);
      audioElement.volume = lastVolume / 100;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    audioElement.volume = newVolume / 100;
  };

  const inputElement = (
    <div className={sprinkles({ padding: "size-5" })}>
      <div className={`${volumeInputWrapper} ${volumeTrack}`}>
        <div
          style={{
            width: `${volume}%`,
          }}
          className={`${volumeTrack} ${activeVolumeTrack}`}
        ></div>

        <input
          className={`${volumeInput} ${sprinkles({ width: "100" })}`}
          type="range"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
  return (
    <ButtonHoverableWithTooltip
      tooltipInteractive={true}
      tooltipContent={inputElement}
      onClick={toggleMute}
      popoutDelay={100}
    >
      <span
        style={{
          color:
            volume <= 0
              ? vars.colorsVars.buttonImportant
              : vars.colorsVars.buttonCommon,
        }}
        className={`${sprinkles({ fontSize: "font-size-3" })}`}
      >
        <i
          className={`fa-solid ${
            volume > 0 ? "fa-volume-high" : "fa-volume-xmark"
          }`}
        ></i>
      </span>
    </ButtonHoverableWithTooltip>
  );
};

export default VolumeControl;
