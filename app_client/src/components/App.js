import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './navBar/navBar.js';
import Login from './login/login';
import Logout from './logout/logout';
import Register from './register/register';
import Posts from './posts/posts';
import PostPage from './postPage/postPage';
import AddNewPost from './addNewPost/addNewPost';
import NotFound from './notFound/notFound';

import Upload from './addNewPost/uploadPage'

import './App.css';

export class App extends React.Component {
    render() {
        return (
            <div className='main-div'>
                <NavBar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={ Posts } />
                        <Route exact path='/post/:id' component={ PostPage } />
                        <Route exact path='/new_post' component={ AddNewPost } />


                        <Route exact path='/upload' component={ Upload } />


                        <Route path='/login' component={ Login } />
                        <Route path='/register' component={ Register } />
                        <Route path='/logout' component={ Logout } />
                        <Route path='/' component={ NotFound } />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App
