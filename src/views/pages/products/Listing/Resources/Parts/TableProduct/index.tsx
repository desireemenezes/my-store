import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Avatar, Box, CircularProgress, IconButton, Table, TableContainer, TablePagination, Tooltip, Typography } from '@mui/material';
import HeadTable from '../TableHead';
import { useProducts } from '../../Hooks';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalDialog from '../Modal';

export default function TableProducts() {
    const { data,
        isLoading,
        isError,
        page,
        rowsPerPage,
        openModal,
        deleteProduct,
        handleModalDelete,
        handleClose,
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
                                            <TableCell>
                                                <Typography component={Link}
                                                    to={`Products/edit/${listProducts.id}`}>
                                                    <Tooltip title={'Editar'}>
                                                        <IconButton>
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Typography>
                                            </TableCell>
                                            <TableCell >
                                                <Tooltip title={'Deletar'}>
                                                    <IconButton onClick={() => handleModalDelete(listProducts.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
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


            <ModalDialog
                open={openModal}
                handleClose={handleClose}
                deleteProduct={() => {
                    deleteProduct.mutate()
                }}
            />

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
