import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPlaylistsFromUser } from "../services/playlist";
import { isAuthenticated } from "../utils/isAuthenticated";
import { useNavigate } from "react-router-dom";

export function FeedPage() {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    isAuthenticated(navigate);
    fetchPlaylists();
  },[navigate]);

  const fetchPlaylists = async () => {
    try {
      const response = await getPlaylistsFromUser();
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.error("Erro ao buscar playlists:", error);
    }
  };

  return (
    <div>
      <h1>My Playlist</h1>
      <ul>
        {Array.isArray(playlists) &&
          playlists.map((playlist,index) => (
            <li key={playlist._id}>{index+1} {playlist._name} </li>
          ))}
      </ul>
    </div>
  );
}

export default FeedPage;
