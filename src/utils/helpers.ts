type NoArgVoidFunction = () => void;

export const debounce = (
  func: NoArgVoidFunction,
  wait: number
): NoArgVoidFunction => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(), wait);
  };
};

export const encodeForURL = (text: string) => {
  return encodeURIComponent(text.toLowerCase().replace(/ /g, ""));
};

export const secondsToHours = (seconds: number) => {
  if (seconds <= 3600) return `${Math.round(seconds / 60)} minutes`;

  return `${Math.round(seconds / 3600)} hours ${
    Math.round(seconds / 60) % 60
  } minutes`;
};

export const formatTime = (time: number) => {
  // format: 00:00
  if (isNaN(time)) {
    return "00:00";
  }
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export const unixToDateString = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
