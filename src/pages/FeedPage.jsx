import React, { useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../services/playlist';
import { isAuthenticated } from '../utils/isAuthenticated';
import { useNavigate } from 'react-router-dom';
import { CardPlaylist } from '../components/CardPlaylist/CardPlaylist';
import { NewPlaylists } from './Styles/Styles';
import { Header } from '../components/Header/Header';
import CardMusic from '../components/CardMusic/CardMusic';

export function FeedPage() {
    const [playlists, setPlaylists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        isAuthenticated(navigate);
        fetchPlaylists();
        //TODO Criar o service para bucar as musicas
    }, [navigate]);

    const fetchPlaylists = async () => {
        try {
            const response = await getPlaylistsFromUser();
            setPlaylists(response.data.playlists);
        } catch (error) {
            console.error('Erro ao buscar playlists:', error);
        }
    };
    //TODO criar os carroseis com as msicas e as playlists
    return (
        <>
            <Header />
            <div>
                <h1>Playlist</h1>
                <NewPlaylists>
                    {Array.isArray(playlists) &&
                        playlists.map((playlist, index) => (
                            <CardPlaylist
                                key={playlist._id}
                                name={playlist._name}
                                description={playlist._description}
                                songs={playlist._songs}
                            />
                        ))}
                </NewPlaylists>
                <CardMusic/>
            </div>
        </>
    );
    //TODO acrescentar o footer a aplicação
}

export default FeedPage;
