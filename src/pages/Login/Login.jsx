import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { AiFillEyeInvisible,AiFillEye,AiFillMail } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

import { userLogin } from '../../Redux/apiCalls'
import './login.css'
import logo from '../../assets/images/logo.png'

const Login = () => {
  const dispatch = useDispatch()
  const {isFetching,error} = useSelector(state => state.currentUser)
  const [passwordType, setPasswordType] = useState("password");
  const [userCode,setUserCode] = useState('')
  const [password,setPassword] = useState('')

  const togglePassword = () => {
    passwordType==="password"?
     setPasswordType("text") :
    setPasswordType("password")
  }

  const handleLogin = (e) => {
    e.preventDefault()
    userLogin(dispatch,{userCode,password})
    setUserCode('')
    setPassword('')
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
            {error && <p className='notification'>**{error.payload}**</p>}
            <button className='login-btn' type='Submit'>{isFetching? 'Connection...' : 'Connectez-vous'}</button>
          </form>
      </div>
      <footer>Copyright © 2023 Bakanna Technology SARL</footer>
    </div>
  )
}

export default Login