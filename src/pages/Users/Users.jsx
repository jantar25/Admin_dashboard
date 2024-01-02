import React, {useState} from 'react'

import all_Users from '../../constants/users';
import Table from '../../components/Table/Table';
import Cards from '../../components/Cards/Cards';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm';
import {cardItemsClients} from '../../constants/cards';
import './users.css'

const Users = () => {
  const [toggleResetPasswordForm,setToggleResetPasswordForm] = useState(false)
  const [userUid, setUserUid] = useState("")

  const handleResetUserPassword = (userId) => {
    setUserUid(userId)
    setToggleResetPasswordForm(!toggleResetPasswordForm)
  }

  const handleActivateUser = (userId) => {
    console.log(`Activate user ${userId}`);
  }

  const handleDeactivateUser = (userId) => {
    console.log(`Deactivate user ${userId}`);
  }

  if(toggleResetPasswordForm){
    document.body.classList.add('overflow-hidden')
  } else  {
      document.body.classList.remove('overflow-hidden')
  }
  
  return (
    <div className='users-container'>
      <Cards cardItems={cardItemsClients} />
      {toggleResetPasswordForm && 
        <div className='modal-container'>
          <div className='modal-cover'>
            <ResetPasswordForm user={userUid} closeForm={setToggleResetPasswordForm} />
          </div>
        </div>
      }
      <div className="users-table-container">
        <Table 
          head={['UID','No','USERNAME','EMAIL','STATUT','TYPE','ACTION']}
          body={all_Users.map((user,index)=>([
            user.userUid,
            index+1,
            user.username,
            user.email,
            user.status,
            user.type,
            ]))}
          resetUserPassword = {handleResetUserPassword}
          activateUser = {handleActivateUser}
          deactivateUser = {handleDeactivateUser}
          />  
      </div>
    </div>
  )
}

export default Users