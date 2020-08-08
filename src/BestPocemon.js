import React, { useState, useEffect } from 'react';
import LogoImage from './LogoImage.js';

function BestPockemonFetcher(props) {
    //console.log("best pockemon fetcer");

    const [bestPockemon, setBestPockemon] = useState(null);

    useEffect(() => {
        //console.log("fetching data");
        setBestPockemon(null);
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
            .then(res => res.json())
            .then(data => {
                setBestPockemon(data);
            })
    }, [props.pokemonId]);


    return bestPockemon ? (
        <div>
            <LogoImage pockemon={bestPockemon} />
            <BestPockemon pockemon={bestPockemon} />
        </div>

    ) : (
            "Loading..."
        )
}

function BestPokemonSelector() {
    const [pokemonId, setPokemonId] = useState(null);

    function handleBulbasaurClick() {
        setPokemonId(1);
    }
    function handleCharmanderClick() {
        setPokemonId(4);
    }

    return (
        <div>
            {pokemonId ? <BestPockemonFetcher pokemonId={pokemonId} /> : null}
            <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
            <button onClick={handleCharmanderClick}>Fetch Charmander</button>

        </div>
    );
}


function BestPockemon(props) {

    return (
        <div>
            <p onClick={props.handleClick}> {props.pockemon.name.toUpperCase()} </p>
            <p> Abilities:  </p>
            {props.pockemon.abilities.map((ability, index) => {
                return (
                    <ul key={index}>
                        <li>{ability.ability.name}</li>
                    </ul>);
            })}

        </div>
    )
}


export default BestPokemonSelector;