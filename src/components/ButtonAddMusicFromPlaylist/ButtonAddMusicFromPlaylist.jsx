import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Popup, PopupContainer, Close, MusicContaner, OverflowContainer, AddMusic } from './Style';
import { faClose, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getAllMusic } from '../../services/music';
import { Loading } from '../Loading/Loading';
import { addMusicFromPlaylist } from '../../services/playlist';

export const ButtonAddMusicFromPlaylist = ({ playlistId }) => {
    const [isActivated, setIsActivated] = useState(false);
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [erro, setErro] = useState();

    const activatedPopup = () => {
        console.log('Clicou...');
        setIsActivated(!isActivated);
    };

    const addPlaylist = (musicId) => {
        try {
            addMusicFromPlaylist(playlistId,musicId)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isActivated) {
            getSongs();
        }
    }, [isActivated]);

    const getSongs = async () => {
        try {
            setIsLoading(true);
            const response = await getAllMusic();
            setSongs(response.data.songs);
            setIsLoading(false);
        } catch (error) {
            setErro(error);
            setIsLoading(false);
        }
    };
    return (
        <>
            <Button onClick={activatedPopup}>
                <FontAwesomeIcon icon={faPlus} /> Musicas
            </Button>
            {isActivated && (
                <Popup>
                    <PopupContainer>
                        <Close onClick={activatedPopup}>
                            <FontAwesomeIcon icon={faClose} />
                        </Close>
                        {isLoading && <Loading />}
                        {!isLoading && (
                            <>
                                <OverflowContainer>
                                    {songs?.map(e => {
                                        return (
                                            <MusicContaner key={e.id}>
                                                <p>{e.title}</p>
                                                <AddMusic onClick={() => addPlaylist(e.id)}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </AddMusic>
                                            </MusicContaner>
                                        );
                                    })}
                                </OverflowContainer>
                            </>
                        )}
                    </PopupContainer>
                </Popup>
            )}
        </>
    );
};
