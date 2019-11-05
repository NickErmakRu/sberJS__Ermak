import React from 'react';

import Table from './components/table';
import data from './data';
import SearchPanel from './components/search-panel/search-panel'

import './App.css';

export default class App extends React.Component {

    state = {
        data,
        term: ''
    }

    onSearchChange = (term) => {
        this.setState( {term} )
    };

    search(items, term) {

        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }

    maxHeight(data) {

        let newArr = [];
        let maxHeightCharacter = '';
        data.forEach((el) => {
            newArr.push(Number.parseInt(el.height));
        });

        data.forEach((el) => {
            if (el.height == Math.max.apply(null, newArr)) {
                return maxHeightCharacter = el.name;
            }
        });

        return maxHeightCharacter;
    }


    render() {

        const { data, term } = this.state;

        const visiblePersons = this.search(data, term);

        const maxHeight = this.maxHeight(visiblePersons);

        return (
            <div>
                <SearchPanel
                    onSearchChange={this.onSearchChange} />

                <Table persons={ visiblePersons } maxHeightChar={ maxHeight }/>
            </div>
        );
    }
}


