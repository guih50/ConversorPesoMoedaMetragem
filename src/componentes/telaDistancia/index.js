import React from 'react';
import BotaoVoltar from '../botaoVoltar';
import PaginaDistancia from './componentes';
import Menu from '../Menu';

const telaDistancia = () => (
  <div>
    
    <Menu />
    
    <div className="conteudo"> <PaginaDistancia /> </div>

    <BotaoVoltar />
  </div>
);

export default telaDistancia;