import {
  Button,
  ButtonHoverableWithTooltip,
} from "@/components/util-components/Buttons/Button";
import {
  playButton,
  commonButton,
} from "@/components/util-components/Buttons/Button.css";
import { sprinkles } from "@/styles/sprinkles.css";

interface TrackControlsProps {
  handlePreviousClick: () => void;
  togglePlay: () => void;
  handleNextClick: () => void;
  isPlaying: boolean;
}

const TrackControls = ({
  handlePreviousClick,
  togglePlay,
  handleNextClick,
  isPlaying,
}: TrackControlsProps) => {
  return (
    <div
      className={`${sprinkles({
        display: "flex",
        gap: "size-2",
        placeItems: "center",
      })}`}
    >
      <Button onClick={handlePreviousClick} className={`${commonButton}`}>
        <span className={`${sprinkles({ fontSize: "font-size-5" })}`}>
          <i className="fa-solid fa-backward-step"></i>
        </span>
      </Button>
      <Button onClick={togglePlay} className={`${playButton} `}>
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
      </Button>
      <ButtonHoverableWithTooltip
        onClick={handleNextClick}
        tooltipContent={<div>Turn on shuffle</div>}
      >
        <span className={`${sprinkles({ fontSize: "font-size-5" })}`}>
          <i className="fa-solid fa-forward-step"></i>
        </span>
      </ButtonHoverableWithTooltip>
    </div>
  );
};

export default TrackControls;
