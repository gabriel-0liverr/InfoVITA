import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Home from '../home/home';
import Perfil from '../perfil/perfil';
import Busca from '../busca/busca';

export default function RotasUser() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/busca" element={<Busca/>}/>
        </Routes>
    )
}