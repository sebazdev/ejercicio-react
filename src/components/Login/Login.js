import './Login.css'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { login } = useAuth()

    const handleLogin = (event) => {
        //Simular login, guardando solamente el nombre de usuario en un estado que tenga un alcance global en la aplicacion
        //Todas las validaciones de usuario logueado en toda la aplicacion se haran contra este estado.
        event.preventDefault()

        const userData = {
          username,
          password
        }

        login(userData)
        navigate('/')
    } 

    return (
        <div className='LoginContainer'>
          <h1>Login</h1>
          <form onSubmit={handleLogin} className='LoginForm'>
            <label className='LabelLogin'>
                Usuario
              <input
                className='InputLogin'
                type='text'
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </label>
            <label className='LabelLogin'>
                Contraseña
              <input
                className='InputLogin'
                type='password'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </label>
            <div className='LabelLogin'>
                <button type='submit' className='Option'>Login</button>
            </div>
          </form>
        </div>
      )
  }

export default Login