import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import Footer from './Footer';


export default class Layout extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Container fluid className="mt-3">
                    {this.props.children}
                </Container>
                <Footer />
            </div>
        )
    }
}