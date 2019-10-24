import React from 'react';

import HapiService from '../../services/hapi-service';
import Spinner from '../spinner/spinner';

import './character-details.css'
import '../spinner/spinner.css'

export default class OneRandomCharacter extends React.Component {

    hapiService = new HapiService();

    state = {
        name: null,
        alias: null,
        bloodstatus: null,
        house: null,
        role: null,
        wand: null,
        patronus: null,
        boggart: null,
        loading: true
    };

    constructor() {
        super();
        this.characterInfo();
    }

    characterInfo() {

        this.hapiService
            .getAllCharacters()
            .then((characters) => {
                console.log(this.props.house);
                const character = [];
                characters.forEach((person) => {
                    if (person.hasOwnProperty('house')) {
                        if ((person.species === 'human') &&
                            (person.house === this.props.house)) {
                            character.push(person);
                        }
                    }
                });
                console.log(character);

                const num = Math.floor(Math.random()*(character.length-1));
                this.setState({
                    name: character[num].name,
                    alias: character[num].alias,
                    bloodstatus: character[num].bloodStatus,
                    role: character[num].role,
                    wand: character[num].wand,
                    patronus: character[num].patronus,
                    boggart: character[num].boggart,
                    house: character[num].house,
                    loading: false
                });
            });
    }

    render() {

        const { name, role, alias, wand, bloodstatus, patronus, boggart, house, loading } = this.state;

        if (loading) {
            return (
                <React.Fragment>
                    <div className='random-char-details'>
                        <Spinner />
                    </div>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <div className='random-char-details'>
                    <h4>Связанный персонаж</h4>
                    <p>Имя: {name}</p>
                    <p>Роль: {role}</p>
                    <p>Чистота крови: {bloodstatus}</p>
                    <p>Факультет: {house}</p>
                    <p>Прозвище: {alias}</p>
                    <p>Палочка: {wand}</p>
                    <p>Патронус: {patronus}</p>
                    <p>Боггарт: {boggart}</p>
                </div>
            </React.Fragment>
        )
    }
}
