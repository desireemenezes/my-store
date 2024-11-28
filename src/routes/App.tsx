import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route } from 'react-router-dom';
import Layout from '../views/layout';
import Home from '../views/pages/home';
import ListingProducts from '../views/pages/products/Listing';
import RegisterProduct from '../views/pages/products/Register';

const theme = createTheme({
  palette: {
    primary: {
      light: '#78909C',
      main: '#5271ff',
      dark: '#263238',
      contrastText: '#ffffff',
    },
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route exact path='/products' component={ListingProducts} />
          <Route exact path='/products/register' component={RegisterProduct} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
