import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from "../../asyncmock"

const ItemListContainer = ({handlePage}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        let isActive = true

        if(!categoryId) {
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
        } else {
            getProductsByCategory(categoryId)
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
        }       

        return () => {
            isActive = false
        }
    }, [categoryId])

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