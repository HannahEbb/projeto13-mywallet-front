import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import UserContext from "./UserContext";
import TelaCadastro from "./components/2.TelaCadastro/TelaCadastro";
import TelaLogin from "./components/1.TelaLogin/TelaLogin";
import TelaHome from "./components/3.TelaHome/TelaHome";
import TelaEntradas from "./components/4.TelaEntradas/TelaEntradas";
import TelaSaidas from "./components/5.TelaSaidas/TelaSaidas";


export default function App() {

    const [token, setToken] = useState("");
    const [nome, setNome] = useState("");
    

    const contextValue = { token, setToken,
                            nome, setNome };

    return (

        <UserContext.Provider value={contextValue}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/sign-up" element={<TelaCadastro />} />
                <Route path="/home" element={<TelaHome />} />
                <Route path="/deposits" element={<TelaEntradas />} />
                <Route path="/outflow" element={<TelaSaidas />} />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>

    );
}