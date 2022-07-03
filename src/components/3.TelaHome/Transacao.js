import React from 'react';


export default function Transacao ({ date, description, type, entry }) {

    return(
        <div>
            <h4>{date}</h4> <h3>{description}</h3><h2 style={{ color: type==="entrada" ?  '#03AC00' : '#C70000'}}>R$ { parseFloat(entry).toFixed(2) }</h2>
        </div>
    );
}


