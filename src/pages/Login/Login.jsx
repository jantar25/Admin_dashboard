import React,{useState} from 'react'
import { AiFillEyeInvisible,AiFillEye,AiFillMail } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

import './login.css'
import logo from '../../assets/images/logo.png'

const Login = ({allowAdmin}) => {
  const [passwordType, setPasswordType] = useState("password");
  const [userCode,setUserCode] = useState('')
  const [password,setPassword] = useState('')
  const [notification,setNotification] = useState(null)

  const togglePassword = () => {
    passwordType==="password"?
     setPasswordType("text") :
    setPasswordType("password")
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (userCode === 'Admin' && password === '123') {
      console.log({userCode,password})
      allowAdmin()
      setUserCode('')
      setPassword('')
    } else {
      setNotification('Username and/or password invalid')
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  return (
    <div className='login-container'>
      <div className='login-form'>
        <img src={logo} alt='logo' className='logo' />
        <form onSubmit={handleLogin}>
            <div className='title'>
              <FaUserAlt />
              <h3>Connection</h3>
            </div>
            <div className='input-container'>
              <label>Code d'utilisateur: </label>
              <div className='input-field'>
                <input 
                  type='text'
                  value={userCode} 
                  placeholder="Code d'utilisateur"
                  onChange={(e)=> setUserCode(e.target.value)} />
                <div className='icon-container'>
                  <AiFillMail />
                </div>
              </div>
            </div>
            <div className='input-container'>
              <label>Mot de passe: </label>
              <div className='input-field'>
                <input 
                  type={passwordType} 
                  value={password}
                  placeholder="Mot de passe" 
                  onChange={(e)=> setPassword(e.target.value)}/>
                <div onClick={togglePassword} className='icon-container btn'>
                  {passwordType !== 'text' ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
            </div>
            {notification && <p className='notification'>**{notification}**</p>}
            <button className='login-btn' type='Submit'>Connectez-vous</button>
          </form>
      </div>
      <footer>Copyright © 2023 Bakanna Technology SARL</footer>
    </div>
  )
}

export default Login