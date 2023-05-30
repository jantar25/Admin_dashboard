import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
// import { lastIncome,AiOutlineArrowUp,AiOutlineArrowDown } from 'react-icons/ai';

import './Card.css'

const Card = ({card}) => {
  const {title,amount,description,Icon,color,background} = card

  return (
    <div className='Card-container'>
        <div className='Card-container-up'>
          <h2 style={{color}}>{title}</h2>
          <BsThreeDots />
        </div>
        <div className='Card-container-middle'>
          <div className='icon-container' style={{background}}>
            <Icon fill={color} />
          </div> 
          <div className='card-amount-container'>
            <h2 style={{color}}>{amount}</h2>
            {/* <div>
              <span style={{color}}>{(amount/lastIncome).toFixed(2)} %</span>
              <div className='arrow-container'>
                {(amount/lastIncome).toFixed(2) > 1 ? 
                <span className='increase'>
                  <AiOutlineArrowUp />
                  <span>Increase</span>
                </span> : 
                <span className='decrease'>
                  <AiOutlineArrowDown />
                  <span>Decrease</span>
                </span>}
                </div>
            </div> */}
          </div>
        </div>
        <span className='Card-container-bottom'>{description}</span>
     
    </div>
  )
}

export default Card