import React from 'react';
import {Link} from 'react-router-dom';
import './pages/style.css';

function Header(){
    return (
        <header id="teste">
            <div id="logo">
                <Link to="/" id="home">PT4You</Link>
            </div>
            <div id="menu">
                <ul className="menu">
                    <li><Link to="/casas">Adicionar Casas</Link></li>
                    <li><Link to="/anfitriao">Seja Anfitrião</Link></li>
                    <li><Link to="/registo">Registo</Link></li>
                    <li><Link to="/iniciar">Iniciar</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;