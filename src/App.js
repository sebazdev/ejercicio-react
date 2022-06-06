import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login'
import About from './components/About/About';

const App = () => {
  //Routear app

  //Siempre debe mostrarse el NavBar
  //En '/' debe mostrarse el listado de productos
  //En '/about' debe mostrarse el componente About
  //En '/login' debe mostrase el formulario de Login

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <About />
      <Login />
    </div>    
  );
}

export default App;
