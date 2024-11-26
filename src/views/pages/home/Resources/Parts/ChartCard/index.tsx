import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CircularProgress } from '@mui/material';
import { useProducts } from '../../Hooks';
import { Chart } from "react-google-charts";

export default function ChartCard() {
    const { isError, analyticsCategories, chartData, isLoading } = useProducts();

    if (isError) {
        return <Box>Ops! Houve um erro ao carregar as categorias!</Box>
    }

    return (

        <Grid size={8}>
            <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                    {!isLoading ? (
                        <Chart
                            chartType="PieChart"
                            data={chartData && chartData}
                            options={analyticsCategories}
                            width={"100%"}
                            height={"400px"}
                        />
                    ) : (<CircularProgress color='inherit' size={50} />)}
                </CardContent>
            </Card>
        </Grid>


    )
}
