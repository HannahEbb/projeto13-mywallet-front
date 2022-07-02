import React from 'react';
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import sair from "../../assets/Vector.png"; 
import Transacao from './Transacao';
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";


export default function TelaHome() {

    const { nome, token } = useContext(UserContext);
    const [transacoes, setTransacoes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    
        const URL = 'http://localhost:5000/transacoes';

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const promise = axios.get(URL, config);
        promise.then((response) => {
            const dados = response.data;
            console.log(dados);
            if(dados.length !==0) {
                setTransacoes([...dados]);
            }
        })

    }, []);



    return (
        <Container>
        <Header>
           <div><h1>Olá, { nome }</h1></div>
           <div><img src={ sair } width="23px" height="24px"/></div>
        </Header>
        <Transacoes>
            {transacoes ? transacoes.map( transacao => { return <Transacao key={transacao._id}
                                                                date={transacao.date} 
                                                                description={transacao.description} 
                                                                type={transacao.type}
                                                                entry={transacao.entry}/> })
            : "Não há registros de entrada ou saída"}
        </Transacoes>
        <Rotas>
            <div>
                <img src={plus} />
                <p>Nova entrada</p>
            </div>
            <div>
                <img src={minus} />
                <p>Nova saída</p>
            </div>
        </Rotas>

        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 25px;
    padding-left: 38px;
    padding-right: 38px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 28px;

   }

    button {
        width: 100%;
        height: 52px;
        background-color: var(--cor-roxo-claro);
        font-size: 20px;
        font-weight: 700;
        color: var(--cor-branco);
        border: none;
        border-radius: 8px;
        margin-bottom: 24px;
    }

    h2 {
        color: var(--cor-branco);
        font-size: 15px;
        font-weight: 700;
    }

    
`
const Header = styled.div`

    width: 326px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

const Transacoes = styled.div`
    width: 326px;
    height: 446px;
    background: var(--cor-branco);
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 23px;
    div {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
    }
   
    h4 {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        color: #C6C6C6;
    
       }
    h3 {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #000000;
       }
       h2 {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #000000;
       }
`

const Rotas = styled.div`
width: 326px;
display: flex;
justify-content: space-between;

div {
    width: 155px;
    height: 114px;
    background: var(--cor-roxo-claro);
    padding-left: 10px;
    padding-top:10px;
    diplay: flex;
    flex-direction: column;
    align-items: flex-end;
}

p{
    margin-top: 30px;
}

`
