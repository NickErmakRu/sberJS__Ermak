import React from 'react';

import Header from './components/header/header';
import RandomHouse from './components/random-house/random-house';
import RandomOneSpell from './components/spell-details/spell-details';

import './App.css';

const App = () => {
  return (
      <div className='App'>
        <Header />
        <div className='random-info'>
          <RandomOneSpell />
          <RandomHouse />
        </div>
      </div>
  );
};

export default App;
