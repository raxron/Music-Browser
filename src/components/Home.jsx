import "../styles/home.css";
import { useState } from "react";
import User from "./User";
import Search from "./Search/Search";
import { Link } from "react-router-dom";
import Nav from "./HomeMain/Nav";
import Lyric from "./HomeMain/Lyric";

export default function Home() {
  return (
    <div className="home">
      <div>
        <Nav />
      </div>
      <div className="search-container">
        <Search />
      </div>
      <div className="lyric-container">
        <Lyric />
      </div>
      <div className="user-container">
        <User />
      </div>
    </div>
  );
}
