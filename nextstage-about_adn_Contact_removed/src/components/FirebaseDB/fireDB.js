import React, { Component } from 'react';
import fire from '../FirebaseAuth/Config';

const firebaseURL = "https://full-stack-app-a2668.firebaseio.com/.json";
const fireDbs = "https://full-stack-app-a2668.firebaseio.com/TestDB/EJxVkda1X8dPQU3KhHuO.json";

const urlLink = "https://full-stack-app-a2668.firebaseio.com/";

export default class fireDB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            getData: [],
            loading: true,
            display: null
        }

        this.readFromDb = this.readFromDb.bind(this);
        this.createDataDb = this.createDataDb.bind(this);
    }

    async readFromDb() {

        const currUser = fire.auth().currentUser;

        if (currUser) {
            const token = currUser.refreshToken;

            const responce = await fetch(fireDbs, {
                "method": "GET",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(x => console.log('Login is required'));

            const data = await Object.values(responce);

            try {

            } catch (e) {
                console.log(e);
            }

            let arr = [];

            const firestore = fire.firestore();
            const db = firestore.collection('Posts');
            const fr = await db.get();
            fr.forEach(doc => {
                console.log(doc.id, ' => ', doc.data());

                let obj = {
                    "content": doc.data().content,
                    "createdOn": doc.data().createdOn.toString(),
                    "id": doc.id,
                    "userId": doc.data().userId,
                    "subject": doc.data().subject
                }

                arr.push(obj);
            });

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == "UPxiX8DExLGpLzgA8OzX") {
                    const del = arr[i].id;

                    const reses = await db.doc(del).delete();

                }
            }

            return arr;

            //const firestore = fire.firestore();
            //const db = firestore.collection('Posts').doc('IUCHtUN1AGfw3Qwn9aNs');
            //const doc = await db.get();
            //console.log(doc.data());

            //let arr = [];

            //let obj = {
            //    "content": doc.data().content,
            //    "createdOn": doc.data().createdOn.toString(),
            //    "id": doc.data().id,
            //    "userId": doc.data().userId,
            //    "subject": doc.data().subject
            //}
            //arr.push(obj);
            //return arr;

            return data;
        }
    }

    async createDataDb() {

        const currUser = fire.auth().currentUser;
        const userId = currUser.uid;
        try {

            let pLoad = {
                "content": "greeeedy one",
                "createdOn": new Date(),
                "id": "123",
                "userId": currUser.uid,
                "subject": "idk man",
                "image":null
            };

            const firestore = fire.firestore();
            firestore.collection('Posts').add(pLoad)
                .then(() => {
                    console.log('Create');
                }).catch((err) => console.log(err));

        } catch (e) {
            console.log(e);
        }

        if (currUser) {

            const token = currUser.refreshToken;
            const userId = currUser.uid;
            //console.log(userId);
            let payload = {
                "id": "14",
                "lastName": "packov",
                "name": "packo",
                "age": "32",
                "token": token
            }


            //const responce = await fetch(fireDbs, {
            //    "method": "POST",
            //    "headers": {
            //        'Accept': 'application/json',
            //        'Content-Type': 'application/json',
            //        'Authorization': `Bearer ${userId}`
            //    }, body: JSON.stringify(payload)
            //}).then(res => res.json())
            //    .catch(x => console.log('Login is required'));

            //console.log(responce);

            //const data = await responce;
            //try {
            //    this.setState = ({ getData: data, loading: false });
            //} catch (e) {
            //    console.log(e);
            //}
        }
    }
}