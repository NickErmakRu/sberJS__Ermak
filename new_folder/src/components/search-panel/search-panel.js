import React from 'react';

import './search-panel.css'

export default class SearchPanel extends React.Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <div className='search-panel'>
                <input className='search-input'
                       placeholder='type character name'
                       value={ this.state.term }
                       onChange={ this.onSearchChange } />
            </div>
        );
    };
}
