import styled from "styled-components";
import loginBackground from "../../assets/loginBackground.png";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${loginBackground});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
`;

export const FlexOverflowContainer = styled.div`
    display: flex;
    gap: 21px;
    overflow-y: hidden;
    border-radius: 10px;
    padding: 10px 5px;
    min-height: 350px;
    align-items: center;
    &::-webkit-scrollbar {
        height:5px
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray; /* Cor do thumb (a parte móvel do scrollbar) */
    border-radius: 5px; /* Borda arredondada do thumb */
  }
`

export const Container = styled.div`
    overflow-y: hidden;
    padding: 10px 23px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:100%;
`
export const Title = styled.h1`
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`