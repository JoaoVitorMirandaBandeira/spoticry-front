import { ContainerPlaylist, TitlePlaylist,TextPlaylist,SubTitlePlaylist,ContainerMusicPlaylist,MusicName} from "./Style"
import useSong from "../../hooks/useSong"
import { ButtonCard } from "../../styles/Styles";
import { Link } from "react-router-dom";

export const CardPlaylist = (props) => {
    const [songs,loading,erro] = useSong(props.songs);
    return (
        <>
            <ContainerPlaylist>
                <TitlePlaylist>{props.name}</TitlePlaylist>
                <TextPlaylist>{props.description}</TextPlaylist>
                <SubTitlePlaylist>Musicas:</SubTitlePlaylist>
                <ContainerMusicPlaylist>
                    {Array.isArray(songs) &&
                        songs.map((element) => {
                            return <MusicName key={element.id}><abbr title={element.title}>{element.title}</abbr></MusicName>
                        })
                    }
                </ContainerMusicPlaylist>
                <ButtonCard><Link to={`/playlist/${props.id}`}>Ver Músicas</Link></ButtonCard>
            </ContainerPlaylist>
        </>
    )
} 