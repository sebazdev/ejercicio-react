import './Item.css'
import { Link, useNavigate } from 'react-router-dom'

const Item = ({id, title, thumbnail, price}) => {
    const navigate = useNavigate()

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={thumbnail} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
                <button onClick={() => navigate('/about')}>About</button>
            </footer>
        </article>
    )
}

export default Item