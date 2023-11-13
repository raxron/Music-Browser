import "../../styles/lyric.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCirclePause } from "@fortawesome/free-regular-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faRepeat, faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SongFx from "../HomeMain/SongFx";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export default function Lyric() {
  const [pause, setPause] = useState(false);
  const [value, setValue] = useState(30);
  const handlePause = () => {
    setPause((isPause) => !isPause);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <div className="music_volume">
        <Box sx={{ width: 125 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <FontAwesomeIcon icon={faVolumeLow} className="fa_icons_s" />
            <Slider
              size="small"
              aria-label="Small"
              value={value}
              onChange={handleChange}
              sx={{
                color: "var(--secondary-color)",
              }}
            />
          </Stack>
        </Box>
      </div>
    </div>
  );
}
