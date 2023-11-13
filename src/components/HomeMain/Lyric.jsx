import "../../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCirclePause } from "@fortawesome/free-regular-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function Lyric() {
  return (
    <div className="music">
      <div className="music_controls">
        <FontAwesomeIcon icon={faRepeat} />
        <FontAwesomeIcon icon={faForwardStep} flip="horizontal" />
        <div className="music_playPause">
          <FontAwesomeIcon icon={faCirclePlay} />
          <FontAwesomeIcon icon={faCirclePause} />
        </div>
        <FontAwesomeIcon icon={faForwardStep} />
        <FontAwesomeIcon icon={faShuffle} />
      </div>
      <div>
        <div className="music_bar">
          <span></span>
        </div>
        <div>
          <p>1:25</p>
        </div>
        <div>
          <p>3:15</p>
        </div>
      </div>
    </div>
  );
}
