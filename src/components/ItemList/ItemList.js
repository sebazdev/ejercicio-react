import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    //Componente encargado de visualizar la lista de productos
    
    return (
        <ul className='ListGroup'>
            {products.map(prod => {
                return (
                    <Item />
                )
            })}
        </ul>
    )
}

export default ItemList