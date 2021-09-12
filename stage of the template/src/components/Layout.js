import React, { Component } from 'react';
import Navbars from './Navbars';
import { Container } from 'react-bootstrap';
import Footer from './Footer';

const Layout = (props) => {

    return <div>
        <Navbars />
        <Container fluid className="mt-3">
            {props.children}
        </Container>
        <Footer />
    </div>
}

export default Layout;