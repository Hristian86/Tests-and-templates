import React, { Component, useReducer, useCallback, useContext, createContext } from 'react';
import login from './LogIn';
import fire from '../FirebaseAuth/Config';
import Cards from '../Cards/Cards';

export const UserContext = createContext({ user: null });

export default async function RegAuth() {

    let logedUser = false;

        const users = await fire.auth().onAuthStateChanged(user => {
            if (user) {
                logedUser = true;
            } else {

            }
        });

        return logedUser;
    
}