import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import useTodo from "./hooks"

function App() {

  let {
    count,
    updateCount,
    loading,
    toggleDummyState
  } = useTodo(1)
  
  let display = count

  if(loading){
    display = "..."
  }
  return (
    <div className="App">
      <header className="App-header">
        
          <h1>{display}</h1>

          <br/>

          <button onClick={updateCount}>Count</button>
           
          <br/>

          <button onClick={toggleDummyState}>Dummy Button</button>
      </header>
    </div>
  );
}

export default App;
