import React from 'react';

import Header from './components/header/header';
import RandomHouse from './components/random-house/random-house';

import './App.css';

const App = () => {
  return (
      <div>
        <Header />
        <div className='random-house-page'>
          <RandomHouse />
          <imgHouse />
        </div>

      </div>
  );
};

export default App;
