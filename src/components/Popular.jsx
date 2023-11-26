import "../styles/myList.css";
import "../styles/home.css";
import "../styles/popular.css";
import Nav from "./HomeMain/Nav";
import Search from "./Search/Search";
import Lyric from "./HomeMain/Lyric";
import User from "./User";

export default function Popular() {
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
