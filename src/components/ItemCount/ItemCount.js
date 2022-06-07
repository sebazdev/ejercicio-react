import { useReducer } from 'react'
import './ItemCount.css'

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': 
            return { count: state.count + 1}
        case 'decrement':
            return { count: state.count - 1}
        case 'reset':
            return { count: initialState.count }
        default: 
            throw new Error()
    }
}

const ItemCount = ({onAdd})=> {
   //Componente encargado de seleccionar cantidad de productos a agregar.

   //La funcion recibida por props en ejecutada al hacer click en el boton,
   //Esa funcion debe recibir como parametro la cantidad seleccionada.
   const [state, dispatch] = useReducer(reducer, initialState)

   return(
       <div className='Counter'>          
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button className="Button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <h4 className='Number'>{state.count}</h4>
                <button className="Button" onClick={() => dispatch({ type: 'increment' })}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                <button className="Button" onClick={() => onAdd()}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount