import { container } from "@/app/App.css";
import { ArtistCard } from "@/components/main-page/playlist-card/PlaylistCard";
import Carousel from "@/components/util-components/carousel/Carousel";
import LoaderSpin from "@/components/util-components/loader-spin/LoaderSpin";
import { Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";

const SearchPage = () => {
  const params = useParams();
  const data = useLoaderData();
  return (
    <div className={container}>
      <Suspense fallback={<LoaderSpin />}>
        <Await resolve={data.data}>
          {({ artists, albums }) => {
            console.log(artists.data);
            return (
              <>
                <section className={container}>
                  <Carousel
                    heading="Artists"
                    slides={artists.data.map((artist) => {
                      return <ArtistCard {...artist} imgSrc={artist.picture_medium} title={artist.name} tracklist={artist.tracklist} />;
                    })}
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

export default SearchPage;
