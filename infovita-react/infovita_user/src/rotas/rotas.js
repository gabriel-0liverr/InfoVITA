import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../AppLogin';
import Home from '../componentes-user/home/home';
import Perfil from '../componentes-user/perfil/perfil';
import Busca from '../componentes-user/busca/busca';
import useAuth from '../hooks/useAuth';

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item/> : <Login/>;
};

export default function RotasUser() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Private Item={Home}/>}/>
            <Route path="/perfil" element={<Private Item={Perfil}/>}/>
            <Route path="/busca" element={<Private Item={Busca}/>}/>
        </Routes>
    )
}