import Logo from "./images/logo512.png";
import {Alert, Snackbar, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import './Styles/register.css'
import axios from "axios";

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [repeatPass, setRepeatPass] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [errorState, setErrorState] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const register = () => {
        const data = new FormData()

        data.append('username', username)
        data.append('password', password)
        data.append('password2', repeatPass)
        data.append('email', email)
        data.append('first_name', firstName)
        data.append('last_name', lastName)

        var config = {
            method: 'post',
            url: 'http://localhost:8000/auth/register/',
            headers: {
                ...data
            },
            data: data
        };

        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error)
                setErrorState(true)
            });
    }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeRepeatPass = (e) => {
        setRepeatPass(e.target.value)
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
                                href="/login"
                        >
                            Log in
                        </Button>
                        <Snackbar open={errorState} autoHideDuration={1500}
                                  style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Alert severity='error' sx={{width: '100%'}}>
                                {errorMessage}
                            </Alert>
                        </Snackbar>
                        <div>
                            <TextField label="First name"
                                       id='firstname'
                                       variant="outlined"
                                       size="small"
                                       style={{marginTop: 8 + 'px', marginBottom: 8 + 'px'}}
                                       onChange={onChangeFirstName}
                            />
                            <TextField label="Last name"
                                       id='lastname'
                                       variant="outlined"
                                       size="small"
                                       style={{marginTop: 8 + 'px', marginBottom: 8 + 'px', marginLeft: 8 + 'px'}}
                                       onChange={onChangeLastName}
                            />
                        </div>
                        <TextField label="Email"
                                   id='email'
                                   variant="outlined"
                                   size="small"
                                   style={{marginTop: 8 + 'px', marginBottom: 8 + 'px'}}
                                   onChange={onChangeEmail}
                        />
                        <TextField label="Username"
                                   id='username'
                                   variant="outlined"
                                   size="small"
                                   style={{marginTop: 8 + 'px', marginBottom: 8 + 'px'}}
                                   onChange={onChangeUsername}
                        />
                        <div>
                            <TextField label="Password"
                                       id='password'
                                       variant="outlined"
                                       size="small"
                                       type='password'
                                       style={{marginTop: 8 + 'px', marginBottom: 8 + 'px'}}
                                       onChange={onChangePassword}
                            />
                            <TextField label="Repeat password"
                                       id='password'
                                       variant="outlined"
                                       size="small"
                                       type='password'
                                       style={{marginTop: 8 + 'px', marginBottom: 8 + 'px', marginLeft: 8 + 'px'}}
                                       onChange={onChangeRepeatPass}
                            />
                        </div>
                        <Button variant="contained" color="success" id="registerButton" style={{marginTop: 8 + 'px'}}
                                onClick={register}>Register</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register