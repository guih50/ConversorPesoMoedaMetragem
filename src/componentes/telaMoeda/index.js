import React from 'react';
import BotaoVoltar from '../botaoVoltar';
import PaginaMoeda from './componentes';
import Menu from '../Menu';

const telaMoeda = () => (

  <div>
    <Menu />
    
    <div className="conteudo"><PaginaMoeda /></div>

    <BotaoVoltar />
  </div>
);

export default telaMoeda;