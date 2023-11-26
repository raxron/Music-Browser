import React, { useState } from "react";
import "../../styles/homeMain.css";
import MyList from "./MyList";
import myImage from "../../public/music.jpg";

export default function HomeMain() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (editIndex !== null) {
      const updatedLists = [...lists];
      updatedLists[editIndex].items[0].title = inputValue;
      setLists(updatedLists);
      setEditIndex(null);
      setInputValue("");
    } else {
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
    }
  };

  const handleEditButtonClick = (index) => {
    setEditIndex(index);
    setInputValue(lists[index].items[0].title);
  };

  const handleDeleteButtonClick = (index) => {
    setLists((prevLists) => prevLists.filter((_, i) => i !== index));
    setEditIndex(null);
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
        {editIndex !== null ? (
          <button className="add_button" onClick={handleButtonClick}>
            Save
          </button>
        ) : (
          <button className="add_button" onClick={handleButtonClick}>
            Add
          </button>
        )}
      </div>
      <div className="main_lists">
        {lists.length > 0 && (
          <div className="list_section_direct">
            <h3 className="my_list_title">My List</h3>
            <div className="main_lists_itemContainer">
              <ul className="main_lists_item">
                {lists.map((list, index) => (
                  <li key={index}>
                    <img
                      className="main_lists_item_content"
                      src={list.items[0].image}
                      alt="Default"
                    />
                    <div>
                      {editIndex === index ? (
                        <div>
                          <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type here..."
                          />
                        </div>
                      ) : (
                        <div>
                          <h3>{list.items[0].title}</h3>
                          <p>{list.items[0].artist}</p>
                          <button
                            className="purple-button"
                            onClick={() => handleEditButtonClick(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="purple-button"
                            onClick={() => handleDeleteButtonClick(index)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
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
