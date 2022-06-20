import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import MainRouter from './MainRouter.js';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter></MainRouter>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
