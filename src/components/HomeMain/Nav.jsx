import "../../styles/home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMusic, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div>
      <div className="nav">
        <div className="nav_links">
          <img src={logo} />

          <Link to="/">Home</Link>
          <Link to="/popular">Popular</Link>
          <Link>Explore</Link>
        </div>
      </div>
      <div className="nav_icon">
        <div className="nav_icon_links">
          <img src={logo} />
          <Link to="/">
            <div className="nav_icon_item">
              <FontAwesomeIcon icon={faHouse} className="fa_navIcon" />
            </div>
          </Link>
          <Link to="/popular">
            <div className="nav_icon_item">
              <FontAwesomeIcon icon={faStar} className="fa_navIcon" />
            </div>
          </Link>

          <Link>
            <div className="nav_icon_item">
              <FontAwesomeIcon icon={faMusic} className="fa_navIcon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
