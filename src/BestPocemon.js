import React from 'react';

const BestPokemon = (props) => {
    //const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return (
        <div>
            <p>just a pokemon</p>
            {props.abilities.map((ability) => {
                return (
                    <ul>
                        <li>{ability}</li>
                    </ul>);
            })}
        </div>
    )
}

export default BestPokemon;