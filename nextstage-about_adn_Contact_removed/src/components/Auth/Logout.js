import React, { Component } from 'react';
import fire from '../FirebaseAuth/Config';
 
export default class Logout extends Component {


    render() {
        fire.auth().signOut();
        return (
            <div className="text-center">
                Successfully loged out
            </div>
            )
    }
}