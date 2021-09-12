import React, { Component } from 'react';
import RegAuth from './RegAuth';
import { FormControl } from 'react-bootstrap';
import fire from '../FirebaseAuth/Config';
import { useHistory } from 'react-router';

export default class Register extends Component {


    signUpFunc = (e) => {
        e.preventDefault();
        let error = document.getElementById('errors');
        const { history } = this.props;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const passwordConf = e.target.passwordConf.value;

        try {

            error.innerHTML = "";
            if (password === passwordConf) {

                if (email.length > 5 && password.length > 5) {

                    var userCreate = fire.auth().createUserWithEmailAndPassword(email, password)
                        .then(resp => console.log(resp))
                        .catch(err => console.log(err));

                    if (userCreate) {

                        error.innerHTML = "Account created suceesfully";

                    }

                    setTimeout(function () {
                        history.push("/");
                        window.location.reload(false    );
                    }, 700);

                } else {
                    if (email.length < 6) {

                        error.innerHTML = "Email addres lenght must be at least 6 symbols";

                    } else if (password.length < 6) {

                        error.innerHTML = "Password length must be at least 6 symbols";

                    }
                }

            } else {
                error.innerHTML = "Password does not match";
            }
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div className="backgrounds">
                <h3 className="logo">Register</h3>

                <h3 id="errors" className="text-danger text-center error"></h3>
                <div className="container d-flex justify-content-center">

                    <form className="registerForm" onSubmit={this.signUpFunc}>

                        <h3>Email</h3>
                        <FormControl className="userInput" type="email" name="email" placeholder="email" />

                        <h3>Password</h3>
                        <FormControl type="password" className="passwordInput" placeholder="password" name="password" />

                        <h3>Confirm password</h3>
                        <FormControl type="password" className="passwordInput" placeholder="confirm password" name="passwordConf" />

                        <h3></h3>
                        <input type="submit" value="Submit to register" className="btn btn-primary buttons" />

                    </form>

                    <div className="spacer"></div>
                </div>

            </div>
        )
    }
}