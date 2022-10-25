import React from "react";
import './home.css';

function Home() {
    return(
        <>  
            <div className="home">
                <h1>INFOVITA</h1>
                <br/>
                <input></input>
                <button>Search</button>
            </div>

            <hr/>

            <div className="login">
                <h5>Faça o login para mais funcionalidades</h5>
                <button>Entrar com Google</button>
            </div>
        </>
    )
}

export default Home;