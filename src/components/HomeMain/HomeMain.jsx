import "./../../styles/homeMain.css";
import MyList from "./MyList";
import Lyric from "./Lyric";

export default function HomeMain() {
  return (
    <div className="main_container">
      <div className="main_title">
        <h1>I want to</h1>
        <h1>recommend...</h1>
        <h3>Type here to add new songs to your lists...</h3>
      </div>
      <div className="main_lists">
        <MyList />
        <Lyric />
      </div>
    </div>
  );
}
