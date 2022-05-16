import React from 'react'
import './App.css';

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: 'green'}}>
      <h1 style={{ color: 'red' }}>Hola Mundo</h1>
      <button onClick={() => console.log('Aprete el boton')}>Boton</button>
    </div>    
  );
}

export default App;
