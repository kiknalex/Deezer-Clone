type NoArgVoidFunction = () => void;

export const debounce = (func: NoArgVoidFunction, wait: number): NoArgVoidFunction => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(), wait);
    };
  };

  export const encodeForURL = (text: string) => {
    return encodeURIComponent(text.toLowerCase().replace(/ /g, ''));
}

export const secondsToHours = (seconds: number) => {
  if(seconds <= 3600) return `${Math.round(seconds / 60)} minutes`;

  return `${Math.round(seconds / 3600)} hours ${Math.round(seconds / 60) % 60} minutes`

}