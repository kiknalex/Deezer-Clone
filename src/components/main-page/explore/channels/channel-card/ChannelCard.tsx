import { Link } from "react-router-dom";
import { card } from "./ChannelCard.css";

interface ChannelCardProps {
    to: string,
    children: string,
}

const ChannelCard = ({ to, children }: ChannelCardProps) => {
  function getRandomColor() {
    let hue;
    do {
      hue = Math.floor(Math.random() * 360);
    } while ((hue >= 30 && hue <= 60) || (hue >= 90 && hue <= 150));

    const saturation = 70;
    const lightness = Math.random() * 10 + 40;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  return (
    <Link to={to} className={card} style={{ background: getRandomColor() }}>
      {children}
    </Link>
  );
};
export default ChannelCard;
