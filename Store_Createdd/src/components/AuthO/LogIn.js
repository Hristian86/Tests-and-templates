import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import LogInSuccess from './LogInSuccess';
import { Redirect, useHistory } from 'react-router';
import { setCookieToken, setCookieUser } from '../Cookies/SetCookie';
import url from '../BaseUrl/BaseUrl';
import './style.css';
import LogInHandler from './LogInHandler';
import setCookie from '../Cookies/SetCookie';

export default class login extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            buttonPresed: false
        }
    }

    loginFunc = async (e) => {
        this.setState({
            buttonPresed: true
        });
        e.preventDefault();
        let error = document.getElementById('errors');
        const { history } = this.props;
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {

            if (email.length > 5 && password.length > 5) {

                error.innerHTML = "Procesing...";

                let payload = {
                    "email": email,
                    "password": password
                }

                let notLoged = false;

                let user = await LogInHandler(payload);

                //console.log(user);

                if (user.email && user.token) {
                    user.user ? setCookieUser(user.user) : 
                        setCookieUser(user.email);
                    setCookie('email', user.email, 5);
                    setCookieToken(user.token);
                    console.log(user);
                    error.innerHTML = "Success";

                    setTimeout(function () {
                        history.push('/');
                        //window.location.reload(false);
                    }, 700);
                } else {
                    this.setState({
                        buttonPresed: false
                    });
                    error.innerHTML = "Wrong email or password";
                }

            } else {
                if (email.length < 6) {
                    this.setState({
                        buttonPresed: false
                    });
                    error.innerHTML = "Email addres lenght must be at least 6 symbols";

                } else if (password.length < 6) {
                    this.setState({
                        buttonPresed: false
                    });

                    error.innerHTML = "Password length must be at least 6 symbols";

                }
            }

        } catch (e) {
            this.setState({
                buttonPresed: false
            });
            error.innerHTML = "server error";
        }

    }

    emailHandler = (e) => {
        const email = e.target.value;
        const error = document.getElementById('emailError');
        error.innerHTML = null;
        if (email.length < 6) {
            error.innerHTML = "Email addres lenght must be at least 6 symbols";
        }
    }

    passwordHandler = (e) => {
        const password = e.target.value;
        const pass = e.target.value;
        const error = document.getElementById('passError');
        error.innerHTML = null;
        if (pass.length < 6) {
            error.innerHTML = "Password length must be at least 6 symbols";
        }
    }

    render() {

        return (<div>
            <div className="backgrounds">
                <h3 className="logo">Log in</h3>
                <h3 id="errors" className="text-danger text-center error" ></h3>

                <div className="container d-flex justify-content-center">

                    <form className="registerForm text-center" onSubmit={this.loginFunc}>

                        <h3>Email</h3>
                        <FormControl onChange={this.emailHandler} className="userInput m-auto" type="Email" name="email" maxLength="50" placeholder="Email" />
                        <span id="emailError"></span>

                        <h3>Password</h3>
                        <FormControl type="password" onChange={this.passwordHandler} className="passwordInput m-auto" maxLength="60" placeholder="password" name="password" />
                        <span id="passError"></span>

                        <h3></h3>
                        {this.state.buttonPresed ? <em>Loading..</em> : <input type="submit" value="Log in" className="btn btn-primary buttons" />}

                    </form>

                    <div className="spacer"></div>
                </div>
            </div>

        </div>)
    }
}