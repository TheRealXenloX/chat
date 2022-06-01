import Logo from "./images/logo512.png";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import './Styles/login.css'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedin, setLoggedin] = useState(false);

    const login = () => {
        if (username === "Jamy" && password === "yoman") {
            setLoggedin(true)
        } else {
            alert("wrong username of password!")
        }
    }

    const onChangePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }


    const onChangeUsername = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }

    return (
        <div className="main-body">
            <div className='login-Main'>
                <div className='login-Picture'>
                    <img src={Logo} alt="logo" className="login-Logo"/>
                </div>
                <div className='login-Form'>
                    <form>
                        <Button variant="text"
                                size="small"
                                href="/register"
                        >
                            Register
                        </Button>
                            <TextField label="Username"
                                       id='username'
                                       variant="outlined"
                                       size="small"
                                       style={{marginTop: 8 + 'px', marginBottom: 8 + 'px'}}
                                       onChange={onChangeUsername}
                            />
                            <TextField label="Password"
                                       id='password'
                                       variant="outlined"
                                       size="small"
                                       type='password'
                                       style={{marginTop: 8 + 'px', marginBottom: 8 + 'px'}}
                                       onChange={onChangePassword}
                            />
                        <Button fullWidth variant="contained" color="success" id="loginButton"
                                style={{marginTop: 8 + 'px'}}
                                onClick={login}>Log in</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login