import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Register from './components/AuthO/Register';
import login from './components/AuthO/LogIn';
import Logout from './components/AuthO/Logout';
import Home from './Pages/Home/Home';
//import PrivateRoute from './components/Auth/PrivateRoute';
const App = () => {

    return <div className="App">
        <header className="App-header">
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}>
                        </Route>

                        <Route path="/AuthO/Register" component={Register}>
                        </Route>
                        <Route path="/AuthO/LogIn" component={login}>
                        </Route>
                        <Route path="/AuthO/Logout" component={Logout}>
                        </Route>
                    </Switch>
                </Router>

            </Layout>

        </header>
    </div>
}
export default App;

//const PrivateRoute = ({ component: Component, ...rest }) => {
//    var resut = authListener();
//    var rs = { ...rest };
//    var chek = false;
//    resut.then(res => res);
//    setTimeout(() => {
//        console.log(useraaa);
//        if (useraaa.email !== undefined) {
//            return <Route {...rest} render={(props) => (
//                chek ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
//            )
//            } />
//        }
//    }, 1000);

//    if (rs !== undefined) {
//        chek = true;
//    }

//    return <Route {...rest} render={(props) => (
//        chek ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
//    )
//    } />
//}

//async function authListener() {
//    let chek = false;
//    const users = await fire.auth().onAuthStateChanged(user => {
//        if (user) {
//            chek = true;
//        } else {
//        }
//    });
//    return chek;
//}