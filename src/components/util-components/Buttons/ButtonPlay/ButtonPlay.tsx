import { baseButton, buttonIcon } from "./ButtonPlay.css";

interface ButtonPlayProps {
  isPlaying: boolean;
  className: string;
  onClick: () => void;
}

const ButtonPlay = ({ isPlaying, className, onClick }: ButtonPlayProps) => {
  return (
    <button onClick={onClick} className={`${baseButton} ${className}`}>
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
