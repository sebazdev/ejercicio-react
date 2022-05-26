import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                {/* <button className='Option'>Celulares</button>
                <button className='Option'>Tablets</button>
                <button className='Option'>Notebooks</button> */}
                
                <Link to='/about' className='Option'>About</Link>
                <NavLink to='/category/celular' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to='/category/tablet' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
            </div>
        </nav>
    )
}

export default NavBar