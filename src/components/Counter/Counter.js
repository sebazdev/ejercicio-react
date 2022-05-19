import { useState } from 'react'
import Button from '../Button/Button'

const Count  = ({ initial, color, onAdd }) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div>
            {/* <button onClick={decrement}>-</button> */}
            <Button handleClick={decrement}>
                Restar
            </Button>
            <div style={{ color }}>{count}</div>
            {/* <button onClick={increment}>+</button> */}
            <Button handleClick={increment}>
                Sumar
            </Button>
            <button onClick={() => onAdd(count)}>Agregar cantidad</button>
        </div>
    )
}

export default Count