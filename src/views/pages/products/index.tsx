import Box from '@mui/material/Box';
import TableProducts from './Resources/Parts/TableProduct';
import { Typography } from '@mui/material';

export default function Products() {
    return (
        <Box component="main" sx={{ flexGrow: 1 }}>
            <Typography
                sx={{ padding: '10px' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Produtos
            </Typography>
            <TableProducts />
        </Box >
    );
}
