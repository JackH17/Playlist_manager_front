import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  return(
    <div>
      <h1>Playlistr</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('handle submit')
      }}>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
};

export default App;
