import React, { Component } from "react";
import { FormControl } from 'react-bootstrap';
import UpdateUser from "./UpdateUser";
import fire from "../FirebaseAuth/Config";
import { useHistory } from 'react-router';

export default class Manage extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.getUserProfile = this.getUserProfile.bind(this);
    }

    componentWillUpdate() {
        this.getUserProfile();
    }

    getUserProfile() {
        var currUser = fire.auth().currentUser;

        return currUser
    }

    updateProfile = (e) => {
        e.preventDefault();
        let error = document.getElementById('errors');
        const { history } = this.props;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const photoURL = e.target.photo.value;

        try {

            if (email.length > 3 || username.length > 3 || photoURL.length > 3) {

                error.innerHTML = UpdateUser(username, photoURL);

                setTimeout(function () {
                    history.push('/');
                    window.location.reload(false);
                }, 700)
            } else {
                if (email.length < 4) {

                    error.innerHTML = "Email addres lenght must be at least 4 symbols";

                } else if (username.length < 4) {

                    error.innerHTML = "Username length must be at least 4 symbols";

                } else if (photoURL.length < 4) {

                    error.innerHTML = "PhotoURL length must be at least 4 symbols";
                }
            }

        } catch (e) {
            error.innerHTML = "Invalid Input";
        }
    }

    render() {

        let manage = new Manage();
        let user = manage.getUserProfile();
        //if (user) {

        //}

        let manageProfile = user ? <div>

            <h3 className="logo">Manage Profile</h3>

            <h3 id="errors" className="text-danger text-center error"></h3>
            <div className="container d-flex justify-content-center">

                <form className="registerForm" onSubmit={this.updateProfile}>

                    <h3>Username</h3>
                    <FormControl type="text" className="passwordInput" placeholder={user ? user.displayName : ""} name="username" />

                    <h3>Email</h3>
                    <FormControl className="userInput" type="email" name="email" placeholder={user ? user.email : ""} />


                    <h3>Photo image</h3>
                    <FormControl type="text" className="passwordInput" placeholder={user ? user.photoURL : ""} name="photo" />

                    <h3></h3>
                    <input type="submit" value="Apply changes" className="btn btn-primary buttons" />

                </form>
                <img src={user ? user.photoURL : ""} />
            </div>

            <div className="spacer"></div>
        </div> : <div className="text-center">Loading...</div>

        return (
            <div>
                {manageProfile}
            </div>
            )
    }
}