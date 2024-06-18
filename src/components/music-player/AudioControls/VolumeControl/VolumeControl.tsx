import { vars } from "@/app/theme.css";
import { ButtonHoverableWithTooltip } from "@/components/util-components/Buttons/Button";
import { sprinkles } from "@/styles/sprinkles.css";
import { useEffect, useState } from "react";
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
  const [volume, setVolume] = useState(100);

  const handleVolumeChange = (e) => {
    if (!audioRef.current) return;
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value / 100;
    console.log(e.target.value / 100);
  };
  const inputElement = (
    <div
      className={`${volumeInputWrapper} ${volumeTrack} ${sprinkles({
        width: "100",
      })}`}
    >
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
  );
  return (
    <ButtonHoverableWithTooltip
      tooltipInteractive={true}
      tooltipContent={inputElement}
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
