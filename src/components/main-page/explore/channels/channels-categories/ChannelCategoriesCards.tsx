import ChannelCard from "@/components/main-page/explore/channels/channel-card/ChannelCard";
import { encodeForURL } from "@/utils/helpers";

const genres = [
  "Pop",
  "Rap/Hip Hop",
  "Rock",
  "Dance",
  "R&B",
  "Alternative",
  "Electro",
  "Folk",
  "Reggae",
  "Jazz",
  "Classical",
  "Metal",
  "Soul & Funk",
  "African Music",
  "Asian Music",
  "Blues",
];

const ChannelGenreCards = () => {
  return (
    <>
      {genres.map((genre, index) => (
        <ChannelCard key={index} to={`/channels/${encodeForURL(genre)}`}>
          {genre}
        </ChannelCard>
      ))}
    </>
  );
};

export default ChannelGenreCards;
