import { ButtonHoverableWithTooltip } from "@/components/util-components/Buttons/ButtonHoverableWithTooltip";
import {
  playButton,
  commonButton,
} from "@/components/util-components/Buttons/ButtonHoverableWithTooltip.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { Track } from "@/types/deezerApiTypes";
import TrackPreview from "./TrackPreview/TrackPreview";

interface TrackControlsProps {
  handlePreviousClick: () => void;
  togglePlay: () => void;
  handleNextClick: () => void;
  isPlaying: boolean;
  tracks: Track[];
  currentTrackId: number;
}

const TrackControls = ({
  handlePreviousClick,
  togglePlay,
  handleNextClick,
  isPlaying,
  tracks,
  currentTrackId,
}: TrackControlsProps) => {
  return (
    <div
      className={`${sprinkles({
        display: "flex",
        gap: "size-2",
        placeItems: "center",
      })}`}
    >
      <ButtonHoverableWithTooltip
        onClick={handlePreviousClick}
        tooltipInteractive={true}
        tooltipContent={<TrackPreview track={tracks[currentTrackId - 1]} />}
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
        onClick={handleNextClick}
        tooltipInteractive={true}
        tooltipContent={<TrackPreview track={tracks[currentTrackId + 1]} />}
      >
        <span className={`${sprinkles({ fontSize: "font-size-5" })}`}>
          <i className="fa-solid fa-forward-step"></i>
        </span>
      </ButtonHoverableWithTooltip>
    </div>
  );
};

export default TrackControls;
