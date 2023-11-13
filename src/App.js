import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import Search from "./components/Search/Search";
import Popular from "./components/Popular";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:playlistId" element={<Playlist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </BrowserRouter>
  );
}
