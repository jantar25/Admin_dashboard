import React from 'react'

import './sellerMenu.css'

const SellerMenu = ({seller,closeSeller}) => {
   

  return (
        <div className='seller-container'>
            <p className='btn' onClick={closeSeller}>Plus d'information</p>
            <p className='btn' onClick={closeSeller}>Frais de Service</p>
            <p className='btn' onClick={closeSeller}>Porte feuille</p>
        </div>
  )
}

export default SellerMenu