import { RefObject, createContext, useRef, useState } from "react";
import { app } from "./App.css";
import { darkTheme, lightTheme, loggedIn } from "./theme.css";

import { TrackData, Track } from "@/types/deezerApiTypes"; // Assuming Track type is defined

import Player from "@/components/music-player/Player";
import Sidebar from "@/components/sidebar/Sidebar";
import { useLoaderData } from "react-router-dom";
import Header from "@/components/header/Header";
import Mainpage from "@/components/main-page/Mainpage";
import { getTracklistPromise } from "@/utils/fetchers";

export type MusicContextType = {
  tracks: Track[];
  currentTrackIndex: number;
  currentTracklist: string | null;
  isPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  handleTracklistChange: (tracklist: string) => Promise<void>;
  handleTrackNext: () => void;
  handleTrackPrevious: () => void;
  startPlay: () => void;
  stopPlay: () => void;
  togglePlay: () => void;
};
export const MusicContext = createContext<MusicContextType | null>(null);

const App = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const [tracks, setTracks] = useState<Track[]>(loaderData.albumData.tracks.data);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTracklist, setCurrentTracklist] = useState<string | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({
    current: null,
    previous: null,
    next: null,
  });
  const [darkMode, setDarkMode] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  const handleTracklistChange = async (tracklist: string) => {
    const newTracks = (await getTracklistPromise(tracklist)) as {
      data: Track[];
    };
    console.log(newTracks);
    if (newTracks.data.length > 0) {
      const filteredData = newTracks.data.filter(
        (track: Track) => track.preview
      );
      setTracks(filteredData);
      setCurrentTracklist(tracklist);
      setCurrentTrackIndex(0);
    }
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
  const stopPlay = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.pause();
    setIsPlaying(false);
  };

  const startPlay = () => {
    if (!navigator.userActivation.hasBeenActive) return; // checks if user has interacted at least once with the document

    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.play();
    setIsPlaying(true);
  };
  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    isPlaying ? stopPlay() : startPlay();
  };
  const contextValue = {
    tracks,
    currentTrackIndex,
    currentTracklist,
    isPlaying,
    audioRef,
    handleTracklistChange,
    handleTrackNext,
    handleTrackPrevious,
    startPlay,
    stopPlay,
    togglePlay,
  };
  return (
    <div className={`${app} ${darkMode ? darkTheme : lightTheme} ${loggedIn}`}>
      <Header onClick={handleDarkModeClick} darkMode={darkMode} />
      <MusicContext.Provider value={contextValue}>
        {tracks.length > 0 && <Player />}
        <Mainpage />
      </MusicContext.Provider>
      <Sidebar />
    </div>
  );
};

export default App;
