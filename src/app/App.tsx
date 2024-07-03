import { createContext, useEffect, useState } from "react";
import { app } from "./App.css";
import { darkTheme, lightTheme, loggedIn } from "./theme.css";

import { TrackData, Track } from "@/types/deezerApiTypes"; // Assuming Track type is defined

import Player from "@/components/music-player/Player";
import Sidebar from "@/components/sidebar/Sidebar";
import { useLoaderData } from "react-router-dom";
import Header from "@/components/header/Header";
import Mainpage from "@/components/main-page/Mainpage";
import { getTracksData } from "@/utils/fetchers";

export type MusicContextType = {
  tracks: Track[];
  currentTrackIndex: number;
  handleTracklistChange: (tracklist: string) => Promise<void>;
  handleTrackNext: () => void;
  handleTrackPrevious: () => void;
};

export const MusicContext = createContext<MusicContextType | null>(null);

const App = () => {
  const loaderData = useLoaderData() as TrackData;
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (loaderData.tracks.data) {
      setTracks(loaderData.tracks.data);
    }
  }, [loaderData]);
  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };
  const handleTracklistChange = async (tracklist: string) => {
    const newTracks = await getTracksData(tracklist);
    if (newTracks) {
      const filteredData = newTracks.data.filter(
        (track: Track) => track.readable && track.preview
      );
      setTracks(filteredData);
    }
    setCurrentTrackIndex(0);
  };
  const handleTrackNext = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex((cti) => cti + 1);
    }
  };
  const handleTrackPrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex((cti) => cti - 1);
    }
  };
  const contextValue = {
    tracks,
    currentTrackIndex,
    handleTracklistChange,
    handleTrackNext,
    handleTrackPrevious,
  };
  return (
    <div className={`${app} ${darkMode ? darkTheme : lightTheme} ${loggedIn}`}>
      <Header handleDarkModeClick={handleDarkModeClick} />
      <MusicContext.Provider value={contextValue}>
        {tracks.length > 0 && <Player tracks={tracks} />}
        <Mainpage />
      </MusicContext.Provider>
      <Sidebar />
    </div>
  );
};

export default App;
