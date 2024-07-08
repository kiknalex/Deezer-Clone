import { sprinkles } from "@/styles/sprinkles.css";
import VolumeControl from "./VolumeControl/VolumeControl";
import { useContext } from "react";
import { MusicContext, MusicContextType } from "@/app/App";

const AudioControls = () => {
  const { audioRef } = useContext(MusicContext) as MusicContextType;
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
