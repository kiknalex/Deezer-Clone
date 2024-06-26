type NoArgVoidFunction = () => void;

export const debounce = (func: NoArgVoidFunction, wait: number): NoArgVoidFunction => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(), wait);
    };
  };

  export const encodeForURL = (text) => {
    return encodeURIComponent(text.toLowerCase().replace(/ /g, ''));
}
