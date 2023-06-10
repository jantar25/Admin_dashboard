import React from 'react'

import './wallet.css'

const Wallet = ({seller,closeWallet}) => {
    console.log(seller)
  return (
    <div className='wallet-container'>
        Wallet
        <button onClick={closeWallet}>Fermer</button>
    </div>
  )
}

export default Wallet