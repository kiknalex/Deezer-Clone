import { ButtonHoverableWithTooltip } from "@/components/util-components/Buttons/ButtonHoverableWithTooltip";
import {
  playButton,
  commonButton,
} from "@/components/util-components/Buttons/ButtonHoverableWithTooltip.css";
import { sprinkles } from "@/styles/sprinkles.css";
import TrackPreview from "./TrackPreview/TrackPreview";
import { useContext } from "react";
import { MusicContext, MusicContextType } from "@/components/main-page/Mainpage";
import ButtonPlay from "@/components/util-components/Buttons/ButtonPlay/ButtonPlay";

const TrackControls = () => {
  const {
    isPlaying,
    prevTrack,
    nextTrack,
    togglePlay,
    handleTrackPrevious,
    handleTrackNext,
  } = useContext(MusicContext) as MusicContextType;
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
        tooltipContent={<TrackPreview track={prevTrack} />}
        className={`${commonButton}`}
      >
        <span className={`${sprinkles({ fontSize: "font-size-5" })}`}>
          <i className="fa-solid fa-backward-step"></i>
        </span>
      </ButtonHoverableWithTooltip>
      <ButtonPlay
        className={playButton}
        onClick={togglePlay}
        isPlaying={isPlaying}
      />
      <ButtonHoverableWithTooltip
        onClick={handleTrackNext}
        tooltipInteractive={true}
        tooltipContent={<TrackPreview track={nextTrack} />}
      >
        <span className={`${sprinkles({ fontSize: "font-size-5" })}`}>
          <i className="fa-solid fa-forward-step"></i>
        </span>
      </ButtonHoverableWithTooltip>
    </div>
  );
};

export default TrackControls;
