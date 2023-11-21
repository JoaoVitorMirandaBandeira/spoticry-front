import { useEffect, useState } from "react"
import { MusicArtist, MusicContainer, MusicName, Thumbnail } from "./Style"
import { ButtonCard } from "../../styles/Styles";

const CardMusic = (props) => {
    const [idThumbnail,setIdThumbnail] = useState()
    const getIdThumbnail = () => {
        const urlSplit = props.url.split('?v=')
        const id = urlSplit[1].split("&")
        setIdThumbnail(id[0])
    }
    useEffect(() => {
        getIdThumbnail()
    },[])
    
    //TODO => criar o card sem a dependencia da api por enquanto
    return(
        <MusicContainer>
            <Thumbnail src={`https://img.youtube.com/vi/${idThumbnail}/mqdefault.jpg`} alt="Thumbnail do video"/>
            <MusicName>{props.title}</MusicName>
            <MusicArtist>{props.artist}</MusicArtist>
            <ButtonCard>Adicionar a playlisy</ButtonCard>
        </MusicContainer>
    )
}

export default CardMusic