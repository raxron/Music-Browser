import "../../styles/home.css";
import { useState } from "react";
import soundFx from "../../public/soundfx.svg";
import music from "../../public/music.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function SongFx() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="nav_musicContainer">
      <div className="nav_soundFx">
        <img src={soundFx} />
      </div>
      <div className="nav_song">
        <div className="nav_song_info">
          <img src={music} />
          <div>
            <h3>SongName</h3>
            <p>Artist</p>
          </div>
        </div>
        <div>
          {liked ? (
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              className="fa_heart"
              onClick={handleLike}
            />
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              className="fa_heart"
              onClick={handleLike}
            />
          )}
        </div>
      </div>
    </div>
  );
}
