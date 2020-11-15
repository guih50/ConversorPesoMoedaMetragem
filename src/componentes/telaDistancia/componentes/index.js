import React from 'react';
import ConversorMCm from './ConversorMCm';
import ConversorCmM from './ConversorCmM';
import ConversorPeM from './ConversorPeM';
import ConversorMPe from './ConversorMPe';
import ConversorPolM from './ConversorPolM';
import ConversorMPol from './ConversorMPol';
import '../style.css';

export default function PaginaDistancia() {
  
  return(
    <div className="App">
        <div className="linha">
            <ConversorMCm distanciaA="metros" distanciaB="centimetros"></ConversorMCm>
            <ConversorCmM distanciaA="centimetros" distanciaB="metros"></ConversorCmM>
        </div>
        <div className="linha">
            <ConversorMPe distanciaA="metros" distanciaB="pés"></ConversorMPe>
            <ConversorPeM distanciaA="pés" distanciaB="metros"></ConversorPeM>
        </div>
        <div className="linha">
            <ConversorMPol distanciaA="metros" distanciaB="polegadas"></ConversorMPol>
            <ConversorPolM distanciaA="polegadas" distanciaB="metros"></ConversorPolM>
        </div>
    </div>
  );
}