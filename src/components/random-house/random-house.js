import React from 'react';

import HapiService from '../../services/hapi-service';
import OneRandomCharacter from '../character-details/character-details';


import './random-house.css'

export default class RandomHouse extends React.Component {

    hapiService = new HapiService();

    state = {
        id: null,
        name: null,
        mascot: null,
        founder: null,
        headOfHouse: null,
        houseGhost: null,
        colors: null,
        imgSrc: null
    };

    constructor() {
        super();
        this.houseInfo();
    }

    houseInfo() {
        const number = Math.floor(Math.random() * 4);
        let id = '';
        let imgSrc = '';

        switch (number) {
            case 0:
                id = "5a05e2b252f721a3cf2ea33f";
                imgSrc = 'https://web.informatics.ru/works/html/2015/Afanas\'ev/images/Gryffindor.png';
                break;
            case 1:
                id = '5a05dc8cd45bd0a11bd5e071';
                imgSrc = 'https://web.informatics.ru/works/html/2015/Afanas\'ev/images/Slytherin.png';
                break;
            case 2:
                id = "5a05dc58d45bd0a11bd5e070";
                imgSrc = 'https://web.informatics.ru/works/html/2015/Afanas\'ev/images/Hufflepuff.png';
                break;
            case 3:
                id = "5a05da69d45bd0a11bd5e06f";
                imgSrc = 'https://web.informatics.ru/works/html/2015/Afanas\'ev/images/Ravenclaw.png';
                break;
        }

        this.hapiService
            .getHouse(id)
            .then((house) => {
                this.setState({
                    id,
                    name: house[0].name,
                    mascot: house[0].mascot,
                    founder: house[0].founder,
                    headOfHouse: house[0].headOfHouse,
                    houseGhost: house[0].houseGhost,
                    colors: house[0].colors.join(', '),
                    imgSrc
                });
            });
    }

    render() {

        const { name, founder, headOfHouse,
            mascot, houseGhost, colors, imgSrc } = this.state;

        return (
            <React.Fragment>
                <div className='random-house-wrapper'>
                    <div className='random-house-info'>
                        <h3 className='random-house-name'>{name}</h3>
                        <div className='random-house-details'>
                            <p>Основатель: {founder}</p>
                            <p>Декан: {headOfHouse}</p>
                            <p>Приведение: {houseGhost}</p>
                            <p>Символ: {mascot}</p>
                            <p>Цвета: {colors}</p>
                        </div>
                    </div>
                    <img src={imgSrc}/>
                </div>
                <OneRandomCharacter house={name}/>
            </React.Fragment>
        )
    }
}
