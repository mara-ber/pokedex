import React from 'react';
import LogoImage from './LogoImage';


const Logo = (props) => {

    // function logWhenClicked() {
    //     console.log("just a log")
    // }

    //console.log(props);
    //const appName = "Pokedex";
    return (
        <header>
            <h1>Welcome to the {props.appName}</h1>
            {/* <LogoImage pockemon={props.pockemon} /> */}
        </header>
    )
}

export default Logo;