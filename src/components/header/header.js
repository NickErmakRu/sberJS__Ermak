import React from 'react';

import './header.css'

const Header = () => {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className='title-name'>
            <h1>Harry Potter API</h1>
            <button onClick={refreshPage}>Обновить</button>
            {/*<div className='header-details'>*/}
            {/*    /!*<p>Персонажи</p>*!/*/}
            {/*    /!*<p>Заклинания</p>*!/*/}
            {/*    /!*<p>Факультеты</p>*!/*/}
            {/*</div>*/}
        </div>
    )
};

export default Header;
