import { ContainerPlaylist, TitlePlaylist,TextPlaylist,SubTitlePlaylist,ContainerMusicPlaylist,ButtonViewMusic,MusicName} from "./Style"
import useSong from "../../hooks/useSong"

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
                        songs.map(element => {
                            return <MusicName><abbr title={element.title}>{element.title}</abbr></MusicName>
                        })
                    }
                </ContainerMusicPlaylist>
                <ButtonViewMusic>Ver Músicas</ButtonViewMusic>
            </ContainerPlaylist>
        </>
    )
} 