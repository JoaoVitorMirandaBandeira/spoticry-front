import { useEffect, useState } from 'react';
import { getPlaylistsFromUser } from '../services/playlist';
import { Loading } from '../components/Loading/Loading';
import { CardPlaylist } from '../components/CardPlaylist/CardPlaylist';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticated';

export const YourPlaylist = () => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        isAuthenticated(navigate);
        fetchPlaylistUser();
    }, [navigate]);

    const fetchPlaylistUser = async () => {
        try {
            setLoading(true);
            const response = await getPlaylistsFromUser();
            setPlaylists(response.data.playlists);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loading />}
            <h1>Suas Playlists</h1>
            {Array.isArray(playlists) &&
                playlists.map((playlist, index) => (
                    <CardPlaylist
                        key={playlist._id}
                        name={playlist._name}
                        description={playlist._description}
                        songs={playlist._songs}
                    />
                ))}
        </>
    );
};
