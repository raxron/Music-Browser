import "../../styles/lyric.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCirclePause } from "@fortawesome/free-regular-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SongFx from "../HomeMain/SongFx";
export default function Lyric() {
  const [pause, setPause] = useState(false);
  const handlePause = () => {
    setPause((isPause) => !isPause);
  };
  return (
    <div className="music_container">
      <div>
        <SongFx />
      </div>
      <div className="music">
        <div className="music_controls">
          <FontAwesomeIcon icon={faRepeat} className="fa_icons" />
          <FontAwesomeIcon
            icon={faForwardStep}
            flip="horizontal"
            className="fa_icons"
          />
          <div className="music_playPause">
            {!pause ? (
              <FontAwesomeIcon
                icon={faCirclePlay}
                className="fa_icons_l fa_icons_play"
                onClick={handlePause}
              />
            ) : (
              <FontAwesomeIcon
                icon={faCirclePause}
                className="fa_icons_l fa_icons_pause"
                onClick={handlePause}
              />
            )}
          </div>
          <FontAwesomeIcon icon={faForwardStep} className="fa_icons" />
          <FontAwesomeIcon icon={faShuffle} className="fa_icons" />
        </div>

        <div className="music_bar">
          <span></span>
        </div>

        <div className="music_time">
          <p>1:25</p>
          <p>3:15</p>
        </div>
      </div>
      <div>
        <SongFx />
      </div>
    </div>
  );
}
