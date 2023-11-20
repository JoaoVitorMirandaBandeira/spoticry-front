import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #333;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #333;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
`;

export const ButtonCard = styled.button`
    min-width: 100px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #F5E131;
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
    border: none;
    padding: 0 25px;
`

export default GlobalStyle;
