import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress, List, ListItem, ListItemText, } from '@mui/material';
import { useProducts } from '../../Hooks';
import SellIcon from '@mui/icons-material/Sell';
import { useState } from 'react';


export default function ListCard() {
    const { dataCategory, errorCategory, loadingCategory } = useProducts();
    const [count, setCount] = useState(0);

    if (errorCategory) {
        return <Box>Ops! Houve um erro ao carregar as categorias!</Box>
    }
    return (
        <Grid size={4}>
            <Card sx={{
                maxWidth: 345, height: 60 + "vh", color: 'white',
                background: 'linear-gradient(to right bottom, #5271ff, #6B0AC9)'
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" display={'flex'} alignItems={'center'}>
                        <SellIcon sx={{ marginRight: '5px' }} /> Categorias
                    </Typography>
                    {loadingCategory
                        ? <CircularProgress color='inherit' size={50} />
                        : <List >
                            {dataCategory?.data.slice(0, 10).map((item: { name: string; }) => (
                                <ListItem key={item.name} disablePadding >
                                    <ListItemText sx={{ color: 'primary.dark' }} primary={item.name} />
                                </ListItem>
                            ))}
                        </List>
                    }

                </CardContent>
            </Card>
        </Grid>

    )
}
