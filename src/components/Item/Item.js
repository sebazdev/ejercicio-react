import './Item.css'

const Item = ({id, title, thumbnail, price, handlePage}) => {
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
                <button onClick={() => handlePage({path: 'detail', id})}>Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item