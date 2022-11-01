import React from "react";
import './perfil.css';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Perfil() {
    const { user } = useAuth();
    const { signout } = useAuth();
    const navigate = useNavigate();

    function sair() {
        navigate('/');
        signout();
    }
    return(
        <div className="perfil">
            <h1>Perfil</h1>
            
            <div>
                <img src={user.picture} alt={'Profile'}/>
                <br />
                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>

            <button className="btn-logout" onClick={sair}>Sair da Conta</button>
        </div>
    )
}
export default Perfil;