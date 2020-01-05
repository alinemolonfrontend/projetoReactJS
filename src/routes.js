import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/main';
import Product from './pages/product/product';
import Register from './pages/register/register';
import Login from './pages/login/login';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/products/:id" component={Product} />
            <Route path="/register/" component={Register} />
        </Switch>
    </BrowserRouter>

);

export default Routes;