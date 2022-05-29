import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import Home from './home'
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";

let theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#f0f8ff',
            contrastText: '#454545'
        },
        text:{
            primary: '#DCDCDC'
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <Home/>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
