import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import './navBar.css';

export class NavBar extends React.Component {

    render() {
        const {user} = this.props;

        if (user) {
            if (user.role === 'admin') {
                return (
                    <div>
                        <header className='blog-header row'>
                            <Link className='logo text-dark' to='/'>cinemalism</Link>
                            <div className='blog-pages'>
                                <Link className='text-dark' to='/reviews'>рецензии</Link>
                                <Link className='text-dark' to='/news'>новости</Link>
                                <div></div>
                                <Link className='text-dark userName' to='/'>{user.name || user.user.name}</Link>
                                <Link className='btn btn-warning btn-sm' to='/logout'>Выход</Link>
                            </div>
                        </header>
                        <header className='adminHeader'>
                            <Link className='btn btn-primary btn-sm newPost' to='/new_post'>добавить статью</Link>
                            <Link className='btn btn-primary btn-sm newPost' to='/new_admin'>зарегать нового админа</Link>
                        </header>
                    </div>
                )
            } else {
                return (
                    <div>
                        <header className='blog-header row'>
                            <Link className='logo text-dark' to='/'>cinemalism</Link>
                            <div className='blog-pages'>
                                <Link className='text-dark' to='/reviews'>рецензии</Link>
                                <Link className='text-dark' to='/news'>новости</Link>
                                <div></div>
                                <Link className='text-dark userName' to='/'>{user.name || user.user.name}</Link>
                                <Link className='btn btn-warning btn-sm' to='/logout'>Выход</Link>
                            </div>
                        </header>
                    </div>
                )
            }
        } else {
            return (
                <div>
                    <header className='blog-header row'>
                        <Link className='logo text-dark' to='/'>cinemalism</Link>
                        <div className='blog-pages'>
                            <Link className='text-dark' to='/reviews'>рецензии</Link>
                            <Link className='text-dark' to='/news'>новости</Link>
                            <Link className='btn btn-success btn-sm' to='/login'>Вход</Link>
                        </div>
                    </header>
                </div>
            );
        }
    }
}


const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default connect(mapStateToProps)(NavBar);
