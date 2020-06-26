import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [count, setCount] = useState(1)

  const updateCount = () => {
    setCount(count + 1)
  }
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
