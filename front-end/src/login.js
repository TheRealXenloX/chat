import Logo from "./images/logo512.png";
import {Alert, Snackbar, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import './Styles/login.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const login = () => {
        const data = new FormData()

        data.append('username', username)
        data.append('password', password)

        var config = {
            method: 'post',
            url: 'http://localhost:8000/auth/login/',
            headers: {
                ...data
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                navigate('/home', {replace:true})
            })
            .catch(function (error) {
                console.log(error);
                setErrorMessage(error)
                setErrorState(true)
                console.log(errorMessage)
            });

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
                    <Snackbar open={errorState} autoHideDuration={1500}
                              style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Alert severity='error' sx={{width: '100%'}}>
                            joe
                        </Alert>
                    </Snackbar>
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