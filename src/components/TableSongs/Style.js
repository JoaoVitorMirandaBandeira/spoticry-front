import styled from 'styled-components';

export const Table = styled.table`
    width: 80%;
    color: #ffffff;
    background-color: #454545;
    padding: 0px;
    font-size: 1.25rem;
    margin: 10px auto;
    border-collapse: collapse;
`;
export const TableTh = styled.th`
    text-align: justify;
    padding-top: 10px;
    padding: 10px 0px 0px 10px;
`;
export const TableTd = styled.td`
    border-top: 1px solid #ffffff;
    border-left: none;
    padding: 5px 10px;
`;
export const TableTr = styled.tr`
    border-top: 1px solid #ffffff;
    border-color: #ffffff;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
`;
export const TableImg = styled.img`
    width: 100px;
`