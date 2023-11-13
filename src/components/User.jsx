import "./../styles/styles.css";
import "./../styles/user.css";
import { useState, useEffect, useRef } from "react";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";
import userPic from "../../public/user-pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
export default function User() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const shuffled = data.music.sort(() => Math.random() - 0.5);
    const random = shuffled.slice(0, 4);
    setPlaylists(random);
  }, []);

  return (
    <div className="user">
      <div className="user_statusBar">
        <button>
          <FontAwesomeIcon icon={faAddressCard} className="fa_icon" />
        </button>
        <button>
          <FontAwesomeIcon icon={faBell} className="fa_icon" />
        </button>
        <button>
          <FontAwesomeIcon icon={faEllipsisVertical} className="fa_icon" />
        </button>
      </div>
      <div className="user_profile">
        <div className="user_profile_imgBox">
          <img src={userPic} alt="user picture" />
          <div className="user_profile_background"></div>
        </div>
        <div className="user_profile_info">
          <h3>DJ Sona</h3>
          <p>@dj_sona123</p>
        </div>
      </div>
      <div className="user_playlists">
        <div className="user_playlists_title">
          <h3>Your Playlists</h3>
          <p>See all</p>
        </div>
        <div>
          {playlists.map((p) => (
            <Link key={p.id} to={`/playlist/${p.id}`} className="playlist_item">
              <div className="user_playlists_item">
                <img src={p.image} alt={`Playlist ${p.id + 1}`} />
                <div>
                  <h3>{p.playlist}</h3>
                  <p>{`${p.song.length} songs`}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
