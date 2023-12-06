import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Button = styled.button`
    background-color: ${COLORS.yellow};
    padding: 15px 10px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: large;
    cursor: pointer;
`;

export const Popup = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const PopupContainer = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const MusicContaner = styled.div`
    display: flex;
    padding: 2px 10px;
    justify-content: space-between;
`

export const OverflowContainer = styled.div`
    overflow-y: scroll;
    padding: 5px 10px;
    height: 500px;
`
export const Close = styled.p`
    text-align: end;
    cursor: pointer;
`;

export const AddMusic = styled.span`
    cursor: pointer;
`
