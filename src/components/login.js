import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import axios from 'axios';
import TF from './utils/textField';
import PF from './utils/passwordfield';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import qs from 'qs';

export class Login extends Component {
    state = {
        email: '',
        password: '',
        rememberMe: false,
        credentialsError: false
    }
    // handleBoxChange = (e) => {
    //     const input = event.target;
    //     const value = input.type === 'checkbox' ? input.checked : input.value;

    //     this.setState({ [input.name]: value });
    // }
    handleChange = (e) => {
        
        this.setState({ [e.target.name]: e.target.value, credentialsError: false });
    }

    //axios.post('http:localhost:8080/api/v1/auth', qs.stringify({email, password}))

    loginHandler = (e) => {
        const {email, password} = this.state;
        e.preventDefault();
        axios.post('http://salesportal.com/api/login', qs.stringify({email, password})).then(res => {
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('name',res.data.name);
            localStorage.setItem('role',res.data.role);
            localStorage.setItem('expires', res.data.expires);
            this.props.history.push('/')
        }).catch((err) => {
            console.log("catch block");
            this.setState({
                credentialsError: true
                
            })
        })
    }
   

    render() {
        const myButton = {
            marginLeft: 50,
            marginRight: 50,
            width: 200,
            padding: "10px",
            textAlign: 'center'
        };
        const mystyle = {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%'
        };
        const { email, password, rememberMe } = this.state;
        const values = { email, password, rememberMe }


        return (

            <ThemeProvider><React.Fragment>
                <AppBar position="static">
                    <Toolbar><Typography variant="p">
                        Login Here
                            </Typography></Toolbar>
                </AppBar>
                <br />
                <form style={mystyle} noValidate autoComplete="off" onSubmit={this.loginHandler}>
                    <div style={{ width: 400}} style={{textAlign: 'center'}} className="text-center">
                    {(this.state.credentialsError) ? (
                        <span className="text-danger">Incorrect credentials</span>
                    ) : ""}
                        <TF label="Enter your email: "
                            value={values.email} change={this.handleChange}
                            name="email" margin="normal" />


                        <PF
                            label="Enter your password: "

                            value={values.password}
                            change={this.handleChange}
                            name="password"
                        />
                        

                        <br /> <br /> <br />
                        <Button variant="contained" color="primary" style={myButton} type="submit">Login</Button>
                    </div>

                </form>
            </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default withRouter(Login);

