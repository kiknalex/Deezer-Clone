import { Link } from "react-router-dom";
import { card } from "./ChannelCard.css";

interface ChannelCardProps {
  to: string;
  children: string;
}

const ChannelCard = ({ to, children }: ChannelCardProps) => {
  function getRandomColor() {
    let hue;
    let lightness;

    do {
      hue = Math.floor(Math.random() * 360);
      lightness = Math.floor(Math.random() * 100); // Generate a random lightness value from 0 to 100
    } while (
      (hue >= 30 && hue <= 60) || // Exclude hues from 30 to 60 (yellow-green to yellow)
      (hue >= 90 && hue <= 150) || // Exclude hues from 90 to 150 (green to cyan)
      (hue >= 170 && hue <= 180) || // Exclude hues from 170 to 180 (cyan to blue)
      lightness < 20 ||
      lightness > 55 || // Exclude very dark and very light colors
      (hue >= 50 && hue <= 70) // Exclude very yellow
    );

    const saturation = 70;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  return (
    <Link to={to} className={card} style={{ background: getRandomColor() }}>
      {children}
    </Link>
  );
};
export default ChannelCard;
