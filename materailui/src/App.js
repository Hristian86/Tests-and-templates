import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import About from './components/About';
import Layout from './components/Layout';

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Layout>
                        <Router>
                            <switch>
                                <Route path='/Home' component={Home} />
                                <Route path='/About' component={About} />
                            </switch>
                        </Router>
                    </Layout>
                </header>
            </div>
        );
    }
}
