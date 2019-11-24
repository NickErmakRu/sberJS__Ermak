import React from 'react';
import { Link } from "react-router-dom";

import './navBar.css';

const NavBar = () => {
    return (
        <header className='blog-header row'>
            <Link className='logo text-dark' to='/'>cinemalism</Link>
            <div className='blog-pages'>
                <Link className='text-dark' to='/reviews'>рецензии</Link>
                <Link className='text-dark' to='/news'>новости</Link>
                <Link className='btn btn-success btn-sm' to='/login'>Log In</Link>
            </div>


        </header>
    );
};

export default NavBar;
