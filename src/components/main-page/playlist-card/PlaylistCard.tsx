import { Link } from "react-router-dom";
import { cardImg } from "./PlaylistCard.css";

const PlaylistCard = ({imgSrc}: {imgSrc: string}) => {
    return (
        <div>
            <img className={cardImg} src={imgSrc} alt="" />
            
        </div>
    )
}

export default PlaylistCard;