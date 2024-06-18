import { sprinkles } from "@/styles/sprinkles.css";
import VolumeControl from "./VolumeControl/VolumeControl";
import { RefObject } from "react";

interface AudioControlsProps {
    audioRef: RefObject<HTMLAudioElement>;
}

const AudioControls = ({audioRef}: AudioControlsProps) => {
  return (
    <div
      className={sprinkles({
        width: "33",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      })}
    >
      <VolumeControl audioRef={audioRef} />
    </div>
  );
};

export default AudioControls;
