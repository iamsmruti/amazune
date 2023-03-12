import { ThemeProvider, createTheme } from '@mui/material'

import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';

import BestSellers from './pages/BestSellers';
import Home from './pages/Home';

import CreateAccount from './pages/Auth/CreateAccount';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import SearchResults from './pages/Auth/SearchResults';


const theme = createTheme({
  palette:{
    primary: {
      main: '#f1cd70'
    }, 
    secondary: {
      main: '#242f3f'
    }
},
typography: {
  fontFamily: 'Poppins',
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700
}
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/best-sellers' element={<BestSellers />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/create-account' element={<CreateAccount />}/>
            <Route exact path='/forgot-password' element={<ForgotPassword />}/>
            <Route exact path='/search-results' element={<SearchResults />}/>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
