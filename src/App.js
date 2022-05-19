import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';

const App = () => {
  const [quantity, setQuantity] = useState(0)

  const handleOnAdd = (count) => {
    setQuantity(count)
  }

  return (
    <div className="App">
      <NavBar />
      <h1>{quantity}</h1>
      <Counter initial={10} color='red' onAdd={handleOnAdd}/>
      {/* <h1 style={{ color: 'red' }}>Hola Mundo</h1>
      <button onClick={() => console.log('Aprete el boton')}>Boton</button> */}
    </div>    
  );
}

export default App;
