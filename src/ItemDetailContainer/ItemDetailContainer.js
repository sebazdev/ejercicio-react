import { useState, useEffect } from "react"
import { getProductById } from "../asyncmock"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById()
            .then(response => {
                setProduct(response)
            })
    }, [])
    
    console.log(product)

    return(
        <h1>Detalle</h1>
    )
}

export default ItemDetailContainer