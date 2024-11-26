import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress, Stack } from '@mui/material';
import { useProducts } from '../../Hooks';
import SellIcon from '@mui/icons-material/Sell';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function TopCards() {
    const { total, isLoading, isError, filterPrice, texFormat, data } = useProducts();
    if (isError) {
        return <Box>Ops! Houve um erro ao carregar á página!</Box>
    }
    return (

        <Grid container spacing={2} paddingBottom={3}>
            <Grid size={8}>
                <Stack spacing={2} direction="row">
                    <Card sx={{
                        minWidth: 49 + "%",
                        height: 100,
                        color: 'white',
                        background: 'linear-gradient(to right bottom, #6B0AC9, #5271ff)'
                    }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" display={'flex'} alignItems={'center'}>
                                <SellIcon sx={{ marginRight: '5px' }} /> Produtos
                            </Typography>
                            {isLoading
                                ? <CircularProgress color='inherit' size={50} />
                                : <Typography variant="h5" component="div" display="flex" textAlign="center" sx={{ color: 'text.secondary' }}>
                                    {total}
                                </Typography>
                            }
                        </CardContent>
                    </Card>
                    <Card sx={{
                        minWidth: 49 + "%",
                        height: 100,
                        color: 'white',
                        background: 'linear-gradient(to right bottom, #5271ff, #6B0AC9)'
                    }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" display={'flex'} alignItems={'center'}>
                                <MonetizationOnIcon sx={{ marginRight: '5px' }} /> Faturamento estimado
                            </Typography>
                            {isLoading
                                ? <CircularProgress color='inherit' size={50} />
                                : <Typography variant="h5" component="div" display="flex" textAlign="center" sx={{ color: 'text.secondary' }}>
                                    {texFormat(filterPrice)}
                                </Typography>
                            }
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>
            <Grid size={4}>
                <Stack spacing={2}>
                    <Card sx={{
                        maxWidth: 345, height: 80, color: 'white',
                        background: 'linear-gradient(to right bottom, #5271ff, #6B0AC9)'
                    }}>
                        <CardContent>
                            <Typography gutterBottom variant="body1" display={'flex'} justifyContent={'space-between'} component="div">
                                <ShoppingBagIcon />Produto mais vendido
                            </Typography>
                            {isLoading
                                ? <CircularProgress color='inherit' size={20} />
                                : <Typography variant="body2" display={'flex'} justifyContent={'flex-end'} component="div" textAlign="center" sx={{ color: 'text.secondary' }}>
                                    {data?.data[3].title}
                                </Typography>
                            }

                        </CardContent>
                    </Card>

                </Stack>
            </Grid>
        </Grid >
    )
}
