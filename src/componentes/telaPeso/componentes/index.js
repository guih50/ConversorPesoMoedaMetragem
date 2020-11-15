import React from 'react';
import ConversorKGL from './ConversorKGL';
import ConversorLKG from './ConversorLKG';
import './style.css';

export default function PaginaPeso() {
  
    return(
      <div className="App">
          <div className="linha">
              <ConversorKGL pesoA="Quilogramas" pesoB="Libras"></ConversorKGL>
              <ConversorLKG pesoA="Libras" pesoB="Quilogramas"></ConversorLKG>
          </div>
      </div>
    );
  }