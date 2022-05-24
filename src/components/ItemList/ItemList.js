import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products, handlePage }) => {
    return (
        <ul className='ListGroup'>
            {products.map(prod => {
                return (
                    <Item key={prod.id} {...prod} handlePage={handlePage}/>
                )
            })}
        </ul>
    )
}

export default ItemList