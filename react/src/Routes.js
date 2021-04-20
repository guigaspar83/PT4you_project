import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Anfitriao from './pages/Anfitriao';
import Registo from './pages/Registo';
import Iniciar from './pages/Iniciar';
import Casas from './pages/Casas';
 
function Routes(){
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Casas} path="/casas" />
            <Route component={Anfitriao} path="/anfitriao" />
            <Route component={Registo} path="/registo" />
            <Route component={Iniciar} path="/iniciar" />
        </BrowserRouter>
    )
}
 
export default Routes;