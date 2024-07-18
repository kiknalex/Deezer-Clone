import { sprinkles } from "@/styles/sprinkles.css";
import { baseButton } from "./ButtonPlay.css";

interface ButtonPlayProps {
    isPlaying: boolean;
    className: string;
    onClick: () => void;
}

const ButtonPlay = ({ isPlaying, className = baseButton, onClick }: ButtonPlayProps) => {
  return (
    <button onClick={onClick} className={className}>
      {isPlaying ? (
        <span
          className={`${sprinkles({
            color: "white",
            fontSize: "font-size-4",
          })}`}
        >
          <i className="fa-solid fa-pause"></i>
        </span>
      ) : (
        <span
          className={`${sprinkles({
            color: "white",
            fontSize: "font-size-4",
          })}`}
        >
          <i className={"fa-solid fa-play"}></i>
        </span>
      )}
    </button>
  );
};

export default ButtonPlay;
