import Box from '@mui/material/Box';
import TableProducts from './Resources/Parts/TableProduct';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

export default function ListingProducts() {
    return (
        <Box component="main" sx={{ flexGrow: 1 }}>
            <Box padding={'0'} display={'flex'} justifyContent={'space-between'}>
                <Typography
                    sx={{ padding: '10px' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Produtos
                </Typography>
                <Button
                    component={Link}
                    to="/Products/register"
                    variant='contained'
                    startIcon={<AddIcon />}
                    sx={{ height: '30px', width: 'auto', padding: '10px', alignItems: 'center' }}>
                    Cadastrar
                </Button>
            </Box>
            <TableProducts />
        </Box >
    );
}
