import React from 'react'

import './Card.css'

const Card = ({card}) => {
  return (
    <div className='Card-container'>
        <h2>{card.title}</h2>
    </div>
  )
}

export default Card