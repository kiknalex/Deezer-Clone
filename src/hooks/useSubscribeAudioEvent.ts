import { useCallback, useSyncExternalStore } from "react";

const useSubscribeAudioEvent = (
  audioRef: React.RefObject<HTMLAudioElement>,
  callback: () => void,
  eventName: keyof HTMLElementEventMap
) => {
  const subscribe = useCallback(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return () => {};
    audioElement.addEventListener(eventName, callback);
    return () => {
      audioElement.removeEventListener(eventName, callback);
    };
  }, [audioRef, eventName, callback]);

  const getSnapshot = useCallback(() => {
    return audioRef.current;
  }, [audioRef]);

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default useSubscribeAudioEvent;
