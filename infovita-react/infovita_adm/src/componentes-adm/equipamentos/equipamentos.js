import React from "react";
import { Link } from "react-router-dom";

import './equipamentos.css';

function Equipamentos() {
    return(
        <>  
            <div className="body">
                <div className="left">
                    <h2>Equipamentos</h2>
                    <Link to='/home'>
                        <button>Voltar</button>
                    </Link>
                </div>
                
                <section>
                    <div className="search">
                        <input placeholder="Digite o equipamento"/>
                        <button>Search</button>
                    </div>

                    <br />
                    
                    <li>
                        <ul>item</ul>
                        <ul>item</ul>
                        <ul>item</ul>
                        <ul>item</ul>
                    </li>
                </section>

                <section>
                    <h2>Title</h2>
                    
                    <li>
                        <ul>item</ul>
                        <ul>item</ul>
                        <ul>item</ul>
                        <ul>item</ul>
                    </li>
                </section>
            </div>
        </>
    )
}

export default Equipamentos;