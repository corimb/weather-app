import React from 'react';
import getDataFromApi from '../services/api';

import '../css/App.css';

function App() {
  const submit = () => {
    console.log('click!');
  };

  return (
    <div className='App'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor='search'>City</label>
        <input id='search' type='text'></input>
        <button type='submit' onClick={submit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
