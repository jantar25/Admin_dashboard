import React from 'react'

import './Card.css'

const Card = ({card}) => {
  const { title, amount, description, number } = card

  return (
    <div className='Card-container'>
        <div className='Card-container-up'>
          <h3>{title}</h3>
        </div>
        <div className='Card-container-middle'>
          <div className='card-amount-container'>
            {amount &&
            <div className='amount-container'>
                <span>Montant:</span>
                <h1>{amount} <span className='currency'>FCFA</span></h1>
              </div>
            }
            {number &&
              <div className='number-container'>
                <span>Nombre:</span>
                <h1>{number}</h1>
              </div>}
          </div>
        </div>
        <span className='Card-container-bottom'>{description}</span>
    </div>
  )
}

export default Card