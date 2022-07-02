import React from 'react';
import { useContext } from "react";
import UserContext from "../../UserContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

export default function Transacao ({ date, description, type, entry }) {

    return(
        <div>
            <h4>{date}</h4> <h3>{description}</h3><h2>R$ {entry}</h2>
        </div>
    );
}


