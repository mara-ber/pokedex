import React from 'react';
import Logo from './Logo';
import BestPockemonFetcher from './BestPocemon';
import CaughtPockemon from './CaughtPockemon';
import './App.css';



function App() {

  // function logWhenClicked() {
  //   console.log("just a log");
  // }

  // function logWhenTextClicked() {
  //   console.log("second log");
  // }

  return (
    <div className="App">
      <Logo appName="Pokedex" />
      <BestPockemonFetcher />
      {/* <BestPockemon pockemon={NewPockemon} handleClick={logWhenTextClicked} /> */}
      <CaughtPockemon />
    </div>
  );
}

export default App;
