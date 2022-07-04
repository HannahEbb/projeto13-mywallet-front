
export default function Saldo ({saldo}) {

    return(
        <div>
           <div><h1>SALDO</h1></div>
           <div><h2 style={{ color: saldo > 0 ?  '#03AC00' : '#C70000'}} >R$ {parseFloat(saldo).toFixed(2)}</h2></div>
        </div>
    );
}