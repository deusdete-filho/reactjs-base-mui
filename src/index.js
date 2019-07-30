import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette:{
        primary: blue

    }
})
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
</MuiThemeProvider>


, document.getElementById('root'));

serviceWorker.unregister();
