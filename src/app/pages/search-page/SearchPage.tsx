import { container } from "@/app/App.css";
import ChannelsGrid from "@/components/main-page/explore/channels/ChannelsGrid";
import ChannelGenreCards from "@/components/main-page/explore/channels/channels-categories/ChannelCategoriesCards";
import {
  AlbumCard,
  ArtistCard,
} from "@/components/main-page/music-card/MusicCard";
import Carousel from "@/components/util-components/carousel/Carousel";
import { sprinkles } from "@/styles/sprinkles.css";
import { Album, Artist } from "@/types/deezerApiTypes";
import { SearchLoaderData } from "@/utils/loaders";
import { useLoaderData, useParams } from "react-router-dom";

const SearchPage = () => {
  const params = useParams();
  const data = useLoaderData() as SearchLoaderData;
  const artists = data.artists.data;
  const albums = data.albums.data;
  console.log(artists);
  return (
    <div>
      {artists.length > 0 && (
        <section className={container}>
          <Carousel
            heading="Artists"
            slides={artists.map((artist: Artist) => {
              return (
                <ArtistCard
                  {...artist}
                  imgSrc={artist.picture_medium}
                  title={artist.name}
                  tracklist={artist.tracklist}
                />
              );
            })}
          />
        </section>
      )}
      {albums.length > 0 && (
        <section className={container}>
          <Carousel
            heading="Albums"
            slides={albums.map((album: Album) => (
              <AlbumCard
                title={album.title}
                imgSrc={album.cover_medium}
                artist={album.artist}
                tracklist={album.tracklist}
                id={album.id}
              />
            ))}
          />
        </section>
      )}
      {!artists.length && !albums.length && (
        <section>
          <div className={container}>
            <h1>No results for "{params.searchQuery}"</h1>
            <h2 className={sprinkles({ fontSize: "font-size-3" })}>
              Why not explore some other options?
            </h2>
          </div>
          <ChannelsGrid category="Genres">
            <ChannelGenreCards />
          </ChannelsGrid>
        </section>
      )}
    </div>
  );
};

export default SearchPage;
