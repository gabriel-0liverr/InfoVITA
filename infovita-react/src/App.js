import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//Rotas
import RotasUser from './componentes-user/rotas/rotas';
import RotasAdm from './componentes-adm/rotas/rotas';

//Componentes
import BarraNav from './componentes-user/nav/nav';
import Footer from './componentes-user/footer/footer';


export default function App() {
  return (
    <BrowserRouter>

      <BarraNav/>

      <RotasUser/>
      <RotasAdm/>

      <Footer/>

    </BrowserRouter>
  );
};