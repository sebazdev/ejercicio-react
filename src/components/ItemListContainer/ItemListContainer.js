import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({handlePage}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        let isActive = true

        getProducts()
            .then(response => {
                const newProducts = response.map(prod => {
                    return {
                        id: prod.id,
                        title: prod.name,
                        thumbnail: prod.img,
                        price: prod.price
                    }
                })

                if(isActive) setProducts(newProducts)
            }).finally(() => {
                if(isActive) setLoading(false)
            })

        return () => {
            isActive = false
        }
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    
    return (
        <div>
            <h1>Listado de productos</h1>
            <ItemList products={products} handlePage={handlePage}/>
        </div>
    )
}

export default ItemListContainer