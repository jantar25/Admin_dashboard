import React, { useState} from 'react'
import axios from 'axios'

import './service.css'
import trash from '../../assets/icons/trash.svg'
import { baseURL } from '../../constants/baseURL'

const ServiceFees = ({seller,closeServiceFees}) => {
  const [error,setError] = useState('')
  const [pay,setpay] = useState('')
  const [inputs,setInputs] = useState([
    {
      chargeAmountType:'',
      fromAmount:0,
      toAmount:0,
      chargeAmount:0 
  }
])

const handleChangePay = (e) => {
  setpay(e.target.value)
}

const handleChange = (index,e) => {
    let data = [...inputs];
    data[index][e.target.name] = e.target.value
    setInputs(data);
  }

  const refactoredInputs = inputs.map(input => ({
    chargeAmountType:input.chargeAmountType,
    fromAmount:Number(input.fromAmount),
    toAmount:Number(input.toAmount),
    chargeAmount:Number(input.chargeAmount),
  }))

  const fees = {
    merchantUid:seller,
    currency: "XAF",
    paidBy: pay,
    serviceChargeSlabs:[...refactoredInputs]
  }

  const handleFeesForm = async(e) => {
    e.preventDefault()
    try {
      await axios.post(`${baseURL}/service/charge/`,fees)
      closeServiceFees()
  } catch (error) {
      console.log(error)
      setError(error.message)
      setTimeout(() => {
          setError(null)
        }, 5000)
  }    
  }

  const addFields = (e) => {
    e.preventDefault()
    let newfield = {fromAmount:0, toAmount:0, chargeAmount:0, chargeAmountType:'' }
    setInputs([...inputs, newfield])
  }

  const removeFields = (index) => {
    let data = [...inputs];
    data.splice(index, 1)
    setInputs(data)
}

  return (
    <div className='servicefees-container'>
        <form>
          <div className="">
            <p className='form-head'>A la charge du:</p>
            <div className="radioBtn-container">
              <div className="radio-Btn">
                <input id='seller' type="radio" name="pay" value="MERCHANT" onChange={handleChangePay} />
                <label htmlFor="seller">Marchand</label>
              </div>
              <div className="radio-Btn">
                <input id='client' type="radio" name="pay" value="CLIENT" onChange={handleChangePay} />
                <label htmlFor="client">Client</label>
              </div>
            </div>
          </div>
          {inputs.map((input, index) => (
            <div className='form-inputs-container' key={index}>
                <div className="input-label-container">
                  <label htmlFor="from">De:</label>
                  <input id='from' type="number" value={input.fromAmount} name="fromAmount" onChange={(e)=>handleChange(index,e)}/>
                </div>
                <div className="input-label-container">
                  <label htmlFor="from">A:</label>
                  <input id='to' type="number" value={input.toAmount} name="toAmount" onChange={(e)=>handleChange(index,e)} />
                </div>
                <div className='input-label-container'>
                    <label htmlFor="chargeAmountType">Type de charge:</label>
                    <select name="chargeAmountType" value={input.chargeAmountType} onChange={(e)=>handleChange(index,e)}>
                        <option value=''>--Choisir mode--</option>
                        <option value='POURCENTAGE'>Pourcentage</option>
                        <option value='MONTANT-FIXE'>Montant fixe</option>
                    </select>
                </div>
                <div className="input-label-container">
                  <label htmlFor="amount">Montant:</label>
                  <input id='amount' type="number" value={input.chargeAmount} name="chargeAmount" onChange={(e)=>handleChange(index,e)} />
                </div>
                <img src={trash} alt='delete-icon' style={{cursor:'pointer'}} onClick={removeFields} />
            </div>
          ))}
          <div className='addForm-container'>
            <button className='addForm' onClick={addFields}>Ajouter formulaire</button>
          </div>
          {error && <div className='error'>{error}</div>}
          <button onClick={handleFeesForm}>Approuver</button>
          <button className='close' onClick={closeServiceFees}>Fermer</button>
        </form>
    </div>
  )
}

export default ServiceFees