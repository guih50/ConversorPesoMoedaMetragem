import React from 'react';
import Conversor from './Conversor';
import './style.css';

export default function PaginaMoeda() {

     return(
        <div className="App1">
            <div className="linha1">
                <Conversor moedaA="USD" moedaB="BRL"></Conversor>
                <Conversor moedaA="BTC" moedaB="BRL"></Conversor>
            </div>
            <div className="linha1">
                <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
                <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
            </div>
            <div className="linha1">
                <Conversor moedaA="ARS" moedaB="BRL"></Conversor>
                <Conversor moedaA="JPY" moedaB="BRL"></Conversor>
            </div>
        </div>
    );
}