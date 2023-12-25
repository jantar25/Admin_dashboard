import React from 'react'

import all_Users from '../../constants/users';
import Table from '../../components/Table/Table';
import Cards from '../../components/Cards/Cards';
import {cardItemsClients} from '../../constants/cards';
import './users.css'

const index = () => {
  return (
    <div className='users-container'>
      <Cards cardItems={cardItemsClients} />
      <div className="users-table-container">
        <Table 
          head={['UID','USERNAME','EMAIL','TYPE']}
          body={all_Users.map(user=>([
            user.userUid,
            user.username,
            user.email,
            user.type,
            ]))}
          />  
      </div>
    </div>
  )
}

export default index