import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import Register from './AuthO/Register';
import LogIn from './AuthO/LogIn';
import Cards from './Cards/Cards';
import propsy from './SendingProps';
import getCookie from './Cookies/GetCookie';
import Home from '../Pages/Home/Home';
import { useState } from 'react';
import { useEffect } from 'react';
import url from './BaseUrl/BaseUrl';

const Navbars = () => {
    const [state, setState] = useState({});
    const [state1, setState1] = useState({});
    
    useEffect(() => {
        const getData = async () => {
            const result = await authListener("categoriesApi");
            if (result) {
                setState1({
                    data: result
                });
            }
        }
        getData();
    }, [])

    const authListener = async (apiController) => {
        const user = getCookie('user');
        if (user) {
            setState({
                user: user
            });
        } else {
            setState({
                user: null
            });
        }

        const token = getCookie('token');
        const result = await fetch(url(apiController),
            {
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(data => data.json())
            .catch(err => console.log(err));

        return result;
    }
    console.log(state);
    console.log(state1);
    const prevDef = (e) => {
        e.preventDefault();
    }

    return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" onClick={() => prevDef}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Form inline className="mr-3">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>

            {state.user ? <Nav.Link className="text-info" onClick={() => prevDef}>{state.user != undefined ? state.user + "'s" : ""} management</Nav.Link> :
                <Nav.Link href="/AuthO/Register" className="text-info" onClick={() => prevDef}>Register</Nav.Link>}

            {state.user ? <Nav.Link href="/AuthO/Logout" className="mr-3 text-info" onSubmit={() => this.prevDef}>Log out</Nav.Link> : <Nav.Link href="/AuthO/LogIn" className="mr-3 text-info" onClick={() => prevDef}>LogIn</Nav.Link>}

        </Navbar.Collapse>
    </Navbar>

}
export default Navbars;