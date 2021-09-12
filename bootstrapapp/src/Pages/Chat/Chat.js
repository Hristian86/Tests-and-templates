import React, { Component } from 'react';
import { HubConnection } from 'signalr-client-react';
import url from '../../components/BaseUrl/BaseUrl';
//import { hubConnection } from 'signalr-client-react';
//import * as signalR from '@microsoft/signalr';
import * as signalR from "@aspnet/signalr";

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            message: '',
            messages: [],
            hubConnection: null,
        };
    }

    componentDidMount = () => {

        //const nick = window.prompt('Your name:', 'John');
        const nick = "Jhon";

        const hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(url('message'))
            .build();

        this.setState({ hubConnection, nick }, () => {
            this.state.hubConnection
                .start()
                .then(() => console.log('Connection started!'))
                .catch(err => console.log('Error while establishing connection :('));

            this.state.hubConnection.on('send', (nickName, msg) => {
                const temp = this.state.messages
                temp.push(`${nickName}: ${msg}`);
                this.setState({
                    messages: temp
                })
            });

            //this.state.hubConnection.on('send', (nick, receivedMessage) => {
            //    const text = `${nick}: ${receivedMessage}`;
            //    const messages = this.state.messages.concat([text]);
            //    this.setState({ messages });
            //});
        });
    };

    sendMessage = (e) => {
        e.preventDefault();
        this.state.hubConnection
            .invoke('send', this.state.nick, this.state.message)
            .catch(err => console.error(err));

        this.setState({ message: '' });
    };

    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.sendMessage}>
                <input
                    type="text"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                />

                <button type="submit">Send</button>
                </form>
                <div>
                    {this.state.messages.map((message, index) => (
                        <span style={{ display: 'block' }} key={index}> {message} </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default Chat;