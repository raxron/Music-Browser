import React, { useState } from "react";
import "../../styles/homeMain.css";
import MyList from "./MyList";
import myImage from "../../public/music.jpg";

export default function HomeMain() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() !== "") {
      const newList = {
        name: "My List",
        items: [
          {
            title: inputValue,
            image: myImage,
            artist: "artist",
          },
        ],
      };

      setLists((prevLists) => [...prevLists, newList]);
      setInputValue("");
    }
  };

  return (
    <div className="main_container">
      <div className="main_title">
        <h1>I want to</h1>
        <h1>recommend...</h1>
      </div>
      <div className="additional_input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
        <span className="blink-cursor">|</span>
        <button className="add_button" onClick={handleAddButtonClick}>
          Add
        </button>
      </div>
      <div className="main_lists">
        {lists.length > 0 && (
          <div className="list_section_direct">
            <h3>My List</h3>
            <div className="main_lists_itemContainer">
              <ul className="main_lists_item">
                {lists.map((list, index) => (
                  <li key={index}>
                    <img
                      className="main_lists_item_content"
                      src={list.items[0].image}
                      alt="Default"
                    />
                    
                      <h3>{list.items[0].title}</h3>
                      <p>{list.items[0].artist}</p>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <MyList lists={lists} />
      </div>
    </div>
  );
}
