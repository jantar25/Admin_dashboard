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
        <div className='seller-type-container'><span className='seller-type'>{apiData.merchantName}</span></div>
        <div className='seller-type-container'><span>Solde:</span><span className='seller-type'>{apiData.balance}</span>FCFA</div>
        <div className="marchand-info-wrapper">
          <div className='marchand-container'>
            <h1 className='marchand-title'>INFORAMATION DU MARCHAND:</h1>
            <div className='info-seller'><label>ID:</label><span>{apiData.merchantUid}</span></div>
            <div className='info-seller'><label>Type:</label><span>{apiData.businessType}</span></div>
            <div className='info-seller'><label>Operation:</label><span>{apiData.areaOfOperation}</span></div>
            <div className='info-seller'><label>Nom:</label><span>{apiData.merchantRepresentativeDto.names}</span></div>
            <div className='info-seller'><label>Taxe:</label><span>{apiData.tinNumber}</span></div>
            <div className='info-seller'><label>Telephone:</label><span>{apiData.businessMsisdn}</span></div>
            <div className='info-seller'><label>Address:</label><span>{apiData.address}</span></div>
          </div>
          <div className='marchand-container'>
            <h1 className='marchand-title'>INFORMATION DU REPRESENTANT:</h1>
            <div className='info-seller'><label>ID:</label><span>{apiData.merchantRepresentativeDto.representativeUid}</span></div>
            <div className='info-seller'><label>ID-Type:</label><span>{apiData.merchantRepresentativeDto.idType}</span></div>
            <div className='info-seller'><label>ID-number:</label><span>{apiData.merchantRepresentativeDto.idNumber}</span></div>
            <div className='info-seller'><label>Nom:</label><span>{apiData.merchantRepresentativeDto.names}</span></div>
            <div className='info-seller'><label>Telephone:</label><span>{apiData.merchantRepresentativeDto.msisdn}</span></div>
            <div className='info-seller'><label>Address:</label><span>{apiData.merchantRepresentativeDto.address}</span></div>
          </div>
        </div>
        <div className='marchand-container'>
            <h1 className='marchand-title'>MODALITE DE PAIMENT:</h1>
            <div className='info-seller'><label>Liquidation-Type:</label><span>{apiData.paymentInfo.disbursement}</span></div>
            <div className='info-seller'><label>Operateur/Banque:</label><span>{apiData.paymentInfo.receiptor}</span></div>
            <div className='info-seller'><label>Numero de compte:</label><span>{apiData.paymentInfo.accountNumber}</span></div>
          </div>
      </div>
      }
    </div>
  )
}

export default Seller