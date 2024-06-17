import { sprinkles } from "@/styles/sprinkles.css";

const TrackPlaybackControls = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${sprinkles({
        display: "flex",
        flexDirection: "column",
        width: "33",
        alignItems: "center",
      })}`}
    >
      {children}
    </div>
  );
};

export default TrackPlaybackControls;
