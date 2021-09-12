import * as signalR from "@aspnet/signalr";
import React from 'react';
import { useEffect } from "react";
import url from "../../components/BaseUrl/BaseUrl";

const Charts = () => {



    let startConnection = () => {

        let hubConnection = signalR.HubConnection;
        hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(url('message'))
            .build();

        hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err));

        //hubConnection.on("send", "hello");
        setTimeout(() => {

            //hubConnection.invoke("send", "Hello");

        }, 2000)

    }

    useEffect(() => {
        startConnection();
    }, [])

    return <div>



    </div>

}
export default Charts;