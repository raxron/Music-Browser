import { useParams } from "react-router-dom";
import "../styles/styles.css";
import data from "../data/data.json";

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
        <img src={playlist.image} alt={`Playlist ${playlist.playlist}`} />
        <p>Creator: {playlist.creator}</p>

        <h2>Songs:</h2>
        <ul>
          {playlist.song.map((song, j) => (
            <li key={j}>
              {song.name} - {song.artist} - {song.album}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
