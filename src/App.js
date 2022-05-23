import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';
import ClassCounter from './components/ClassCounter/ClassCounter'

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <NavBar />
      <button onClick={() => setShow(!show)}>No mostrar contador</button>
      {/* <h1>{quantity}</h1> */}
      {show && <Counter initial={10} color='red'/>}
      {/* <ClassCounter /> */}
      {/* <h1 style={{ color: 'red' }}>Hola Mundo</h1>
      <button onClick={() => console.log('Aprete el boton')}>Boton</button> */}
    </div>    
  );
}

export default App;
