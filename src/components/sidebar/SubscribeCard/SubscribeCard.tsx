import { sprinkles } from "@/styles/sprinkles.css";
import { card } from "./SubscribeCard.css";
import { ReactNode } from "react";

const SubscribeCard = ({ children }: {children: ReactNode}) => {
  return (
    <div
      className={`${sprinkles({
        paddingTop: "size-8",
        paddingX: "size-6",
      })}`}
    >
      <div
        className={`${sprinkles({
          display: "flex",
          flexDirection: "column",
          color: "white",
          padding: "size-6",
          fontSize: "font-size-2",
          borderRadius: "3px",
        })} ${card}`}
      >
        <p>{children}</p>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default SubscribeCard;
