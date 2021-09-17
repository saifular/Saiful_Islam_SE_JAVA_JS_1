import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import a from "../Pages/a";
import b from "../Pages/b";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                <Route exact path="/" component={a}/>
                <Route exact path="/addproduct" component={b}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;
