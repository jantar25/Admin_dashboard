import React from 'react'

import './service.css'

const ServiceFees = ({seller,closeServiceFees}) => {
  return (
    <div className='servicefees-container'>
        ServiceFees
        <button onClick={closeServiceFees}>Fermer</button>
    </div>
  )
}

export default ServiceFees