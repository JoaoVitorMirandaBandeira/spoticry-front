import styled from "styled-components";

export const MusicContainer = styled.div`
    width:250px;
    height:290px;
    background-color: #454545 ;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:10px;
    justify-content: space-around;
`

export const Thumbnail = styled.img`
    width: 220px;
    height: 130px;
    border-radius: 10px;
`

export const MusicName= styled.h3`
    color: #FFFFFF;
    font-weight:600;
    font-style: normal;
    text-align:center;
    font-size: 1.5rem;
    line-height:24px;
`

export const MusicArtist= styled.p`
    color: #FFF;
    text-align: center;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
`