import React from 'react';


export default function Transacao ({ date, description, type, entry }) {

    return(
        <div>
            <h4>{date}</h4> <h3>{description}</h3><h2>R$ {entry}</h2>
        </div>
    );
}


