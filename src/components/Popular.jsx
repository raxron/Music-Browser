import "../styles/myList.css";
import "../styles/home.css";
import "../styles/popular.css";
import MyList from "./HomeMain/MyList";
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
      <div className="popular_list">
        <MyList/>
        <Lyric />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
}
