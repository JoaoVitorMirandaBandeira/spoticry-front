import styled from "styled-components";

export const ContanerSearch = styled.div`
    margin-left: 15px;
    display:flex;
`
export const SearchInput = styled.input`
    border: none;
    background-color: #454545;
    width: 24rem;
    height:30px;
    color: white;
    font-size: 20px;
    border-radius: 10px 0px 0px 10px;
    padding: 5px 10px;
    &:focus{
        border: none;
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const  SearchButton = styled.button`
    border: none;
    background-color: #F5E131;
    border-radius: 0px 10px 10px 0px;
    width: 2rem;
    transition: 0.3s;
    cursor: pointer;
    height:30px;
    &:active{
        background-color: #cdbe36;
    }
`

