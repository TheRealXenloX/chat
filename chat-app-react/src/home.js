import React, {Component} from 'react';
import Button from '@mui/material/Button';
import './Styles/home.css';
import Logo from './images/logo512.png';
import {TextField} from "@mui/material";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            loading: false,
            username: '',
            password: '',
        })
    }

    login = () => {
        if (this.state.username === "Jamy" && this.state.password === "yoman"){
            alert("Logged in!")
        } else {
            alert("wrong username of password!")
        }
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    onChangeUsername = (e) => {
        this.setState({username: e.target.value})
    }

    render() {
        return (
            <div className='login-Main'>
                <div className='login-Picture'>
                    <img src={Logo} alt="logo" className="login-Logo"/>
                </div>
                <div className='login-Form'>
                    <form>
                        <TextField label="Username"
                                   id='username'
                                   variant="outlined"
                                   size="small"
                                   onChange={this.onChangeUsername}/>
                        <TextField label="Password"
                                   id='password'
                                   variant="outlined"
                                   size="small"
                                   type='password'
                                   style={{marginTop: 8 + 'px'}}
                                   onChange={this.onChangePassword}
                        />
                        <Button variant="contained" color="success" style={{marginTop: 8 + 'px'}}
                                onClick={this.login}>Login</Button>
                    </form>
                </div>
            </div>);
    }
}

export default Home;