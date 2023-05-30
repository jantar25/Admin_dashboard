import React from 'react'

import './seller.css'

const Seller = ({seller,closeSeller}) => {

  return (
        <div className='seller-container'>
            <div className='seller-info'>
            {seller.map((item,key) => <div key={key}>{item}</div>)}
            <button className='btn-close' onClick={closeSeller}>Fermer</button>
            </div>
        </div>
  )
}

export default Seller