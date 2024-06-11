import Button from "../../Buttons/Button";
import { baseButton, playButton } from "../../Buttons/Button.css";

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
    <div>
      <Button onClick={handlePreviousClick} className={`${baseButton}`}>
        Previous
      </Button>
      <Button onClick={togglePlay} className={`${baseButton} ${playButton} `}>
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <Button onClick={handleNextClick} className={`${baseButton}`}>
        Next
      </Button>
    </div>
  );
};

export default TrackControls;
