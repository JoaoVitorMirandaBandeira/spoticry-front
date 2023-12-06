import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/isAuthenticated';
import { getPlaylistById } from '../services/playlist';
import useSong from '../hooks/useSong';
import { Loading } from '../components/Loading/Loading';
import { TableSongs } from '../components/TableSongs/TableSongs';
import { HeaderPage } from './Styles/Styles';
import { ButtonAddMusicFromPlaylist } from '../components/ButtonAddMusicFromPlaylist/ButtonAddMusicFromPlaylist';
import Cookies from 'js-cookie';

const SongsFromPlaylist = () => {
    const { id } = useParams();
    const [isUser, setIsUser] = useState(false);
    const [songs, loadingSongs, erro, updateSongsIds] = useSong([]);
    const [playlist, setPlaylist] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        isAuthenticated(navigate);
        fetchSongsFromPlaylists();
    }, [navigate]);

    const fetchSongsFromPlaylists = async () => {
        try {
            setLoading(true);
            const response = await getPlaylistById(id);
            setPlaylist(response.data.playlist);
            await updateSongsIds(response.data.playlist._songs);
            const _userId = response.data.playlist._userId;
            const cookies = Cookies.get('userId');
            setIsUser(_userId === cookies);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loading />}
            <Header />
            {id}
            <HeaderPage>
                <h2>{playlist?._name}</h2>
                {isUser && <ButtonAddMusicFromPlaylist playlistId={id} />}
            </HeaderPage>
            {!loadingSongs && <Loading />}
            {(songs && <TableSongs songs={songs} />) || erro}

            <Footer />
        </>
    );
};

export default SongsFromPlaylist;
