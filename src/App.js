import React from 'react';

import Header from './components/header/header';
import RandomHouse from './components/random-house/random-house';
import OneRandomCharacter from './components/character-details/character-details';

import './App.css';

const App = () => {
  return (
      <div className='App'>
        <Header />
        <div className='random-info'>
          <RandomHouse />
        </div>
      </div>
  );
};

export default App;
