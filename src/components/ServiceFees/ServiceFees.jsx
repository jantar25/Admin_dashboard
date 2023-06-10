import React, { useState} from 'react'

import './service.css'

const ServiceFees = ({seller,closeServiceFees}) => {
  const [inputs,setInputs] = useState({
    marchandId:seller,
    pay:'',
    from:'',
    to:'',
    pourcentage:'',
    amount:'' 
  })

  const handleChange = (e) => {
    setInputs({...inputs,[e.target.name]:e.target.value})
  }

  const handleFeesForm = (e) => {
    e.preventDefault()
    console.log(inputs)
    closeServiceFees()
  }

  return (
    <div className='servicefees-container'>
        <form onSubmit={handleFeesForm}>
          <div className="">
            <p className='form-head'>A la charge du:</p>
            <div className="radioBtn-container">
              <div className="radio-Btn">
                <input id='seller' type="radio" name="pay" value="seller" onChange={handleChange} />
                <label htmlFor="seller">Marchand</label>
              </div>
              <div className="radio-Btn">
                <input id='client' type="radio" name="pay" value="client" onChange={handleChange} />
                <label htmlFor="client">Client</label>
              </div>
            </div>
          </div>
          <div className='form-inputs-container'>
            <div className="devided-container">
              <div className="input-label-container">
                <label htmlFor="from">De:</label>
                <input id='from' type="number" name="from" onChange={handleChange}/>
              </div>
              <div className="input-label-container">
                <label htmlFor="from">A:</label>
                <input id='to' type="number" name="to" onChange={handleChange} />
              </div>
            </div>
            <div className="devided-container">
              <div className="input-label-container">
                <label htmlFor="pourcentage">Pourcentage %:</label>
                <input id='pourcentage' type="number" name="pourcentage" onChange={handleChange}/>
              </div>
              <div className="input-label-container">
                <label htmlFor="amount">Montant fixe:</label>
                <input id='amount' type="number" name="amount" onChange={handleChange} />
              </div>
            </div>
          </div>
          <button type='submit'>Approuver</button>
          <button type='cancel' className='close' onClick={closeServiceFees}>Fermer</button>
        </form>
    </div>
  )
}

export default ServiceFees