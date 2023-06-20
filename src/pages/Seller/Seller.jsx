import React from 'react'
import { useLocation } from 'react-router-dom'

import useFetch from '../../Hooks/useFetch'
import {baseURL} from '../../constants/baseURL'
import './seller.css'

const Seller = () => {
  const location = useLocation()
  const currentSellerId = location.pathname.split('/')[2];
  const {isLoading,apiData,serverError} = useFetch(`${baseURL}/merchant/${currentSellerId}`)

  return (
    <div className='container-seller'>
      {isLoading && <div className='loading'>Telechargement...</div>}
      {serverError && <div className='error'>{serverError}</div>}
      {apiData && 
      <div>
        <div className='seller-type-container'>
          <span className='seller-type'>{apiData.businessType}</span>
          {/* <div className={`seller-icon-container ${apiData.status === 'active' ? 'seller-active' : 'seller-inactive'}`}>
            {currentSeller.status}
          </div> */}
        </div>
        <div className='info-seller'><label>ID:</label><span>{apiData.merchantUid}</span></div>
        <div className='info-seller'><label>Compagny:</label><span>{apiData.merchantName}</span></div>
        <div className='info-seller'><label>Nom:</label><span>{apiData.merchantRepresentativeDto.names}</span></div>
        <div className='info-seller'><label>Taxe:</label><span>{apiData.tinNumber}</span></div>
      </div>
      }
    </div>
  )
}

export default Seller