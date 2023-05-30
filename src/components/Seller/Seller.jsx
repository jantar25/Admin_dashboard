import React from 'react'

import './seller.css'

const Seller = ({seller,closeSeller}) => {
  const obj = {...seller}
    console.log(obj)
  return (
        <div className='seller-container'>
            <div className='seller-info'>
            {seller.map((item,key) => <div key={key}>{item}</div>)}
            <button className='btn-close' onClick={closeSeller}>close</button>
            </div>
        </div>
  )
}

export default Seller