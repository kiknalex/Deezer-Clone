import { sprinkles } from "@/styles/sprinkles.css";
import {
  card,
  cardLink,
  hideOnBigScreen,
  hideOnSmallScreen,
} from "./SubscribeCard.css";
import { ReactNode } from "react";

interface SubscribeCard {
  href: string;
  children: ReactNode;
}

const SubscribeCard = ({ href, children }: SubscribeCard) => {
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
        })} ${card} ${hideOnSmallScreen}`}
      >
        <p>{children}</p>
        <a
          target="_blank"
          aria-label="Github"
          className={`${sprinkles({
            paddingY: "size-1",
            paddingX: "size-5",
            marginTop: "size-7",
            fontWeight: "font-weight-6",
            borderRadius: "8px",
          })} ${cardLink}`}
          href={href}
        >
          Github
        </a>
      </div>
      <div className={`${card} ${hideOnBigScreen}`}>
        <a
          target="_blank"
          aria-label="Github"
          className={`${sprinkles({
            display: "flex",
            placeItems: "center",
            paddingY: "size-3",
            fontWeight: "font-weight-6",
            borderRadius: "8px",
          })} `}
          href={href}
        >
          <span className={sprinkles({ fontSize: "font-size-6" })}>
            <i className="fa-brands fa-github"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default SubscribeCard;
