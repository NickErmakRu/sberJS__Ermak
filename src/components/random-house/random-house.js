import React from 'react';

import HapiService from '../../services/hapi-service';

import './random-house.css'

export default class OneRandomHouse extends React.Component {

    hapiService = new HapiService();

    state = {
        house: {}
    };

    constructor() {
        super();
        this.houseInfo();
    }

    onHouseLoaded = (house) => {
        this.setState({house});
    }

    houseInfo() {
        const number = Math.floor(Math.random()*4);
        let id = '';

        switch (number) {
            case 0:
                id = "5a05e2b252f721a3cf2ea33f";
                break;
            case 1:
                id = '5a05dc8cd45bd0a11bd5e071';
                break;
            case 2:
                id = "5a05dc58d45bd0a11bd5e070";
                break;
            case 3:
                id = "5a05da69d45bd0a11bd5e06f";
                break;
        }

        this.hapiService
            .getHouse(id)
            .then(this.onHouseLoaded);
    }

    render() {

        const { house: {name, founder, headOfHouse,
            mascot, houseGhost, colors} } = this.state;


        return (
            <React.Fragment>
                <div className='random-house-wrapper'>
                    <h3 className='random-house-name'>{name}</h3>
                    <div className='random-house-details'>
                        <p>Основатель: {founder}</p>
                        <p>Декан: {headOfHouse}</p>
                        <p>Приведение: {houseGhost}</p>
                        <p>Символ: {mascot}</p>
                        <p>Цвета: {colors}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
