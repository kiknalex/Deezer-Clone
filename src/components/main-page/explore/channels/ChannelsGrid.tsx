import { container } from "@/app/App.css";
import { gridLayout } from "./ChannelsGrid.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { ReactElement } from "react";

interface ChannelsGridProps {
  category: string;
  children: ReactElement;
}

const ChannelsGrid = ({ category, children }: ChannelsGridProps) => {
  return (
    <section>
      <h2 className={`${sprinkles({ paddingY: "size-5" })} ${container}`}>
        {category}
      </h2>
      <div className={`${container} ${gridLayout}`}>
        {children}
      </div>
    </section>
  );
};

export default ChannelsGrid;
