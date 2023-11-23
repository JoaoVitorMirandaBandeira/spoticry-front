import styled from "styled-components";

const colors = {
    dark: "#454545",
    white: "#FFFFFF"
}

export const  ContainerPlaylist = styled.div`
    width: 250px;
    height:290px;
    background-color: ${colors.dark};
    color: ${colors.white}  !important;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;

`

export const TitlePlaylist = styled.h3`
    color: ${colors.white};
    font-size: 1.5rem;
    font-weight: 600;
    text-align:center;
`

export const TextPlaylist = styled.p`
    font-size: 0.9rem;
    font-weight: 300;
    font-style: italic;
    color: ${colors.white};
    text-align:center;
`

export const SubTitlePlaylist = styled.h4`
    font-size: 1.25rem;
    font-weight: 500;
    font-style: italic;
    color: ${colors.white};
    text-align:center;
`

export const ContainerMusicPlaylist = styled.div`
    width: 230px;
    height: 118px;
    flex-shrink: 0;
    background-color: ${colors.white};
    border-radius: 10px;
    padding: 5px 5px;
    overflow-y: scroll; /* Adicionando overflow-y para aplicar apenas à direção vertical */
  
  /* Personalização do scrollbar */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray; /* Cor do thumb (a parte móvel do scrollbar) */
    border-radius: 5px; /* Borda arredondada do thumb */
  }

`

export const MusicName = styled.p`
    font-size: 0.9rem;
    font-weight: 300;
    font-style: italic;
    width: 210px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`