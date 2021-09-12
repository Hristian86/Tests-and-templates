import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import fire from '../FirebaseAuth/Config';
import Home from '../Home';
import LogInSuccess from './LogInSuccess';
import { Redirect, useHistory } from 'react-router';

export default class login extends Component {
    constructor(props) {
        super(props)
        this.liks = [];
    }



    loginFunc = (e) => {
        e.preventDefault();
        let error = document.getElementById('errors');
        const { history } = this.props;
        const email = e.target.email.value;
        const password = e.target.password.value;




        try {

            if (email.length > 5 && password.length > 5) {

                error.innerHTML = "Success";

                var responce = fire.auth().signInWithEmailAndPassword(email, password)
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err));

                setTimeout(function () {
                    history.push('/');
                    window.location.reload(false);
                }, 700);

            } else {
                if (email.length < 6) {

                    error.innerHTML = "Email addres lenght must be at least 6 symbols";

                } else if (password.length < 6) {

                    error.innerHTML = "Password length must be at least 6 symbols";

                }
            }

        } catch (e) {
            error.innerHTML = "Invalid Input";
        }

    }

    render() {



        return (<div>
            <div className="backgrounds">
                <h3 className="logo">Log in</h3>

                <h3 id="errors" className="text-danger text-center error"></h3>

                <div className="container d-flex justify-content-center">

                    <form className="registerForm" onSubmit={this.loginFunc}>

                        <h3>Email</h3>
                        <FormControl className="userInput" type="Email" name="email" placeholder="Email" />

                        <h3>Password</h3>
                        <FormControl type="password" className="passwordInput" placeholder="password" name="password" />

                        <h3></h3>
                        <input type="submit" value="Log in" className="btn btn-primary buttons" />

                    </form>

                    <div className="spacer"></div>
                </div>
            </div>

        </div>)
    }
}