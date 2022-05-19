import './NavBar.css'

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <h3>Ecommerce</h3>
            <div className='Categories'>
                <button className='Option'>Celulares</button>
                <button className='Option'>Tablets</button>
                <button className='Option'>Notebooks</button>
            </div>
        </nav>
    )
}

export default NavBar