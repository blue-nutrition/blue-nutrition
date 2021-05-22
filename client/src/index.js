import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme.js';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
  </ThemeProvider>, document.getElementById('app'));
