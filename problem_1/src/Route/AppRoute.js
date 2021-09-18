import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import a from "../Pages/a";
import b from "../Pages/b";
import c from '../Pages/c';
import d from '../Pages/d';
import e from '../Pages/e';
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                <Route exact path="/" component={a}/>
                <Route exact path="/addproduct" component={b}/>
                <Route exact path="/product" component={c}/>
                <Route exact path="/show" component={d}/>
                <Route exact path="/about" component={e}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;
