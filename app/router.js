import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './page/home'
import List from './page/list'

export default () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/list" component={ List }/>
    </Switch>
)
