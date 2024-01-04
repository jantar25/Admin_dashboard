import React, { useState } from 'react'
import CancelIcon from '../../assets/icons/cancel.svg'
import './EditProfileForm.css'

const EditProfileForm = ({user,closeForm}) => {
    const [error,setError] = useState(null)
    const [isFetching,setIsFetching] = useState(null)
    const [editedInput,setEditedInput] = useState({
      names:'',
      email:'',
      phoneNumber:''
    })

    const handleChangeEditedInput = (e) => {
      setEditedInput({...editedInput,[e.target.name]: e.target.value})
    }

    const handleEditProfile = (e) => {
        e.preventDefault()
        setIsFetching(true)
        try {
            console.log(editedInput)
            setIsFetching(false)
            setEditedInput({
              names:'',
              email:'',
              phoneNumber:''
            })
        } catch (error) {
            setError(error.message)
            setIsFetching(false)
        }
    }

  return (
    <div className='editForm-container'>
        <img src={CancelIcon} alt='canceled-icon' className='cancel-icon' onClick={() => closeForm(false)} />
        <form onSubmit={handleEditProfile}>
        <div className='title'>
              <h3>Changer votre profile</h3>
            </div>
            <div className='input-editContainer'>
              <label>Nom: </label>
              <input
                type='text'
                name='names'
                defaultValue={user.name} 
                onChange={handleChangeEditedInput}/>
            </div>
            <div className='input-editContainer'>
              <label>Email: </label>
              <input
                type='text'
                name='email'
                defaultValue={user.email} 
                onChange={handleChangeEditedInput}/>
            </div>
            <div className='input-editContainer'>
              <label>Phone Number: </label>
              <input
                type='text'
                name='phoneNumber'
                defaultValue={user.number} 
                onChange={handleChangeEditedInput}/>
            </div>
            {error && <p className='notification'>**{error.payload}**</p>}
            <button className='login-btn' type='Submit'>{isFetching? 'Changement...' : 'Changer'}</button>
        </form>
    </div>
  )
}

export default EditProfileForm