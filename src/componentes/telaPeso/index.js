import React from 'react';
import BotaoVoltar from '../botaoVoltar';
import Menu from '../Menu';
import PaginaPeso from'./componentes';
import './componentes/style.css'

const telaPeso = () => (
  <div>
    <Menu />
    
    <div className="conteudo"><PaginaPeso /></div>

    <BotaoVoltar />
  </div>
);

export default telaPeso;