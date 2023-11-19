import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getPlaylistsFromUser } from '../services/playlist';
import { isAuthenticated } from '../utils/isAuthenticated';
import { useNavigate } from 'react-router-dom';
import { CardPlaylist } from '../components/CardPlaylist/CardPlaylist';
import { NewPlaylists } from './Styles/Styles';

export function FeedPage() {
    const [playlists, setPlaylists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        isAuthenticated(navigate);
        fetchPlaylists();
    }, [navigate]);

    const fetchPlaylists = async () => {
        try {
            const response = await getPlaylistsFromUser();
            setPlaylists(response.data.playlists);
        } catch (error) {
            console.error('Erro ao buscar playlists:', error);
        }
    };

    return (
        <div>
            <h1>My Playlist</h1>
            <NewPlaylists>
                {Array.isArray(playlists) &&
                    playlists.map((playlist, index) => (
                        <CardPlaylist
                            name={playlist._name}
                            description={playlist._description}
                            songs={playlist._songs}
                        />
                    ))}
            </NewPlaylists>
        </div>
    );
}

export default FeedPage;
