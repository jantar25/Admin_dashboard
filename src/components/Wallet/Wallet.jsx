import React, {useState} from 'react'

import './wallet.css'

const Wallet = ({seller,closeWallet}) => {
  const [inputs,setInputs] = useState({
    sellerId:seller,
    name:'',
    receipt: '',
    operateur: '',
    bank: '',
    number:'',
    account:''
  })

  const handleChange = (e) => {
    setInputs({...inputs,[e.target.name]:e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    closeWallet()
  }

  return (
    <div className='wallet-container'>
        <form onSubmit={handleSubmit}>
            <p className="wallet-form-head">Ajouter le Portefeuille</p>
            <div className="wallet-input-container">
                <label htmlFor="name">Nom:</label>
                <input id='name' type="text" name="name" onChange={handleChange} />
            </div>
            <div className='wallet-input-container'>
              <label>Recepteur:</label>
              <select name="receipt" onChange={handleChange}>
                <option value=''>--choisir recepeteur--</option>
                <option value='operateur'>Operateur</option>
                <option value='bank'>Bank</option>
              </select>
            </div>
            {inputs.receipt === 'operateur' &&
            <div>
              <div className='wallet-input-container' >
                <label>Operateur:</label>
                <select name="operateur" onChange={handleChange}>
                  <option value='MTN'>MTN</option>
                  <option value='Airtel'>Airtel</option>
                </select>
              </div>
              <div className='wallet-input-container'>
                <label>Numero</label>
                <input type='number' name="number" onChange={handleChange} />
              </div>
            </div>
            }
            {inputs.receipt === 'bank' &&
            <div>
              <div className='wallet-input-container'>
                <label>Bank:</label>
                <select name="bank" onChange={handleChange}>
                  <option value='BK'>Bank of Kigali</option>
                  <option value='GT'>GT Bank</option>
                  <option value='Equity'>Equity Bank</option>
                  <option value='EcoBank'>ECO-Bank</option>
                </select>
              </div>
              <div className='wallet-input-container'>
                <label>Account:</label>
                <input type='number' name="account" onChange={handleChange}/>
              </div>
            </div>
            }
            <div className='wallet-btn-container'>
              <button type='submit'>Ajouter</button>
              <button type='cancel' className='close' onClick={closeWallet}>Fermer</button>
            </div>
        </form>
    </div>
  )
}

export default Wallet