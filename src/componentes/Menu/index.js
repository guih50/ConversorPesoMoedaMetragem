import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Menu= () => (
    <body>
        <div className="header">
            <h1>Escolha o que deseja converter: </h1>
        </div>

        <div className="conteudo-opcao">
            <a><Link href="/#" className="opcao-teladistancia" to='/telaDistancia'>Distancia</Link></a>
            <a><Link href="/telaMoeda" className="opcao-telamoeda" to='/telaMoeda'>Moeda</Link></a>
            <a><Link href="/telaPeso" className="opcao-telapeso" to='/telaPeso'>Peso</Link></a>
        </div>
    </body>
)

export default Menu;