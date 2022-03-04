import { createTheme, ThemeProvider } from '@mui/material';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './dashboard/Home';
import Overview from './dashboard/overview/Overview';
import Profile from './dashboard/profile/Profile';

const them = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    }
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      'sans-serif',
    ].join(',')
  }
});

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={them}>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='' element={<Overview />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
