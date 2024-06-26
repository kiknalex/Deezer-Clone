import LoaderSpin from "@/components/util-components/loader-spin/LoaderSpin";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const ChannelPage = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Suspense fallback={<LoaderSpin />}>
        <Await resolve={data}>
          {([genreRadios, genreArtists, editorialReleases]) => {
            console.log(genreRadios, "asd", editorialReleases);
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default ChannelPage;
