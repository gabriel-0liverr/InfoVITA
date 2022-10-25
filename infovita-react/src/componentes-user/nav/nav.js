import React from "react";
import { Link } from "react-router-dom";

import './nav.css';

function BarraNav() {
    return(
        <nav>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/perfil">Perfil</Link>
        </nav>
    )
}

export default BarraNav;