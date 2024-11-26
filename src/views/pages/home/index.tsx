import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import TopCards from '../home/Resources/Parts/TopCards';
import ListCard from './Resources/Parts/ListCard';
import ChartCard from './Resources/Parts/ChartCard';

export default function Home() {
    return (
        <Box component="main" sx={{ flexGrow: 1, paddingBottom: '30px' }}>
            <TopCards />
            <Grid container spacing={2}>
                <ChartCard />
                <ListCard />
            </Grid>
        </Box >
    );
}
