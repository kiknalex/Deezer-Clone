import { useEffect, useState } from "react";
import { app, container } from "./App.css";
import { darkTheme, lightTheme } from "./theme.css";

import { MusicData, Track } from "@/types/deezerApiTypes"; // Assuming Track type is defined

import Player from "@/components/music-player/Player";
import Sidebar from "@/components/sidebar/Sidebar";
import { useLoaderData } from "react-router-dom";

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

  return (
    <div className={`${container} ${app} ${darkMode ? darkTheme : lightTheme}`}>
      <button onClick={() => setDarkMode(!darkMode)}>dark mode</button>
      <Sidebar />

      <div>{tracks.length > 0 && <Player tracks={tracks} />}</div>
    </div>
  );
};

export default App;
