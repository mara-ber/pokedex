import React, { useState } from 'react';

const CaughtPockemon = () => {
    const date = new Date().toLocaleDateString();
    const [caughtPockemon, setCaughtPockemon] = useState([]);
    const [pockemonNameInput, setPockemonNameInput] = useState("");

    function catchPockemon() {
        if (!pockemonNameInput) {
            return null;
        } else {
            const caughtPockemonNew = caughtPockemon.concat(pockemonNameInput);
            setCaughtPockemon(caughtPockemonNew);
            setPockemonNameInput("")
        }

    }

    function handleInputChange(event) {
        //console.log(event.target.value);
        setPockemonNameInput(event.target.value);
    }

    return (
        <div>
            <input type="text"
                value={pockemonNameInput}
                onChange={handleInputChange}></input>
            <button onClick={catchPockemon}>Click</button>
            <ul>
                {caughtPockemon.map((pockemonName, key) => {
                    return (
                        <li key={key}> {pockemonName} </li>
                    )
                })}
            </ul>
            <p>Caught {caughtPockemon.length} Pockemon on {date}</p>
        </div>

    );
}

export default CaughtPockemon;