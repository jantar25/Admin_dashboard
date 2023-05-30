import React,{useState} from 'react'

import './index.css'

const ClientForm = ({toggleForm}) => {
    const [inputs,setInputs] = useState({
        companyName:'',
        companyAddress:'',
        taxNumber:'',
        operation:'',
        type:'',
        companyPhone:'',
        sellerName:'',
        sellerEmail:'',
        indentityType:'',
        idNumber:'',
        sellerPhone:''
    })

    const handleChange = (e) => {
        setInputs({...inputs,[e.target.name]: e.target.value})
    }
    
    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
        toggleForm()
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
                        <input name='companyName' type='text' placeholder='Amazon ltd' onChange={handleChange}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='surname'>Address:</label>
                        <input name='companyAddress' type='text' placeholder='Gisozi/Kigali' onChange={handleChange}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Numero d'impot:</label>
                        <input name='taxNumber' type='text' placeholder="TNR09863900" onChange={handleChange}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Secteur des operations:</label>
                        <input name='operation' type='text' placeholder='Minerais' onChange={handleChange}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='type'>Type:</label>
                        <select name='type' onChange={handleChange}>
                            <option value=''>--Select type--</option>
                            <option value='1'>Persone 1</option>
                            <option value='2'>Persone 2</option>
                            <option value='3'>Persone 3</option>
                            <option value='4'>Persone 4</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Numero telephone:</label>
                        <input name='companyPhone' type='text' placeholder='0786523190' onChange={handleChange}/>
                    </div>
                </div>
                <div className='form-right'>
                    <h5>INFORMATION DU REPRESENTANT</h5>
                    <div className='input-container'>
                        <label htmlFor='number'>Noms:</label>
                        <input name='sellerName' type='text' placeholder="Jonhy Abasik" onChange={handleChange}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Email:</label>
                        <input name='sellerEmail' type='text' placeholder="john@gmail.com" onChange={handleChange}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='type'>Type d'identite:</label>
                        <select name='indentityType' onChange={handleChange}>
                            <option value=''>--selectione ton type d'ID--</option>
                            <option value='Passeport'>Passeport</option>
                            <option value='Permis de conduire'>Permis de conduire</option>
                            <option value="Carte d'identite">Carte d'identite</option>
                            <option value='Autres'>Autres</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Numero d'identite:</label>
                        <input name='idNumber' type='text' placeholder="AV32190/203" onChange={handleChange}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Numero de telephone:</label>
                        <input name='sellerPhone' type='text' placeholder="0786500090" onChange={handleChange}/>
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