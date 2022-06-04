import './Styles/App.css';
import Login from "./login";
import Home from "./home"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Register from "./register";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </Router>
            </header>
        </div>

    );
}

export default App;
