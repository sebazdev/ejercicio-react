import { useState, useEffect } from 'react'
import Button from '../Button/Button'

const Count  = ({ initial, color, onAdd }) => {
    const [count, setCount] = useState(initial)
    const [title, setTitle] = useState('Titulo')
    const [result, setResult] = useState(0)

    const onResize = () => {
        console.log('resize')
    }

    useEffect(() => {
        console.log('ya se monto')
        setCount((prev => prev + 1))
        window.addEventListener('resize', onResize)
        // setCount(prev => prev + 1)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [title])

    useEffect(() => {
        // setTitle(title === 'Titulo' ? 'Titulo2' : 'Titulo')
        console.log('cambio el estado count')
        setResult(count * 2)
    }, [count])


    const decrement = () => {
        for(let i = 0; i < 2; i++) {
            setCount((prev) => prev - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }
    console.log(count)
    console.log('antes de montar')

    return(
        <div>
            <h1>{result}</h1>
            <button onClick={decrement}>-</button>
            {/* <Button handleClick={decrement}>
                Restar
            </Button> */}
            <div style={{ color }}>{count}</div>
            <button onClick={increment}>+</button>
            {/* <Button handleClick={increment}>
                Sumar
            </Button> */}
            <button onClick={() => onAdd(count)}>Agregar cantidad</button>
        </div>
    )
}

export default Count