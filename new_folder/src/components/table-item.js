import React from 'react';

import './table-item.css';


const TableItem = (props) => {

    const {name, height, mass, hair_color, eye_color, birth_year, gender, maxHeightChar} = props;

    if (name === maxHeightChar) {

        return (

            <tr>
                <td style={{backgroundColor: 'red', color: 'white', fontWeight: 'bold'}}>{name}</td>
                <td style={{backgroundColor: 'red', color: 'white', fontWeight: 'bold'}}>{height}</td>
                <td>{mass}</td>
                <td>{hair_color}</td>
                <td>{eye_color}</td>
                <td>{birth_year}</td>
                <td>{gender}</td>
            </tr>

        );
    }

    else {
        return (

            <tr>
                <td>{name}</td>
                <td>{height}</td>
                <td>{mass}</td>
                <td>{hair_color}</td>
                <td>{eye_color}</td>
                <td>{birth_year}</td>
                <td>{gender}</td>
            </tr>
        );
    }
}

export default TableItem;
