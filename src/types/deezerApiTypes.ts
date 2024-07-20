export interface TrackData {
  id: number;
  title: string;
  description: string;
  duration: number;
  public: boolean;
  is_loved_track: boolean;
  collaborative: boolean;
  nb_tracks: number;
  fans: number;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  md5_image: string;
  picture_type: string;
  creator: Creator;
  type: string;
  tracks: Tracks;
}

export interface Creator {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}

export interface Tracks {
  data: Track[];
  checksum: string;
}

export interface Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version?: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  time_add: number;
  picture_xl?: string;
  picture_big?: string;
  picture_medium?: string;
  picture_small?: string;
  artist: Artist;
  album?: Album;
  type: string;
}

export interface Artist {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  link?: string;
  tracklist: string;
  type: "artist";
}

export interface Album {
  id: number;
  title: string;
  artist: Artist;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  tracks?: { data: Track[] };
  type: "album";
}

export interface Playlist {
  id: number;
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  tracks?: { data: Track[] };
  creation_date: string;
  md5_image: string;
  picture_type: string;
  user: User;
  type: "playlist";
}

export interface Genre {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: "genre";
}
export interface Radio {
  id: number;
  md5_image: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  title: string;
  tracklist: string;
  type: "radio";
}

interface User {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}

export interface Release {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  release_date: string;
  tracklist: string;
  artist: Artist;
  type: string;
}
