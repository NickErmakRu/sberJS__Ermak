import React from 'react';

import HapiService from '../../services/hapi-service';
import Spinner from '../spinner/spinner';

import './spell-details.css'
import '../spinner/spinner.css'

export default class OneRandomSpell extends React.Component {

    hapiService = new HapiService();

    state = {
        spell: null,
        type: null,
        effect: null,
        loading: true
    };

    constructor() {
        super();
        this.spellInfo();
    }

    spellInfo() {

        this.hapiService
            .getAllSpells()
            .then((spells) => {

                const spell = Math.floor(Math.random()*spells.length);

                this.setState({
                    spell: spells[spell].spell,
                    type: spells[spell].type,
                    effect: spells[spell].effect,
                    loading: false
                });
            });
    }

    render() {

        const { spell, type, effect, loading } = this.state;

        if (loading) {
            return (
                <div className='random-spell-details'>
                    <h4>Случайное заклинание</h4>
                    <Spinner />
                </div>
            );
        }

        return (
            <React.Fragment>
                <div className='random-spell-details'>
                    <h4>Случайное заклинание</h4>
                    <p className='spellName spell'>{spell}</p>
                    <p className='spell'>({type})</p>
                    <p className='spellEffect spell'>"{effect}"</p>
                </div>
            </React.Fragment>
        )
    }
}
