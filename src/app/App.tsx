import { useEffect, useState } from "react";
import { container } from "./App.css";
import { darkTheme, lightTheme } from "./theme.css";
import Player from "../components/music-player/Player";
import Sidebar from "../components/sidebar/Sidebar";
import { MusicData, Track } from "../types/deezerApiTypes"; // Assuming Track type is defined

const proxy = "https://corsproxy.io/?";

const App = () => {
  const [playlist, setPlaylist] = useState<MusicData | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  console.log(playlist);
  useEffect(() => {
    fetch(proxy + "https://api.deezer.com/album/302127")
      .then((response) => response.json())
      .then((data: MusicData) => {
        console.log(data);
        setPlaylist(data);
        // Filter tracks with preview 
        if (data.tracks && data.tracks.data) {
          setTracks(data.tracks.data.filter((track: Track) => track.preview !== ""));
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={`${container} ${darkMode ? darkTheme : lightTheme}`}>
      <button onClick={() => setDarkMode(!darkMode)}>dark mode</button>
      <Sidebar />
      <div>{tracks.length > 0 && <Player tracks={tracks} />}</div>
    </div>
  );
};

export default App;
