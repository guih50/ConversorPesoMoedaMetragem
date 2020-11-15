import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import telaInicial from '../telaInicial';
import telaDistancia from '../telaDistancia';
import telaPeso from '../telaPeso';
import telaMoeda from '../telaMoeda'

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ telaInicial } />
            <Route path='/telaDistancia' component={ telaDistancia } />
            <Route path='/telaPeso' component={ telaPeso } />
            <Route path='/telaMoeda' component={telaMoeda} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;