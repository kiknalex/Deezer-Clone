import {
  MusicContext,
  MusicContextType,
} from "@/components/main-page/Mainpage";
import { useContext } from "react";
import ButtonPlay from "@/components/util-components/Buttons/ButtonPlay/ButtonPlay";
import { buttonAction, buttonList } from "./ActionPanel.css";

interface ActionPanelProps {
  tracklist: string;
}

const ActionPanel = ({ tracklist }: ActionPanelProps) => {
  const tracklistQuery = tracklist.replace("https://api.deezer.com", "");
  const { currentTracklist, isPlaying, handleTracklistChange, togglePlay } =
    useContext(MusicContext) as MusicContextType;

  const handlePlayClick = () => {
    currentTracklist !== tracklistQuery
      ? handleTracklistChange(tracklistQuery)
      : togglePlay();
  };

  return (
    <ul className={buttonList}>
      <li>
        <ButtonPlay
          onClick={handlePlayClick}
          isPlaying={isPlaying && currentTracklist === tracklistQuery}
          className={buttonAction}
          ariaLabel={`Play tracklist`}
        />
      </li>
    </ul>
  );
};

export default ActionPanel;
