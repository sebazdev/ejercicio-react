import './Button.css'

const Button = ({ handleClick, children }) => {
    return <button onClick={handleClick} className='Option'>{children}</button>
}

export default Button