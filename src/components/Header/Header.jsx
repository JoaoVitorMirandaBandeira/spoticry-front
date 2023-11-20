import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoHeader.png';
import { HeaderContainer, ButtonsContainer, Button, HeaderLogo } from './Styles';
import { goToLoginPage } from '../../routes/Coordinator';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const Header = () => {
    const [authenticated,setAuthenticated] = useState()
    const navigate = useNavigate();

    const login = () => {
        localStorage.removeItem('token');
        goToLoginPage(navigate);
    };
    useEffect(() => {
        const token = Cookies.get('token');
        if(token){
            setAuthenticated(true);
        }else{
            setAuthenticated(false);
        }
    },[]);
    //TODO => Criar o redirecionamento para as paginas corretas 
    return (
        <HeaderContainer>
            <HeaderLogo src={logo} alt="logo" />
            <ButtonsContainer>
                {(authenticated &&
                    <>
                        <Button>Pagina Inicial</Button>
                        <Button>Músicas</Button>
                        <Button>Suas Playlists</Button>
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
