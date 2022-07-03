import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';


export default function TelaSaidas() {

    const { token  } = useContext(UserContext);
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");

    const navigate = useNavigate();

    function novaSaida (event) {
        event.preventDefault(); 

        const saida = {
            entry: valor,
            description: descricao,
            type: "saida"
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
       
        const promise = axios.post('http://localhost:5000/transacoes', saida, config);
        promise.then(res => {
            console.log(res);
            navigate('/home')});
            promise.catch(err => {
               console.log(err);
               alert("Preencha os campos corretamente.")});
       }


    return (
        <Container>
        <Header>
           <h1>Nova saída</h1>
        </Header>
        <form onSubmit={novaSaida}>
                <input type="text" value={valor} onChange={e => setValor(e.target.value)} placeholder="Valor"></input>
                <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Descrição"></input>
                <button type="submit">Salvar saída</button>
            </form>
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
    input {
        width: 100%;
        height: 52px;
        border: none;
        border-radius: 8px;
        background-color: var(--cor-branco);
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 400;
        color: var(--cor-preto);
        padding-left: 14px;
        ::placeholder {
            font-size: 20px;
            font-weight: 400;
            color: var(--cor-preto);
        }
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
    h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
    }
`