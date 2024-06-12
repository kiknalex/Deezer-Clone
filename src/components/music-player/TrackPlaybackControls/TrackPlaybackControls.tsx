import PlaybackInfo from "./PlaybackInfo/PlaybackInfo";
import TrackControls from "./TrackControls/TrackControls";
import { RefObject } from "react";
interface TrackPlaybackControlsProps {
  handlePreviousClick: () => void;
  togglePlay: () => void;
  handleNextClick: () => void;
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
}

const TrackPlaybackControls = ({
  handlePreviousClick,
  togglePlay,
  handleNextClick,
  isPlaying,
  audioRef,
}: TrackPlaybackControlsProps) => {
  return (
    <div>
      <TrackControls
        handlePreviousClick={handlePreviousClick}
        togglePlay={togglePlay}
        handleNextClick={handleNextClick}
        isPlaying={isPlaying}
      />
      <PlaybackInfo audioRef={audioRef} />
    </div>
  );
};

export default TrackPlaybackControls;
