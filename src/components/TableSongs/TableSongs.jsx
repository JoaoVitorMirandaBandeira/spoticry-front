import { Table, TableTh, TableTd, TableTr, TableImg } from './Style';

export const TableSongs = props => {

    const getIdThumbnail = (url) => {
        const urlSplit = url.split('?v=');
        const id = urlSplit[1]?.split('&')[0];
        return id
    };

    return (
        <Table>
            <TableTr>
                <TableTh>Image</TableTh>
                <TableTh>Name</TableTh>
                <TableTh>Artista</TableTh>
            </TableTr>
            {props.songs?.map(e => {
                return (
                    <>
                        <TableTr>
                            <TableTd><TableImg src={`https://img.youtube.com/vi/${getIdThumbnail(e.url)}/mqdefault.jpg`} alt="Teste" /></TableTd>
                            <TableTd>{e.title}</TableTd>
                            <TableTd>{e.artist}</TableTd>
                        </TableTr>
                    </>
                );
            })}
        </Table>
    );
};
