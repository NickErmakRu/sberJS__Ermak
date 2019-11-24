import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './navBar/navBar.js';
import Login from './login/login';
import Posts from './posts/posts';
import NotFound from './notFound/notFound';

import './App.css';

export class App extends React.Component {
    render() {
        return (
            <div className='main-div'>
                <NavBar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={ Posts } />
                        <Route path='/login' component={ Login } />
                        <Route path='/' component={ NotFound } />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
