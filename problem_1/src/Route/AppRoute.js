import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import a from "../Pages/a";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                <Route exact path="/" component={a}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;
