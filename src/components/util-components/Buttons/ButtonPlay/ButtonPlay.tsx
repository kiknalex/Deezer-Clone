import { baseButton, buttonIcon } from "./ButtonPlay.css";

interface ButtonPlayProps {
  isPlaying: boolean;
  className: string;
  ariaLabel: string;
  onClick: () => void;
}

const ButtonPlay = ({ isPlaying, className, onClick, ariaLabel }: ButtonPlayProps) => {
  return (
    <button onClick={onClick} className={`${baseButton} ${className}`} aria-label={ariaLabel}>
      {isPlaying ? (
        <span className={`${buttonIcon}`}>
          <i className="fa-solid fa-pause"></i>
        </span>
      ) : (
        <span className={`${buttonIcon}`}>
          <i className={"fa-solid fa-play"}></i>
        </span>
      )}
    </button>
  );
};

export default ButtonPlay;
