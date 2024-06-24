import { useEffect, useState } from "react";
import { app, container } from "./App.css";
import { darkTheme, lightTheme } from "./theme.css";

import { MusicData, Track } from "@/types/deezerApiTypes"; // Assuming Track type is defined

import Player from "@/components/music-player/Player";
import Sidebar from "@/components/sidebar/Sidebar";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "@/components/header/Header";

const proxy = "https://corsproxy.io/?";

const App = () => {
  const loaderData = useLoaderData() as MusicData;
  const [playlist, setPlaylist] = useState<MusicData | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (loaderData.tracks.data) {
      setTracks(loaderData.tracks.data);
    }
  }, [loaderData]);

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${container} ${app} ${darkMode ? darkTheme : lightTheme}`}>
      <Header handleDarkModeClick={handleDarkModeClick} />
      <Sidebar />
      {/* <div>{tracks.length > 0 && <Player tracks={tracks} />}</div> */}
      <Outlet />
    </div>
  );
};

export default App;
