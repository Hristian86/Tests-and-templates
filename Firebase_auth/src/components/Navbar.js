import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import About from './About';
import Register from './Auth/Register';
import LogIn from './Auth/LogIn';
import RegAuth from './Auth/RegAuth';
import Cards from './Cards/Cards';
import fire from './FirebaseAuth/Config';
import propsy from './SendingProps';

export default class navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.authListener = this.authListener.bind(this);
    }


    async componentDidMount() {
        await this.authListener();
    }

    async authListener() {
        const users = await fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: user
                });
            } else {
                this.setState = null;
            }
        });

        return users;
    }

    prevDef(e) {
        e.preventDefault();
    }

    render() {
        let cheks = false;
        let usr = this.state.user;

        propsy(this.state.user); //component test from function

        let displayName = null;
        let token = null;
        if (usr) {
            cheks = true;
            displayName = usr.displayName;
            token = usr.refreshToken;
            localStorage.setItem("userToken", token);
            var localuser = localStorage.getItem("userToken");
            var currUser = fire.auth().currentUser;

            //currUser.updateProfile({
            //    displayName: "icaka",
            //    photoURL: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png"
            //})
            //    .then(upd => console.log(upd))
            //    .catch(err => console.log(err));
            //console.log(currUser.displayName);
            //console.log(currUser.photoURL);

            var results = localuser === currUser.refreshToken ? "true" : "false";
            //console.log(results);

        } else {
            cheks = false;
        }

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" onClick={() => this.prevDef}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link href="/About" onClick={() => this.prevDef}>About</Nav.Link>

                        <Nav.Link href="/Contact" onClick={() => this.prevDef}>Contact</Nav.Link>

                        <Nav.Link href="/components/HearthStoneCards/HearthstoneCard" onClick={() => this.prevDef}>Hearthstone</Nav.Link>

                    </Nav>
                    <Form inline className="mr-3">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    {cheks ? <Nav.Link href="/Auth/Manage" className="text-info" onClick={() => this.prevDef}>{displayName !== null ? displayName+"'s" : ""} management</Nav.Link> :
                        <Nav.Link href="/Auth/Register" className="text-info" onClick={() => this.prevDef}>Register</Nav.Link>}

                    {cheks ? <Nav.Link href="/Auth/Logout" className="mr-3 text-info" onSubmit={() => this.prevDef}>Log out</Nav.Link> : <Nav.Link href="/Auth/LogIn" className="mr-3 text-info" onClick={() => this.prevDef}>LogIn</Nav.Link>}

                </Navbar.Collapse>
            </Navbar>
        )
    }
}