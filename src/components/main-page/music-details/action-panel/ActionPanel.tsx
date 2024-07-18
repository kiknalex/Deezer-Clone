import { MusicContext, MusicContextType } from "@/app/App";
import { buttonAction, buttonList } from "./ActionPanel.css";
import { useContext } from "react";
import ButtonPlay from "@/components/util-components/Buttons/ButtonPlay/ButtonPlay";

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
          isPlaying={isPlaying}
          className={buttonAction}
        />
      </li>
    </ul>
  );
};

export default ActionPanel;