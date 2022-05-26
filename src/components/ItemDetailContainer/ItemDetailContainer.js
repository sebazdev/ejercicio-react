import { useState, useEffect } from "react"
import { getProductById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    console.log(product)

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer