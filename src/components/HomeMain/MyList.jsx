import "./../../styles/myList.css";
import data from "../../../data/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyList() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    setPlaylists(data.music);
  }, []);

  return (
    <div className="main_lists_itemContainer">
      <h3>Popular</h3>
      <div className="main_lists_item">
        {playlists.map((p) => (
          <Link
            key={p.id}
            to={`/playlist/${p.id}`}
            className="main_lists_item_content"
          >
            <img src={p.image} alt={`Playlist ${p.id + 1}`} />
            <h3>{p.playlist}</h3>
            <p>{p.creator}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
