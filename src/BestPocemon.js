import React, { useState, useEffect } from 'react';


function BestPockemon(props) {
    // let a = props.pockemon.abilities.map(ability => ability.ability.name);
    // console.log(a);
    // console.log(props.pockemon[0].slot)
    //const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];

    return (
        <div>
            <p onClick={props.handleClick}>just a pokemon</p>
            {props.pockemon.abilities.map((ability, index) => {
                return (
                    <ul key={index}>
                        <li>{ability.ability.name}</li>
                    </ul>);
            })}
        </div>
    )
}


function BestPockemonFetcher() {
    console.log("best pockemon fetcer");

    const [bestPockemon, setBestPockemon] = useState(null);


    useEffect(() => {
        console.log("fetching data");
        fetch('https://pokeapi.co/api/v2/pokemon/1/')
            .then(res => res.json())
            .then(data => {
                setBestPockemon(data);
            })
    }, []);

    // if (!bestPockemon) {
    //     return null;
    // } else {
    //     console.log("rendering best pockemon: ");
    //     console.log(bestPockemon);
    //     return <BestPockemon pockemon={bestPockemon} />

    // }
    return bestPockemon ? (
        <BestPockemon pockemon={bestPockemon} />
    ) : (
            null
        )
}


export default BestPockemonFetcher;