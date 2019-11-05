import React from 'react';
// import data from '../data';
import TableItem from './table-item'

import './table.css';

const Table = ( {persons, maxHeightChar} ) => {

    const items = persons.map(item => {
        return (<TableItem {...item} maxHeightChar={maxHeightChar} />)
    });

    return (
        <table>
            <tr>
                <td className='boldName'>Имя</td>
                <td className='boldName'>Рост</td>
                <td className='boldName'>Вес</td>
                <td className='boldName'>Цвет волос</td>
                <td className='boldName'>Цвет глаз</td>
                <td className='boldName'>Год рождения</td>
                <td className='boldName'>Пол</td>
            </tr>

                {items}
        </table>
    )
}

export default Table;
