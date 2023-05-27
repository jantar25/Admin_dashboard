import React from 'react'

import './index.css'

const ClientForm = ({toggleForm}) => {
    
    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted...')
    }
  return (
    <div className='form-container'>
        <form onSubmit={hanldeSubmit}>
            <h3>REMPLISSEZ LE FORMULAIRE CI DESSOUS</h3>
            <div className="divide-form">
                <div className='form-left'>
                    <h5>INFORMATION SUR L'ENTREPRISE</h5>
                    <div className='input-container'>
                        <label htmlFor='name'>Nom:</label>
                        <input name='name' type='text' placeholder='Amazon ltd' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='surname'>Address:</label>
                        <input name='surname' type='text' placeholder='Gisozi/Kigali' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Numero d'impot:</label>
                        <input name='address' type='text' placeholder="TNR09863900" />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Secteur des operations:</label>
                        <input name='address' type='text' placeholder='Minerais' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='type'>Type:</label>
                        <select name='type' placeholder='Type'>
                            <option>Persone 1</option>
                            <option>Persone 2</option>
                            <option>Persone 3</option>
                            <option>Persone 4</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Numero telephone:</label>
                        <input name='address' type='text' placeholder='0786523190' />
                    </div>
                </div>
                <div className='form-right'>
                    <h5>INFORMATION DU REPRESENTANT</h5>
                    <div className='input-container'>
                        <label htmlFor='number'>Noms:</label>
                        <input name='number' type='text' placeholder="Jonhy Abasik" />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Email:</label>
                        <input name='number' type='text' placeholder="john@gmail.com" />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='type'>Type d'identite:</label>
                        <select name='type' placeholder='Type'>
                            <option>Passeport</option>
                            <option>Permis de conduire</option>
                            <option>Carte d'identite</option>
                            <option>Autres</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Numero d'identite:</label>
                        <input name='number' type='text' placeholder="AV32190/203" />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Numero de telephone:</label>
                        <input name='number' type='text' placeholder="0786500090" />
                    </div>
                </div>
            </div>
            <div className='form-bottom'>
                <input type='submit' value='Enregistrer' className='submit' />
                <button onClick={toggleForm} className='cancel'>Fermer</button>
            </div>
        </form>
    </div>
  )
}

export default ClientForm