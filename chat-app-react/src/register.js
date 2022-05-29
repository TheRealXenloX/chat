import Logo from "./images/logo512.png";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import './Styles/login.css'

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [repeatpass, setRepeatPass] = useState('')

    const register = () => {
        alert("account created")
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
                        <TextField label="Email"
                                   id='email'
                                   variant="outlined"
                                   size="small"
                                   style={{marginTop: 8 + 'px'}}
                                   helperText="Set username for login"
                                   onChange={onChangeEmail}
                        />
                        <TextField label="Username"
                                   id='username'
                                   variant="outlined"
                                   size="small"
                                   style={{marginTop: 8 + 'px'}}
                                   helperText="Set username for login"
                                   onChange={onChangeUsername}
                        />
                        <TextField label="Password"
                                   id='password'
                                   variant="outlined"
                                   size="small"
                                   type='password'
                                   style={{marginTop: 8 + 'px'}}
                                   helperText="Set password for login"
                                   onChange={onChangePassword}
                        />
                        <TextField label="repeat password"
                                   id='password'
                                   variant="outlined"
                                   size="small"
                                   type='password'
                                   style={{marginTop: 8 + 'px'}}
                                   helperText="Set password for login"
                                   onChange={onChangeRepeatPass}
                        />
                        <Button variant="contained" color="success" style={{marginTop: 8 + 'px'}}
                                onClick={register}>Register</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register