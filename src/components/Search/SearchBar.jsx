import "../../styles/searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchBar = React.forwardRef(
  ({ onFocus, onClick, handleSearch }, ref) => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };

    return (
      <div className="search_container">
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={onClick}
          className="fa_left"
        />
        <div className="search_Bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa_search" />
          <input
            type="text"
            id="search"
            placeholder="Explore"
            ref={ref}
            onFocus={onFocus}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  },
);

export default SearchBar;
