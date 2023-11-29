import { Table, TableTh, TableTd, TableTr } from './Style';

export const TableSongs = props => {
    return (
        <Table>
            <tr>
                <TableTh>Name</TableTh>
                <TableTh>Artista</TableTh>
            </tr>
            {props.songs?.map(e => {
                return (
                    <>
                        <TableTr>
                            <TableTd>{e.title}</TableTd>
                            <TableTd>{e.artist}</TableTd>
                        </TableTr>
                    </>
                );
            })}
        </Table>
    );
};
