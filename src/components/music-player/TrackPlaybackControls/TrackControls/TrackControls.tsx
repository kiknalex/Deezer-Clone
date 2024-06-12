import Button from "../../../Buttons/Button";
import { playButton, commonButton } from "../../../Buttons/Button.css";
import { ControlsLayout } from "./TrackControls.css";
import { sprinkles } from "../../../../styles/sprinkles.css";

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
        paddingRight: "size-5",
      })} ${ControlsLayout}`}
    >
      <Button onClick={handlePreviousClick} className={`${commonButton}`}>
        <span className={`${sprinkles({fontSize: "font-size-5"})}`}>
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
      <Button onClick={handleNextClick} className={`${commonButton}`}>
        <span className={`${sprinkles({fontSize: "font-size-5"})}`}>
          <i className="fa-solid fa-forward-step"></i>
        </span>
      </Button>
    </div>
  );
};

export default TrackControls;
