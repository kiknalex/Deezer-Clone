import { container } from "@/app/App.css";
import {
  AlbumCard,
  ArtistCard,
  PlaylistCard,
} from "@/components/main-page/music-card/MusicCard";
import Carousel from "@/components/util-components/carousel/Carousel";
import LoaderSpin from "@/components/util-components/loader-spin/LoaderSpin";
import { Album, Artist, Playlist, Release } from "@/types/deezerApiTypes";
import { homeLoaderData } from "@/utils/loaders";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const HomePage = () => {
  const data = useLoaderData() as homeLoaderData;
  return (
    <div>
      <Suspense fallback={<LoaderSpin />}>
        <Await resolve={data.data}>
          {({ selection, charts, releases, artists }) => {
            return (
              <>
                <section className={container}>
                  <Carousel
                    heading="Playlist Charts"
                    slides={charts.playlists.data.map((playlist: Playlist) => (
                      <PlaylistCard
                        imgSrc={playlist.picture_medium}
                        title={playlist.title}
                        numberOfTracks={playlist.nb_tracks}
                        tracklist={playlist.tracklist}
                        id={playlist.id}
                      />
                    ))}
                  />
                </section>
                <section className={container}>
                  <Carousel
                    heading="Editorial Selection"
                    slides={selection.data.map((selection: Album) => (
                      <AlbumCard
                        imgSrc={selection.cover_medium}
                        title={selection.title}
                        artist={selection.artist}
                        tracklist={selection.tracklist}
                        id={selection.id}
                      />
                    ))}
                  />
                </section>

                <section className={container}>
                  <Carousel
                    heading="Top Releases"
                    slides={releases.data.map((release: Release) => (
                      <AlbumCard
                        imgSrc={release.cover_medium}
                        title={release.title}
                        tracklist={release.tracklist}
                        artist={release.artist}
                        id={release.id}
                      />
                    ))}
                  />
                </section>
                <section className={container}>
                  <Carousel
                    heading="Top Artists"
                    slides={artists.data.map((artist: Artist) => (
                      <ArtistCard
                        imgSrc={artist.picture_medium}
                        title={artist.name}
                        tracklist={artist.tracklist}
                        id={artist.id}
                      />
                    ))}
                  />
                </section>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default HomePage;
