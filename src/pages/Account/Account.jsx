import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm'
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm'
import './account.css'

const Account = () => {
  const [toggleChangePassword,setToggleChangePassword] = useState(false)
  const [toggleEditProfil,setToggleEditProfil] = useState(false)
  const [image,setImage] = useState(null)
  const {currentUser} = useSelector(state => state.currentUser)

  if(image) {
    const handleUpdateImage = () => {
      console.log(image)
    }
    handleUpdateImage()
  }

  return (
    <div className='profile-container'>
      <div className='profil-wrapper'>
        <div className='left'>
          <img src={currentUser.image} alt='profileImg' />
          <div>
            <p onClick={()=>setToggleEditProfil(!toggleEditProfil)}>Edit your profile</p>
            <p onClick={()=>setToggleChangePassword(!toggleChangePassword)}>Change your password</p>
          </div>
        </div>
        <div className='right'>
          <div>
            <h1>{currentUser.name}</h1>
            <span>{currentUser.isAdmin? "Administrateur":"Marchand"}</span>
          </div>
          <div>
            <input type='file' accept='Image/*' id='file' onChange={(e)=>setImage(e.target.files[0])} className='hidden' />
            <label htmlFor='file'>
              <p>Click in this area to add a Picture</p>
            </label>
          </div>
        </div>
      </div>
      {toggleChangePassword && 
        <div className='modal-container'>
          <div className='modal-cover'>
            <ResetPasswordForm user={currentUser} closeForm={setToggleChangePassword} />
          </div>
        </div>}
        {toggleEditProfil && 
        <div className='modal-container'>
          <div className='modal-cover'>
            <EditProfileForm user={currentUser} closeForm={setToggleEditProfil} />
          </div>
        </div>}
    </div>
  )
}

export default Account