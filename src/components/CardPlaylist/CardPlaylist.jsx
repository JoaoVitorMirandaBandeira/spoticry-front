import { ContainerPlaylist, TitlePlaylist,TextPlaylist,SubTitlePlaylist,ContainerMusicPlaylist,ButtonViewMusic } from "./Style"

export const CardPlaylist = () => {
    return (
        <>
            <ContainerPlaylist>
                <TitlePlaylist>So as Brabas</TitlePlaylist>
                <TextPlaylist>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</TextPlaylist>
                <SubTitlePlaylist>Musicas:</SubTitlePlaylist>
                <ContainerMusicPlaylist>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </ContainerMusicPlaylist>
                <ButtonViewMusic>Ver Músicas</ButtonViewMusic>
            </ContainerPlaylist>
        </>
    )
} 