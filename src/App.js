import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  // const [page, setPage] = useState({ path: 'list', id: '1'})
  

  return (
    <div className="App">
      
      {/* <div>
        <button onClick={() => setPage({ ...page, path: 'list'})}>list</button>
        <button onClick={() => setPage({ path: 'detail', id: '1'})}>detail</button>
      </div>
      { page.path === 'list' && <ItemListContainer handlePage={setPage}/>}
      { page.path === 'detail' && <ItemDetailContainer productId={page.id}/>} */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
