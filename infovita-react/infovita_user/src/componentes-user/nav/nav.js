import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import './nav.css';

function BarraNav() {
    const { signed } = useAuth();

    return(
        <nav>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/home">Home</Link>
            
            {signed ? (
                <Link style={{textDecoration: 'none', color: 'black'}} to="/perfil">Perfil</Link>
            ) : ('')}
        </nav>
    )
}

export default BarraNav;