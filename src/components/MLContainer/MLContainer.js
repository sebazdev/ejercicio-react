import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"

const MLContainer = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=auto')
    //         .then(result => {
    //            return result.json()
    //         }).then(json => {
    //             setProducts(json.results)
    //         })
    // }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(result => {
               return result.json()
            }).then(json => {
                setProducts(json.results)
            })
    }

    return (
        <div>
            <h1>Mercado Libre</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Buscar</button>
            </form>
            <ItemList products={products}/>
        </div>
    )
}

export default MLContainer