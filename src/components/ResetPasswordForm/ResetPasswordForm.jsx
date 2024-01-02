import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai'
import CancelIcon from '../../assets/icons/cancel.svg'
import './resetPasswordForm.css'

const ResetPasswordForm = ({user,closeForm}) => {
    const [error,setError] = useState(null)
    const [isFetching,setIsFetching] = useState(null)
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const togglePassword = () => {
        passwordType==="password"?
         setPasswordType("text") :
        setPasswordType("password")
      }
    
    const toggleConfirmPassword = () => {
        confirmPasswordType==="password"?
        setConfirmPasswordType("text") :
        setConfirmPasswordType("password")
      }

    const handleResetPassword = (e) => {
        e.preventDefault()
        setIsFetching(true)
        try {
            console.log({user,password,confirmPassword})
            setIsFetching(false)
            setPassword('')
            setConfirmPassword('')
        } catch (error) {
            setError(error.message)
            setIsFetching(false)
        }
    }

  return (
    <div className='resetForm-container'>
        <img src={CancelIcon} alt='canceled-icon' className='cancel-icon' onClick={() => closeForm(false)} />
        <form onSubmit={handleResetPassword}>
        <div className='title'>
              <FaUserAlt />
              <h3>Réinitialiser Mot de passe</h3>
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
            <div className='input-container'>
              <label>Confirmez Mot de passe: </label>
              <div className='input-field'>
                <input 
                  type={confirmPasswordType} 
                  value={confirmPassword}
                  placeholder="Confirmez Mot de passe" 
                  onChange={(e)=> setConfirmPassword(e.target.value)}/>
                <div onClick={toggleConfirmPassword} className='icon-container btn'>
                  {confirmPasswordType !== 'text' ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
            </div>
            {error && <p className='notification'>**{error.payload}**</p>}
            <button className='login-btn' type='Submit'>{isFetching? 'Réinitialisation...' : 'Réinitialiser'}</button>
        </form>
    </div>
  )
}

export default ResetPasswordForm