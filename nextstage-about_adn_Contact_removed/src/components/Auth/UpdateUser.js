import React, { Component } from 'react';
import fire from '../FirebaseAuth/Config';

const UpdateUser = (user, photo) => {

    var currUser = fire.auth().currentUser;

    try {
        if (photo.length > 3 && currUser.photoURL !== photo) {
            currUser.updateProfile({
                photoURL: photo
            })
                .then(upd => console.log(upd))
                .catch(err => console.log(err));
            console.log(currUser.photoURL);
        } else if (user.length > 3 && currUser.displayName !== user) {

            currUser.updateProfile({
                displayName: user
            })
                .then(upd => console.log(upd))
                .catch(err => console.log(err));
            console.log(currUser.displayName);
        }
        return "Success";
    } catch (e) {
        console.log(e)
        return "Error";
    }

}

export default UpdateUser