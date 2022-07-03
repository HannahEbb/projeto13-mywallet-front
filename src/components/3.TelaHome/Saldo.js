import React, { useState } from 'react';


export default function Saldo ({saldo}) {

    const [soma, setSoma] = useState(0);

    return(
        <div>
           <div><h1>SALDO</h1></div>
           <div><h2>R$ {saldo}</h2></div>
        </div>
    );
}