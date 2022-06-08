import './NavBar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWdiget'
import { useAuth } from '../../context/AuthContext'

const NavBar = () => {
    //Utilizar libreria y componente necesario para poder navegar entre las vistas.
    //Se debe mostrar CartWidget unicamente si hay un usuario loggeado
    //Si hay un usuario logueado cambiar el boton de Login por uno de Logout que limpie el estado global de usuario.
    const { user, logout } = useAuth()

    return(
        <nav className='NavBar'>
            <h3>Ecommerce</h3>
            <div className='Categories'>            
                <Link to='/' className='Option'>Products</Link>
                <Link to='/about' className='Option'>About us</Link>
                <Link to='/login'className='Option'>Login</Link>
            </div>
            {user && 
                <>
                    <CartWidget />
                    <button className='Option' onClick={() => logout()}>logout</button>
                </>
                    
            }
            
        </nav>
    )
}

export default NavBar