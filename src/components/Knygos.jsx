import React, { useState } from 'react';


function Knygos(props) {

    return (
        <div className="knygos">
            <div className="id">{props.id}</div>
            <img className="img" src={props.img} alt="knyga"></img>
            <div className="author">{props.author}</div>
            <div className="title">{props.title}</div>
            <div className="price">{props.price}</div>
            <button onClick={() => props.sell(props.id)}>Pirkti</button>
        </div>
    )
    
}
//<div className="status" onClick={() => props.sniuriukas(props.data.id)} style={
//    {backgroundColor: props.data.completed === false ? 'red' : 'green'}
//    }></div>

export default Knygos;