import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <GoogleOAuthProvider clientId="574121934190-85vb2br5bigkvhh7g6d194lmbpdad898.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>;
    
  </React.StrictMode>
);