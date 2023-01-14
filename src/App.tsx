import React from 'react';
import * as Router from 'react-router-dom';
import * as MUI from '@mui/material';
import { createLightMuiTheme } from './core/themes';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <MUI.ThemeProvider theme={createLightMuiTheme()}>

      <Topbar/>
      <Router.Outlet/>

    </MUI.ThemeProvider>
  );
}

export default App;
