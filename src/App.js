import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import useTodo from "./hooks"

function App() {

  let {
    count,
    updateCount
  } = useTodo(1)
  
  return (
    <div className="App">
      <header className="App-header">
        
          <h1>{count}</h1>

          <br/>

          <button onClick={updateCount}>Count</button>

      </header>
    </div>
  );
}

export default App;
