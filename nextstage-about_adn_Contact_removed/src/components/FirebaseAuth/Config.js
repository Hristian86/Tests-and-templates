import React from 'react';
import 'firebase/auth';
import 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCM3j8ESLwb2i2DyxUa_wCqsn8_X7fqFXA",
    authDomain: "full-stack-app-a2668.firebaseapp.com",
    databaseURL: "https://full-stack-app-a2668.firebaseio.com",
    projectId: "full-stack-app-a2668",
    storageBucket: "full-stack-app-a2668.appspot.com",
    messagingSenderId: "604443479159",
    appId: "1:604443479159:web:ea57ac8c04364160c8ca72",
    measurementId: "G-1FC38357B8"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire