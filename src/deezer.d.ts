interface Deezer {
  init(config: { appId?: string; channelUrl: string }): void;
  api(path: string, callback: (response) => void): void;
}

interface Window {
  DZ: Deezer;
}
