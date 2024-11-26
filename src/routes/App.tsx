import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route } from 'react-router-dom';
import Layout from '../views/layout';
import Home from '../views/pages/home';
import Products from '../views/pages/products';
import About from '../views/pages/about';

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
          <Route path='/Home' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={About} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
