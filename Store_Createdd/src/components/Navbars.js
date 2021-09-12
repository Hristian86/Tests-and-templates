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
import { useStateValue } from './ContextApi/StateProvider';
import Logout from './AuthO/Logout';
import setCookie from './Cookies/SetCookie';

const Navbars = () => {
    const [state, setState] = useState({});
    const [state1, setState1] = useState({});
    const [{ basket }, { user }, dispatch] = useStateValue();

    const checkUser = () => {
        setState({
            user: user
        });
    }
    useEffect(() => {
        console.log(state)
        checkUser();
    },[])

    const prevDef = (e) => {
        e.preventDefault();
    }

    return <Navbar bg="light" expand="lg">
        <Link to="/" onClick={() => prevDef}>Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

            </Nav>
            <Form inline className="mr-3">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>

            {state.user ? <Link to="/" className="text-info mr-3" onClick={() => prevDef}>{state.user != undefined ? state.user + "'s" : ""} management</Link> :
                <Link to="/AuthO/Register" className="text-info mr-3" onClick={() => prevDef}>Register</Link>}

            {state.user ? <Link to="/AuthO/Logout"  className="mr-3 text-info" onSubmit={() => logOutHandle}>Log out</Link> : <Link to="/AuthO/LogIn" className="mr-3 text-info" onClick={() => prevDef}>LogIn</Link>}

            <Link to="/AuthO/Logout" className="mr-3 text-info" onSubmit={() => logOutHandle}>Log out</Link>

            <Link to="/" className="mr-3 text-info" onSubmit={() => this.prevDef}>{basket?.length}</Link>

        </Navbar.Collapse>
    </Navbar>

}

const logOutHandle = () => {
    setCookie('email', null, -1);
    setCookie("user", null, -1);
    setCookie("token", null, -1);
    setCookie("user_name", null, -1);
    setCookie("cheked", null, -1);
    //const { history } = this.props;
    //setTimeout(function () {
    //    history.push('/');
    //    window.location.reload(false);
    //}, 700);
}
export default Navbars;