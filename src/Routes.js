import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './Components/Login'
import App from './Components/App'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component = {Login} />
                <Route path="/" component = {App} />
            </Switch>
        </BrowserRouter>

    );
}