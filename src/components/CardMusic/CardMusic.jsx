import { useState } from "react"
import { MusicArtist, MusicContainer, MusicName, Thumbnail } from "./Style"
import { ButtonCard } from "../../styles/Styles";

const CardMusic = (props) => {
    const [idThumbnail,setIdThumbnail] = useState()
    const getIdThumbnail = () => {
        const urlSplit = props.url.split('?v=')
        const id = urlSplit[1]
        setIdThumbnail(id)
    }
    //TODO => criar o card sem a dependencia da api por enquanto
    return(
        <MusicContainer>
            <Thumbnail src="https://img.youtube.com/vi/rO2z8DE_RYw/maxresdefault.jpg" alt="Thumbnail do video"/>
            <MusicName>Como Que Ocê pode Abandoná Eu?</MusicName>
            <MusicArtist>Pedra Leticia</MusicArtist>
            <ButtonCard>Adicionar a playlisy</ButtonCard>
        </MusicContainer>
    )
}

export default CardMusic