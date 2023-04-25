import React from 'react'

import './index.css'

const ClientForm = ({toggleForm}) => {
    
    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted...')
    }
  return (
    <div className='form-container'>
        <button onClick={toggleForm}>close</button>
        <form onSubmit={hanldeSubmit}>
            <label>REMPLIS LE FORMULAIRE CI DESSOUS</label>
            <div className="">
                <label>INFORMATION DU CLIENT</label>
                <div className='input-container'>
                    <label htmlFor='name'>Nom:</label>
                    <input name='name' type='text' placeholder='Nom' />
                </div>
                <div className='input-container'>
                    <label htmlFor='surname'>Post-Nom:</label>
                    <input name='surname' type='text' placeholder='Post nom' />
                </div>
            </div>
            <div>
                <label>INFORMATION DE L'ENREGISTREUR</label>
                <div className='input-container'>
                    <label htmlFor='number'>Numero de l'agent:</label>
                    <input name='number' type='text' placeholder="Numero de l'agent" />
                </div>
            </div>
            <input type='submit' value= 'Enregistrer' />
        </form>
    </div>
  )
}

export default ClientForm