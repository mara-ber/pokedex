import React from 'react';
import Logo from './Logo';
import BestPockemonFetcher from './BestPocemon';
import CaughtPockemon from './CaughtPockemon';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {

  // function logWhenClicked() {
  //   console.log("just a log");
  // }

  // function logWhenTextClicked() {
  //   console.log("second log");
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/best-pockemon">Best Pockemon</Link>
          <Link to="/caught-pockemon">Caught Pockemon</Link>
        </div>
        <Logo appName="Pokedex" />
        <div>
          <Route path="/best-pockemon" component={BestPockemonFetcher} />
          <Route path="/caught-pockemon" component={CaughtPockemon} />
        </div>


        {/* <BestPockemon pockemon={NewPockemon} handleClick={logWhenTextClicked} /> */}
        {/* <BestPockemonFetcher />
        <CaughtPockemon /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
