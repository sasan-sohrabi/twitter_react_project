import React from 'react';
import ReactDOM from 'react-dom';
import APP from "./components/App";
import {ThemeProvider} from "@mui/styles";
import theme from './components/theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <APP/>
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);
