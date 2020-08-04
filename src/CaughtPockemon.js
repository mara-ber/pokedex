import React, { useState } from 'react';

const CaughtPockemon = () => {
    const date = new Date().toLocaleDateString();
    const [totalCaugnt, setCount] = useState(0);

    function incrementCount() {
        setCount(totalCaugnt + 1);
    }

    return (
        <div>
            <button onClick={incrementCount}>Click</button>
            <p>Caught {totalCaugnt} Pockemon on {date}</p>
        </div>

    );
}

export default CaughtPockemon;