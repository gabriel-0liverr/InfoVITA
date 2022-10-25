import React from 'react';
import {Routes,Route} from 'react-router-dom';

import LoginAdm from '../login/login';
import Dashboard from '../dashboard/dashboard';
import Equipamentos from '../equipamentos/equipamentos';

const Private = ({ Item }) => {
    const signed = true;

    return signed > 0 ? <Item/> : <LoginAdm/>;
};

export default function RotasAdm() {
    return (
        <Routes>
            <Route path="/adm/login" element={<LoginAdm/>}/>
            <Route path="/adm/dashboard" element={<Private Item={Dashboard}/>}/>
            <Route path="/adm/dashboard/equipamentos" element={<Private Item={Equipamentos}/>}/>
        </Routes>
    )
}