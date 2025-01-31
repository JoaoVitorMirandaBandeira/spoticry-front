import React, { useState, useEffect } from 'react';
import { getAllPlaylists } from '../services/playlist';
import { isAuthenticated } from '../utils/isAuthenticated';
import { useNavigate } from 'react-router-dom';
import { CardPlaylist } from '../components/CardPlaylist/CardPlaylist';
import { FlexOverflowContainer, Container, Title } from './Styles/Styles';
import { Header } from '../components/Header/Header';
import CardMusic from '../components/CardMusic/CardMusic';
import { getAllMusic } from '../services/music';
import { Loading } from '../components/Loading/Loading';
import { Footer } from '../components/Footer/Footer'

export function FeedPage() {
    const [playlists, setPlaylists] = useState([]);
    const [musics, setMusics] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        isAuthenticated(navigate);
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        setLoading(true);
        await fetchPlaylists();
        await fetchMusics();
        setLoading(false);
    };

    const fetchPlaylists = async () => {
        try {
            const response = await getAllPlaylists();
            setPlaylists(response.data.playlists);
        } catch (error) {
            console.error('Erro ao buscar playlists:', error);
        }
    };
    const fetchMusics = async () => {
        try {
            const response = await getAllMusic();
            setMusics(response.data.songs);
        } catch (error) {
            console.error('Erro ao buscar playlists:', error);
        }
    };

    return (
        <>
            {loading && <Loading />}
            <>
                <Header />
                <div>
                    <Container>
                        <Title>Playlist</Title>
                        <FlexOverflowContainer>
                            {Array.isArray(playlists) &&
                                playlists.map((playlist, index) => (
                                    <CardPlaylist
                                        key={playlist._id}
                                        name={playlist._name}
                                        description={playlist._description}
                                        songs={playlist._songs}
                                        id={playlist._id}
                                    />
                                ))}
                        </FlexOverflowContainer>
                    </Container>
                    <Container style={{backgroundColor:'#454545'}}>
                        <Title style={{color:"#FFF"}}>Músicas</Title>
                        <FlexOverflowContainer>
                            {Array.isArray(musics) &&
                                musics.map((music, index) => (
                                    <CardMusic
                                        key={music.id}
                                        url={music.url}
                                        title={music.title}
                                        artist={music.artist}
                                        musicId={music.id}
                                    />
                                ))}
                        </FlexOverflowContainer>
                    </Container>
                </div>
                <Footer/>
            </>
        </>
    );
}

export default FeedPage;
