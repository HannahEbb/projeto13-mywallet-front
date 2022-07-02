import React from 'react';
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../UserContext";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import sair from "../../assets/Vector.png"; 


export default function TelaHome() {

    const { nome } = useContext(UserContext);

    return (
        <Container>
        <div>
            <h1>Olá, { nome }</h1>
            <img src={ sair } width="23px" height="24px"/>
        </div>

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
    
    div {
        display: flex;
        justify-content: space-between;
    }

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