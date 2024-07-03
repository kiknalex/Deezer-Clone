import Carousel from "@/components/util-components/carousel/Carousel";
import LoaderSpin from "@/components/util-components/loader-spin/LoaderSpin";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import {
  PlaylistCard,
  ArtistCard,
  AlbumCard,
} from "@/components/main-page/playlist-card/PlaylistCard";
import { container } from "@/app/App.css";
import { Artist, Playlist, Radio, Release } from "@/types/deezerApiTypes";
import { genrePageLoaderData } from "@/utils/loaders";

const ChannelPage = () => {
  const { data } = useLoaderData() as genrePageLoaderData;

  return (
    <div>
      <Suspense fallback={<LoaderSpin />}>
        <Await resolve={data}>
          {({
            genreRadios,
            genreArtists,
            editorialReleases,
            chartPlaylists,
            genreName,
          }) => (
            <>
              <h1 className={container}>{genreName}</h1>
              <section className={container}>
                <Carousel
                  heading="Playlists"
                  slides={chartPlaylists.data.map((playlist: Playlist) => (
                    <PlaylistCard
                      imgSrc={playlist.picture_medium}
                      title={playlist.title}
                      numberOfTracks={playlist.nb_tracks}
                      tracklist={playlist.tracklist}
                    />
                  ))}
                />
              </section>
              <section className={container}>
                <Carousel
                  heading="Artists"
                  slides={genreArtists.data.map((artist: Artist) => (
                    <ArtistCard
                      imgSrc={artist.picture_medium}
                      title={artist.name}
                      tracklist={artist.tracklist}
                    />
                  ))}
                />
              </section>
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
                    />
                  ))}
                />
              </section>
              <section className={container}>
                <Carousel
                  slides={genreRadios.data.map((radio: Radio) => (
                    <PlaylistCard imgSrc={radio.picture_medium} tracklist={radio.tracklist} />
                  ))}
                  heading="Radios"
                />
              </section>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default ChannelPage;
