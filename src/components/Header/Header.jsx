import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoHeader.png';
import { HeaderContainer, ButtonsContainer, Button, HeaderLogo } from './Styles';
import { goToLoginPage, goToYourPlaylist } from '../../routes/Coordinator';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const Header = () => {
    const [authenticated,setAuthenticated] = useState()
    const navigate = useNavigate();

    const login = () => {
        Cookies.remove('token')
        goToLoginPage(navigate);
    };
    const goYourPlaylist = () => {
        goToYourPlaylist(navigate)
    }
    const goToFeed = () => {
        navigate(`/feed`)
    }
    useEffect(() => {
        const token = Cookies.get('token');
        if(token){
            setAuthenticated(true);
        }else{
            setAuthenticated(false);
        }
    },[]);

    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="logo" />
            <ButtonsContainer>
                {(authenticated &&
                    <>
                        <Button onClick={goToFeed}>Pagina Inicial</Button>
                        <Button>Músicas</Button>
                        <Button onClick={goYourPlaylist}>Suas Playlists</Button>
                    </>) ||
                    <>
                        <Button>Inscrever</Button>
                        <Button onClick={login}>Entrar</Button>
                    </>
                }
            </ButtonsContainer>
        </HeaderContainer>
    );
};
