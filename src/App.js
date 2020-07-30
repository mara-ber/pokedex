import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPocemon';
import CaughtPokemon from './CaughtPokemon';


function App() {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
      <CaughtPokemon />
    </div>
  );
}

export default App;
