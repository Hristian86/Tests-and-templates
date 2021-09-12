import React, { Component } from 'react';

export default class About extends Component {


    render() {
        return (
            <div className="text-center">
                <h1>Welcome to Our Company</h1>
                <h2>Web Site Main Ingredients:</h2>

                <p>Pages (HTML)</p>
                <p>Style Sheets (CSS)</p>
                <p>Computer Code (JavaScript)</p>
                <p>Live Data (Files and Databases)</p>

                <div className="spacer"></div>
            </div>
            )
    }
}