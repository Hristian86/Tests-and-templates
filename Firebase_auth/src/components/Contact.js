import React, { Component } from 'react';

export default class contact extends Component {

    logout = () => {

    }

    render() {
        return (
            <div>
                <h3>Hello</h3>
                <button onClick={this.logout}></button>
            <div className="spacer"></div>
            </div>
            )
    }
}