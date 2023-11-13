import "../styles/myList.css";
import MyList from "./HomeMain/MyList"
import { Link } from "react-router-dom";


export default function Popular() {
  
  return (
    <div className="main_lists_itemContainer">
        <div></div>
      <MyList/>
    </div>
  );
}
