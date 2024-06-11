import { useSyncExternalStore } from "react";

const useSubscribeAudioEvents = (
  audioRef: React.RefObject<HTMLAudioElement>,
  callback: () => void,
  eventName: keyof HTMLElementEventMap
) => {
  const subscribe = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return () => {};

    audioElement.addEventListener(eventName, callback);
    return () => {
      audioElement.removeEventListener(eventName, callback);
    };
  };

  const getSnapshot = () => {
    return audioRef.current;
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default useSubscribeAudioEvents;
