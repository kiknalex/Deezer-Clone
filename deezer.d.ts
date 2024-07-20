export interface DeezerAPI {
  init(config: { appId?: string; channelUrl: string }): void;
  api(path: string, callback: (response) => void): void;
}


declare global {
  interface Window {
    DZ: DeezerAPI;
  }
}