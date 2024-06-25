import { container } from "@/app/App.css";
import { gridLayout } from "./ChannelsGrid.css";
import ChannelCard from "./channel-card/ChannelCard";
import { sprinkles } from "@/styles/sprinkles.css";

interface ChannelsGridProps {
  category: string;
}

const ChannelsGrid = ({ category }: ChannelsGridProps) => {
  return (
    <section>
      <h2 className={`${sprinkles({ paddingY: "size-5" })} ${container}`}>
        {category}
      </h2>
      <div className={`${container} ${gridLayout}`}>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Hi</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
        <ChannelCard to="/">Metal Rock</ChannelCard>
      </div>
    </section>
  );
};

export default ChannelsGrid;
