import React from 'react'
import { Link } from 'react-router-dom';
import useClickOutside from '../../Hooks/useClickOutside';

import './sellerMenu.css'

const SellerMenu = ({seller,closeSeller}) => {
  const dropDownRef = useClickOutside(closeSeller)
  const handleServiceCost = () => {
    closeSeller()
  }

  const handleWallet = () => {
    closeSeller()
  }

  return (
        <div className='seller-container' ref={dropDownRef}> 
          <Link to={`/seller/${seller}`} style={{textDecoration:'none'}}>
            <p className='btn'>Plus d'information</p>
          </Link>
          <p className='btn' onClick={handleServiceCost}>Frais de Service</p>
          <p className='btn' onClick={handleWallet}>Porte-feuille</p>
        </div>
  )
}

export default SellerMenu