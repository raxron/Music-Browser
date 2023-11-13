import "../styles/home.css";
import { useState } from "react";
import User from "./User";
import Search from "./Search/Search";
import { Link } from "react-router-dom";
import soundFx from "../public/soundfx.svg";
import logo from "../public/logo.svg";
import music from "../public/music.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="home">
      <div className="nav">
        <div className="nav_links">
          <img src={logo} />
          <Link>Home</Link>
          <Link>Popular</Link>
          <Link>Explore</Link>
        </div>
        <div>
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
      </div>
      <div>
        <Search />
      </div>
      <div className="user">
        <User />
      </div>
    </div>
  );
}
