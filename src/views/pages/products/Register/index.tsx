import Box from '@mui/material/Box';
import FormProducts from './Resources';
import { Typography } from '@mui/material';

export default function RegisterProduct() {
    return (
        <Box component="main" sx={{ flexGrow: 1 }}>
            <Box padding={'0'} display={'flex'} justifyContent={'space-between'}>
                <Typography
                    sx={{ padding: '10px' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Cadastrar Produto
                </Typography>
            </Box>
            <FormProducts />
        </Box >
    );
}
