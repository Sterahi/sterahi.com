import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link }  from 'react-router-dom'
import Article from '../Article/Article'
import Home from '../Home/Home'

import logo_transparent from './logo_transparent.png'
import './App.scss';

export default function AppRouter() {
    return (
        <>
            <Router>
                <div className = "navigation">
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to = "/projects">Projects</Link>
                        </li>
                    </ul>
                </div>

                <Switch>
                    <Route path = '/'>
                        <Home />
                    </Route>
                    <Route path = '/project/:id'>
                        <Article />
                    </Route>
                </Switch>
            </Router>
            <div className = 'home'>
                <div className = "hero">
                    <h1><img src = {logo_transparent} className = 'logo' alt = 'logo' /></h1>
                </div>
            </div>
        </>
    )
}
