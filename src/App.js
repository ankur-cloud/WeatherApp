import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import Weather from './Weather/Weather';

function App() {
  const [abc, setAbc] = useState();

  const handleCall = (cdata) => {
    setAbc(cdata)
  }
  console.log(abc);

  function parentData(dada) {
    let a
  }
  return (
    <div className="App">
      <div className='glass'>
        <Weather dog={handleCall} />
      </div>
    </div>
  );
}

export default App;
