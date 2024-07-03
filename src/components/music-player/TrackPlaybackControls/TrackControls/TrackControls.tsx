import { ButtonHoverableWithTooltip } from "@/components/util-components/Buttons/ButtonHoverableWithTooltip";
import {
  playButton,
  commonButton,
} from "@/components/util-components/Buttons/ButtonHoverableWithTooltip.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { Track } from "@/types/deezerApiTypes";
import TrackPreview from "./TrackPreview/TrackPreview";
import { useContext } from "react";
import { MusicContext, MusicContextType } from "@/app/App";

interface TrackControlsProps {
  togglePlay: () => void;
  isPlaying: boolean;
  tracks: Track[];
  currentTrackId: number;
}

const TrackControls = ({
  togglePlay,
  isPlaying,
  tracks,
}: TrackControlsProps) => {
  const { currentTrackIndex, handleTrackPrevious, handleTrackNext } =
    useContext(MusicContext) as MusicContextType;
  return (
    <div
      className={`${sprinkles({
        display: "flex",
        gap: "size-2",
        placeItems: "center",
      })}`}
    >
      <ButtonHoverableWithTooltip
        onClick={handleTrackPrevious}
        tooltipInteractive={true}
        tooltipContent={<TrackPreview track={tracks[currentTrackIndex - 1]} />}
        className={`${commonButton}`}
      >
        <span className={`${sprinkles({ fontSize: "font-size-5" })}`}>
          <i className="fa-solid fa-backward-step"></i>
        </span>
      </ButtonHoverableWithTooltip>
      <button onClick={togglePlay} className={`${playButton} `}>
        {isPlaying ? (
          <span
            className={`${sprinkles({
              color: "white",
              fontSize: "font-size-4",
            })}`}
          >
            <i className="fa-solid fa-pause"></i>
          </span>
        ) : (
          <span
            className={`${sprinkles({
              color: "white",
              fontSize: "font-size-4",
            })}`}
          >
            <i className={"fa-solid fa-play"}></i>
          </span>
        )}
      </button>
      <ButtonHoverableWithTooltip
        onClick={handleTrackNext}
        tooltipInteractive={true}
        tooltipContent={<TrackPreview track={tracks[currentTrackIndex + 1]} />}
      >
        <span className={`${sprinkles({ fontSize: "font-size-5" })}`}>
          <i className="fa-solid fa-forward-step"></i>
        </span>
      </ButtonHoverableWithTooltip>
    </div>
  );
};

export default TrackControls;
