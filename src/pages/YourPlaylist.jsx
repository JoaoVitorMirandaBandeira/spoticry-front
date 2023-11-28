import { useEffect, useState } from 'react';
import { getPlaylistsFromUser } from '../services/playlist';
import { Loading } from '../components/Loading/Loading';
import { CardPlaylist } from '../components/CardPlaylist/CardPlaylist';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticated';
import InputSearch from '../components/InputSearch/InputSearch';
import { Header } from '../components/Header/Header';
import { SectionFlexRow, Button } from '../styles/Styles';
import { YourPlaylistContainer } from './Styles/Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
            <Header />
            <SectionFlexRow>
                <div className="flex-row">
                    <h1>Suas Playlists </h1>
                    <InputSearch placeholder="Digite o nome da playlist ....." />
                </div>
                <Button><FontAwesomeIcon icon={faPlus}/>  Adicionar Playlist</Button>
            </SectionFlexRow>
            <YourPlaylistContainer>
                {Array.isArray(playlists) &&
                    playlists.map((playlist, index) => (
                        <CardPlaylist
                            key={playlist._id}
                            name={playlist._name}
                            description={playlist._description}
                            songs={playlist._songs}
                        />
                    ))}
            </YourPlaylistContainer>
        </>
    );
};
