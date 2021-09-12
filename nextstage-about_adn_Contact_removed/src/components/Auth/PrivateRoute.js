import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return <Route {...rest} render={(props) => (
        this.props.user ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
    )
    } />

}

export default PrivateRoute