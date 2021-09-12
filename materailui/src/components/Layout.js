import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Layout extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                    <Navbar />
                    {this.props.children}
            </div>
        )
    }

}