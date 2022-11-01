import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//Rotas
import RotasUser from './rotas/rotas';

//Auth
import { AuthProvider } from './contexts/auth';

//Componentes
import BarraNav from './componentes-user/nav/nav';
import Footer from './componentes-user/footer/footer';


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <BarraNav/>

        <RotasUser/>

        <Footer/>

      </BrowserRouter>
    </AuthProvider>
  );
};