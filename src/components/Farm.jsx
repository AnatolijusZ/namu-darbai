import React, { useState } from 'react';

function FARM() {
    const [color, changeColor] = useState();
    const [input, saveColor] = useState();

    const writeColor = (e) => {
            input: e.target.value;
        }

    const setColor = (color = input);
        changeColor(setColor) 
    

    return (
        <>
        <imput type="text" value={input} onChange={saveColor}></imput>
        <button onClick={setColor}></button>
        </>
    )
};



export default FARM;