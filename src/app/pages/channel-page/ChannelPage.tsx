import Carousel from "@/components/util-components/carousel/Carousel";
import LoaderSpin from "@/components/util-components/loader-spin/LoaderSpin";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import {
  PlaylistCard,
  ArtistCard,
  AlbumCard,
} from "@/components/main-page/music-card/MusicCard";
import { Artist, Playlist, Release } from "@/types/deezerApiTypes";
import { channelLoaderData } from "@/utils/loaders";
import { container } from "@/app/App.css";

const ChannelPage = () => {
  const { data } = useLoaderData() as channelLoaderData;

  return (
    <div>
      <Suspense fallback={<LoaderSpin />}>
        <Await resolve={data}>
          {({ genreArtists, editorialReleases, chartPlaylists, genreName }) => (
            <>
              <h1 className={container}>{genreName}</h1>
              {chartPlaylists.data.length > 0 && (
                <section className={container}>
                  <Carousel
                    heading="Playlists"
                    slides={chartPlaylists.data.map((playlist: Playlist) => (
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
              )}
              {genreArtists.data.length > 0 && (
                <section className={container}>
                  <Carousel
                    heading="Artists"
                    slides={genreArtists.data.map((artist: Artist) => (
                      <ArtistCard
                        imgSrc={artist.picture_medium}
                        title={artist.name}
                        tracklist={artist.tracklist}
                        id={artist.id}
                      />
                    ))}
                  />
                </section>
              )}
              {editorialReleases.data.length > 0 && (
                <section className={container}>
                  <Carousel
                    heading="Editorial Releases"
                    slides={editorialReleases.data.map((release: Release) => (
                      <AlbumCard
                        imgSrc={release.cover_medium}
                        title={release.title}
                        artist={release.artist}
                        releaseDate={release.release_date}
                        tracklist={release.tracklist}
                        id={release.id}
                      />
                    ))}
                  />
                </section>
              )}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default ChannelPage;
