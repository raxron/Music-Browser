import { useParams } from "react-router-dom";
import "../styles/playlist.css";
import data from "../data/data.json";
import Nav from "./HomeMain/Nav";

export default function Playlist() {
  const { playlistId } = useParams();
  const playlist = data.music.find((p) => p.id === parseInt(playlistId));

  if (!playlist) {
    return <div>Playlist not found</div>;
  }

  return (
    <div className="playlist_container">
      <div className="playlist_item">
        <h1>{playlist.playlist}</h1>
        <img
          src={playlist.image}
          alt={`Playlist ${playlist.playlist}`}
          className="playlist_image"
        />
        <div className="playlist_info">
          <h2>Creator: {playlist.creator}</h2>
          <h3>Songs:</h3>
        </div>
        <div className="playlist_songs">
          {playlist.song.map((song, j) => (
            <p key={j} className="songTitle">
              {song.name}
              <br />
              <p className="songArtist">
                {song.artist} - {song.album}
              </p>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
