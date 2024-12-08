import React from 'react';
import './App.css';
import Heading from './components/Heading';
import handleClick  from './components/Handlenumber';


function App() {

  return (
    <div className="App">
      <Heading  firstName = "Fadil"/>
      <Heading  firstName = "Elisa"/>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the Number between 1 and 3</button>
    </div>
  );
}

export default App;
