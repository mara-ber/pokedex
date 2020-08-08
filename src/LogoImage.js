import React from 'react';

const LogoImage = (props) => {
    return props.pockemon ? (
        <div>
            <img onClick={props.handleClick}
                src={props.pockemon.sprites.other.dream_world.front_default}
                alt="" />
        </div>
    ) : (
            "Loading..."
        )
}

export default LogoImage;