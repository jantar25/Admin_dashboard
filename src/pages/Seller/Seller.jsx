import React from 'react'
import { useLocation } from 'react-router-dom'

import all_sellers from '../../constants/sellers'
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import './seller.css'

const Seller = () => {
  const location = useLocation()
  const currentSellerId = location.pathname.split('/')[2];
  const currentSeller = all_sellers.find(seller => seller.id === currentSellerId)

  console.log(currentSeller)
  return (
    <div className='container-seller'>
      <div className='seller-type-container'>
        <span className='seller-type'>{currentSeller.type}</span>
        <div className={`seller-icon-container ${currentSeller.status === 'active' ? 'seller-active' : 'seller-inactive'}`}>
          {currentSeller.status}
        </div>
      </div>
      <div className='info-seller'><label>ID:</label><span>{currentSeller.id}</span></div>
      <div className='info-seller'><label>Compagny:</label><span>{currentSeller.compagny}</span></div>
      <div className='info-seller'><label>Nom:</label><span>{currentSeller.represent}</span></div>
      <div className='info-seller'><label>Email:</label><span>{currentSeller.email}</span></div>
    </div>
  )
}

export default Seller