import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import AppRouter from './routes/AppRouter';

const App = () => {
  //Routear app

  //Siempre debe mostrarse el NavBar
  //En '/' debe mostrarse el listado de productos
  //En '/about' debe mostrarse el componente About
  //En '/login' debe mostrase el formulario de Login

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
        <NavBar />
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </div>    
  );
}

export default App;
