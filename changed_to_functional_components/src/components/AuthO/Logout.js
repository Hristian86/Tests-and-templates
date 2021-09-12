import React, { Component } from 'react';
import setCookie from '../Cookies/SetCookie';
import url from '../BaseUrl/BaseUrl';
import './style.css';

export default class Logout extends Component {
    constructor(props) {
        super(props)

    }

    restartCookies = () => {
        setCookie('email', null, -1);
        setCookie("user", null, -1);
        setCookie("token", null, -1);
        setCookie("user_name", null, -1);
        setCookie("cheked", null, -1);
    }

    logOutHandle = () => {
        setCookie('email', null, -1);
        setCookie("user", null, -1);
        setCookie("token", null, -1);
        setCookie("user_name", null, -1);
        setCookie("cheked", null, -1);
        const { history } = this.props;
        setTimeout(function () {
            history.push('/');
            window.location.reload(false);
        }, 700);
    }

    render() {
        this.logOutHandle();
        //fire.auth().signOut();
        return (
            <div className="text-center loading">
                Successfully loged out
            </div>
        )
    }
}