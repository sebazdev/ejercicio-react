import './Login.css'


const Login = () => {

    const handleLogin = (event) => {
        //Simular login, guardando solamente el nombre de usuario en un estado que tenga un alcance global en la aplicacion
        //Todas las validaciones de usuario logueado en toda la aplicacion se haran contra este estado.
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
                // value={username}
              />
            </label>
            <label className='LabelLogin'>
                Contraseña
              <input
                className='InputLogin'
                type='password'
                // value={password}
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