import styled from "styled-components";

export const LoadingContainer = styled.div`
    position: fixed; /* Define a posição fixa em relação à janela de visualização */
    top: 0;
    left: 0;
    width: 100vw; /* Define a largura igual à largura da janela de visualização */
    height: 100vh; /* Define a altura igual à altura da janela de visualização */
    background-color: rgb(143 143 143 / 80%); /* Cor de fundo com opacidade para dar um efeito de sobreposição */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`

export const ImageLoading = styled.img`
    width: 200px;
`
export const TextLoading = styled.p`
    font-size: 2em;
    font-weight:600;
    color: #FEEE35;
    letter-spacing: 3px;
`