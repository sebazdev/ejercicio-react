import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <Link to='/cart' className="CartWidget">
            <img src="/images/cart.png" alt='cart' className='CartImg'/>
            { 0 }
        </Link>
    );
}

export default CartWidget