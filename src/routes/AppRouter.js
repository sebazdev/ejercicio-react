import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import About from '../components/About/About';
import Cart from '../components/Cart/Cart';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import { useAuth } from '../context/AuthContext';

const AppRouter = () => {

    const { user } = useAuth()

    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/about' element={<About />}/>
            {/* <Route path='/login' element={<PublicRoute user={user} redirectPath='/'><Login /></PublicRoute>}/> */}
            <Route element={<PublicRoute user={user} redirectPath='/' />}>
                <Route path='/login' element={<Login />} />
                {/* Rutas publicas */}
            </Route>
            {/* <Route path='/cart' element={<PrivateRoute user={user} redirectPath='/login'><Cart /></PrivateRoute>}/> */}
            <Route element={<PrivateRoute user={user} redirectPath='/login' />}>
                <Route path='/cart' element={<Cart />} />
            </Route>
        </Routes>
    )
}

export default AppRouter