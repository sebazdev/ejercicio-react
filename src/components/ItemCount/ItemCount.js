import './ItemCount.css'

const ItemCount = ({onAdd})=> {
   //Componente encargado de seleccionar cantidad de productos a agregar.

   //La funcion recibida por props en ejecutada al hacer click en el boton,
   //Esa funcion debe recibir como parametro la cantidad seleccionada.
   return(
       <div className='Counter'>          
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button className="Button">-</button>
                <h4 className='Number'>0</h4>
                <button className="Button">+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd()}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount