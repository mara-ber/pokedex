import React from 'react';


const Logo = (props) => {
    //console.log(props);
    //const appName = "Pokedex";
    return (
        <header>
            <h1>Welcome to the {props.appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
        </header>
    )
}

export default Logo;