import React,{useState} from 'react'
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

import './login.css'

const Login = () => {
  const [userCode,setUserCode] = useState('')
  const [password,setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log({userCode,password})
    setUserCode('')
    setPassword('')
  }

  return (
    <div className='login-container'>
      <div className='login-form'>
        <form onSubmit={handleLogin}>
            <div>
              <label>Code d'utilisateur</label>
              <div>
                <input 
                  type='text'
                  value={userCode} 
                  placeholder="Code d'utilisateur"
                  onChange={(e)=> setUserCode(e.target.value)} />
                <img src={ProductIcon} alt='code-icon' />
              </div>
            </div>
            <div>
              <label>Mot de passe</label>
              <div>
                <input 
                  type='password' 
                  value={password}
                  placeholder="Mot de passe" 
                  onChange={(e)=> setPassword(e.target.value)}/>
                <img src={UserIcon} alt='code-icon' />
              </div>
            </div>
            <button type='Submit'>Connectez-vous</button>
          </form>
      </div>
      <footer>2023</footer>
    </div>
  )
}

export default Login