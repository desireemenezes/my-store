import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Avatar, Box, CircularProgress, Table, TableContainer, TablePagination, Typography } from '@mui/material';
import HeadTable from '../TableHead';
import { useProducts } from '../../Hooks';

export default function TableProducts() {
    const { data,
        isLoading,
        isError,
        page,
        rowsPerPage,
        texFormat,
        handleChangePage,
        handleChangeRowsPerPage } = useProducts();

    if (isError) {
        return <Box>Ops! Houve um erro ao carregar os Produtos!</Box>
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                {!isLoading ? (
                    <Table stickyHeader aria-label="sticky table">
                        <HeadTable />
                        <TableBody>
                            {data?.data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((listProducts) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={listProducts.id}>
                                            <TableCell key={listProducts.images[0]}>
                                                <Avatar alt="Remy Sharp" src={listProducts.images[0]} sx={{ width: 56, height: 56 }} />
                                            </TableCell>
                                            <TableCell key={listProducts.title}>
                                                <Typography variant='body2'>
                                                    {listProducts.title}
                                                </Typography>
                                            </TableCell>
                                            <TableCell key={listProducts.category.id}>
                                                <Typography variant='body2'>
                                                    {listProducts.category.name}
                                                </Typography>
                                            </TableCell>
                                            <TableCell key={listProducts.price}>
                                                <Typography variant='body2'>
                                                    R$ {texFormat(listProducts.price.toString())}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                ) : (
                    <Box display={'flex'} justifyContent={'center'}>
                        <CircularProgress color='inherit' size={100} />
                    </Box>
                )}

            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 500]}
                component="div"
                count={data?.data.length || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
