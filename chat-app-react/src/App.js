import logo from './logo.svg';
import './Styles/App.css';
import {Route} from "@mui/icons-material";
import {createTheme, ThemeProvider} from "@mui/material";
import Home from "./home";

function App() {

    return (

        <div className="App">
            <header className="App-header">
                <Route exact path="/">
                    <Home/>
                </Route>
            </header>
        </div>
)
    ;
}

export default App;
