import { createTheme, ThemeProvider } from '@mui/material';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserContext from './UserContext';
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
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    }
  }

  UpdaterContext = (action) => {
    switch (action.type) {
      case 'SET_LOGIN':
        return this.setState({
          isLogin: !this.state.isLogin,
        });
    
      default:
        break;
    }
  }

  render() {
    return (
      <UserContext.Provider
      value={{
        state: this.state,
        update: this.UpdaterContext,
      }}>
        <ThemeProvider theme={them}>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='' element={<Overview />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </UserContext.Provider>
    );
  }
}

export default App;
