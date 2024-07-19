import { container } from "@/app/App.css";
import ChannelGenreCards from "@/components/main-page/explore/channels/channels-categories/ChannelCategoriesCards";
import ChannelsGrid from "@/components/main-page/explore/channels/ChannelsGrid";

const ArtistDetailsPage = () => {
  return (
    <>
      <div className={container}>
        <h1>This page is under construction...</h1>
        <p>Please checkout other content.</p>
      </div>
      <ChannelsGrid category="Genre">
        <ChannelGenreCards />
      </ChannelsGrid>
    </>
  );
};

export default ArtistDetailsPage;
