import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../layout/structure/footer';
import Navbar from '../layout/structure/navbar';

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Navbar children={children} />
                <Footer />
            </Box>
        </>
    )
}
export default Layout;