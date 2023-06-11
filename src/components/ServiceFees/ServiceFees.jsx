import React, { useState} from 'react'

import './service.css'
import trash from '../../assets/icons/trash.svg'

const ServiceFees = ({seller,closeServiceFees}) => {
  const [pay,setpay] = useState('')
  const [inputs,setInputs] = useState([
    {
    from:'',
    to:'',
    pourcentage:'',
    amount:'' 
  }
])

const handleChangePay = (e) => {
  setpay(e.target.value)
}

const handleChange = (index,e) => {
    let data = [...inputs];
    data[index][e.target.name] = e.target.value;
    setInputs(data);
  }

  const handleFeesForm = (e) => {
    e.preventDefault()
    console.log({...inputs,sellerId:seller,pay})
    closeServiceFees()
  }

  const addFields = (e) => {
    e.preventDefault()
    let newfield = {from:'', to:'', pourcentage:'', amount:'' }
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
                <input id='seller' type="radio" name="pay" value="seller" onChange={handleChangePay} />
                <label htmlFor="seller">Marchand</label>
              </div>
              <div className="radio-Btn">
                <input id='client' type="radio" name="pay" value="client" onChange={handleChangePay} />
                <label htmlFor="client">Client</label>
              </div>
            </div>
          </div>
          {inputs.map((input, index) => (
            <div className='form-inputs-container' key={index}>
                <div className="input-label-container">
                  <label htmlFor="from">De:</label>
                  <input id='from' type="number" name="from" value={input.name} onChange={(e)=>handleChange(index,e)}/>
                </div>
                <div className="input-label-container">
                  <label htmlFor="from">A:</label>
                  <input id='to' type="number" name="to" value={input.to} onChange={(e)=>handleChange(index,e)} />
                </div>
                <div className="input-label-container">
                  <label htmlFor="pourcentage">Pourcentage:</label>
                  <input id='pourcentage' type="number" name="pourcentage" value={input.pourcentage} onChange={(e)=>handleChange(index,e)}/>
                </div>
                <div className="input-label-container">
                  <label htmlFor="amount">Montant fixe:</label>
                  <input id='amount' type="number" name="amount" value={input.amount} onChange={(e)=>handleChange(index,e)} />
                </div>
                <img src={trash} alt='delete-icon' style={{cursor:'pointer'}} onClick={removeFields} />
            </div>
          ))}
          <div className='addForm-container'>
            <button className='addForm' onClick={addFields}>Ajouter formulaire</button>
          </div>
          <button onClick={handleFeesForm}>Approuver</button>
          <button className='close' onClick={closeServiceFees}>Fermer</button>
        </form>
    </div>
  )
}

export default ServiceFees