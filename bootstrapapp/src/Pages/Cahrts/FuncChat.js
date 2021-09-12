import * as signalR from "@aspnet/signalr";
import React, { useState, useEffect } from 'react';
import url from "../../components/BaseUrl/BaseUrl";

const FuncChat = () => {
    const [state, setState] = useState({
        nick: '',
        message: '',
        messages: [],
        hubConnection: null,
    });

    useEffect(() => {
        let nick = "Jhon";

        const hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(url('message'))
            .build();
        setState({
            hubConnection: hubConnection,
            nick: nick
        });

        setTimeout(() => {


            state.hubConnection
                .start()
                .then(() => console.log('Connection started!'))
                .catch(err => console.log('Error while establishing connection :('));


            if (state.hubConnection !== null) {
                state.hubConnection.on('send', (nickName, msg) => {
                    const temp = state.messages;
                    temp.push(`${nickName}: ${msg}`);
                    setState({
                        messages: temp
                    });
                });
            }

        }, 1000)

    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        state.hubConnection
            .invoke('send', state.nick, state.message)
            .catch(err => console.error(err));

        // clean up setState for message content.
        setState({ message: '' });
    };

    const messageHandler = (e) => {
        setState({
            message: e.target.value,
        });
    }

    return <div>
        <br />
        <form onSubmit={sendMessage}>
            <input
                type="text"
                value={state.message}
                onChange={messageHandler}
            />

            <button type="submit">Send</button>
        </form>
        <div>
            {state?.messages?.map((message, index) => (
                <span style={{ display: 'block' }} key={index}> {message} </span>
            ))}
        </div>
    </div>
}
export default FuncChat;