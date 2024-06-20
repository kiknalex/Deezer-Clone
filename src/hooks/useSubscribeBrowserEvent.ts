import { useCallback, useSyncExternalStore } from "react";

const useSubscribeBrowserEvent = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  eventName: keyof HTMLElementEventMap
) => {
  const subscribe = useCallback(() => {
    const element = ref.current;
    if (!element) return () => {};
    element.addEventListener(eventName, callback);
    return () => {
      element.removeEventListener(eventName, callback);
    };
  }, [ref, eventName, callback]);

  const getSnapshot = useCallback(() => {
    return ref.current;
  }, [ref]);

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default useSubscribeBrowserEvent;
