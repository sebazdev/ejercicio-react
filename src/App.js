import React, { useState } from 'react'
import './App.css';
import MLContainer from './components/MLContainer/MLContainer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  const [show, setShow] = useState(true)
  const [page, setPage] = useState({ path: 'list', id: 0})

  return (
    <div className="App">
      <NavBar />
      {/* {<MLContainer />} */}
      <button onClick={() => setShow(!show)}>No mostrar</button>
      {/* {show && <ItemListContainer />} */}
      { page.path === 'list' && <ItemListContainer handlePage={setPage}/>}
      { page.path === 'detail' && <ItemDetailContainer productId={page.id}/>}
    </div>    
  );
}

export default App;
