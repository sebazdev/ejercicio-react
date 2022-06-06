import './NavBar.css'


const NavBar = () => {
    //Utilizar libreria y componente necesario para poder navegar entre las vistas.
    //Se debe mostrar CartWidget unicamente si hay un usuario loggeado
    //Si hay un usuario logueado cambiar el boton de Login por uno de Logout que limpie el estado global de usuario.

    return(
        <nav className='NavBar'>
            <h3>Ecommerce</h3>
            <div className='Categories'>            
                <button className='Option'>Products</button>
                <button className='Option'>About us</button>
                <button className='Option'>Login</button>
            </div>
        </nav>
    )
}

export default NavBar