import './Item.css'

const Item = ({ id, title, thumbnail, category_id, price }) => {
    //Componente encargado de mostrar el detalle de productos

    //Debe mostrarse el contador unicamente si hay un usuario logueado.
    //Sino esta logueado mostrar un boton que vaya al formulario de Login

    //Al hacer click en "Agregar al carrito" dentro del contador 
    //se debe ejecutar un funcion que muestre en consola nombre de producto y cantidad agregada.

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
                    CategoriaId: {category_id}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
            </footer>
        </article>
    )
}

export default Item