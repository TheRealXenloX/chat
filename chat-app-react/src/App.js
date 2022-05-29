import logo from './logo.svg';
import './Styles/App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import Login from "./login";
import Home from "./home"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Switch>
                        <Route exact path="/" element={Login}/>
                        <Route path="/home" element={Home}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
