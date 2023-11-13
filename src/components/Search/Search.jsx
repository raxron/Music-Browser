import "./../../styles/search.css";
import { useState, useEffect, useRef } from "react";
import SearchRecommend from "./SearchRecommend";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";
import SearchBar from "./SearchBar";
import HomeMain from "../HomeMain/HomeMain";

export default function Search() {
  const inputRef = useRef();
  const [playlists, setPlaylists] = useState([]);
  const [load, setLoad] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setPlaylists(data.music);
  }, []);

  function handleSearch() {
    const term = inputRef.current.value.toLowerCase();
    setQuery(term);
    const filtered = data.music.filter((p) => {
      return (
        p.playlist.toLowerCase().includes(term) ||
        p.song.some(
          (s) =>
            s.name.toLowerCase().includes(term) ||
            s.artist.toLowerCase().includes(term)
        ) ||
        p.creator.toLowerCase().includes(term)
      );
    });
    setPlaylists(filtered);
    setLoad(filtered.length > 0);
  }

  const handleFocused = () => {
    setFocused(true);
  };

  const handleUnFocused = () => {
    setFocused(false);
  };

  return (
    <div className="container">
      <div className="main">
        <div className="main_itemContainer">
          <div className="main_search">
            <SearchBar
              onFocus={handleFocused}
              ref={inputRef}
              onClick={handleUnFocused}
              handleSearch={handleSearch}
            />
          </div>
          {!focused ? (
            <>
              <div>
                <HomeMain />
              </div>
            </>
          ) : (
            <div className="search_focus">
              <div>
                {load ? (
                  <div className="search_content_container">
                    {playlists.map((p) => (
                      <Link
                        key={p.id}
                        to={`/playlist/${p.id}`}
                        className="playlist_item"
                      >
                        <img src={p.image} alt={`Playlist ${p.id + 1}`} />
                        <h3>{p.playlist}</h3>
                        <p class="search_content_container_p">{p.creator}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div>
                    {query ? (
                      <div className="search_result">
                        <div className="search_result_error">
                          <FontAwesomeIcon
                            icon={faFaceSadCry}
                            className="fa_cry"
                          />
                          <h3>No matching... </h3>
                        </div>
                        <div>
                          <SearchRecommend />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <SearchRecommend />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
