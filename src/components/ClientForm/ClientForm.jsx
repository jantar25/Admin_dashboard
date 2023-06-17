import React,{useState} from 'react'

import './index.css'

const ClientForm = ({toggleForm}) => {
    const [businessInputs,setBusinessInputs] = useState({
        merchantName: "",
        businessType: "",
        areaOfOperation: "",
        tinNumber: "",
        address: "",
        businessMsisdn: "",
        merchantRepresentativeDto: {}
    })
    const [sellerInputs,setSellerInputs] = useState({
        names: "",
        idType: "",
        idNumber: "",
        msisdn: "",
        address: ""
    })

    const handleChangeBusinessInput = (e) => {
        setBusinessInputs({...businessInputs,[e.target.name]: e.target.value})
    }

    const handleChangeBSellerInput = (e) => {
        setSellerInputs({...sellerInputs,[e.target.name]: e.target.value})
    }

    
    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.log({...businessInputs,merchantRepresentativeDto:{...sellerInputs}})
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
                        <input name='merchantName' type='text' placeholder='Amazon ltd' onChange={handleChangeBusinessInput}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='surname'>Address:</label>
                        <input name='address' type='text' placeholder='Gisozi/Kigali' onChange={handleChangeBusinessInput}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Numero d'impot:</label>
                        <input name='tinNumber' type='text' placeholder="TNR09863900" onChange={handleChangeBusinessInput}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Secteur des operations:</label>
                        <input name='areaOfOperation' type='text' placeholder='Minerais' onChange={handleChangeBusinessInput}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='type'>Type:</label>
                        <select name='businessType' onChange={handleChangeBusinessInput}>
                            <option value=''>--Choisir type de business--</option>
                            <option value='SCHOOL'>School</option>
                            <option value='BUSINESS'>Business</option>
                            <option value='STARTUP'>Start up</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='address'>Numero telephone:</label>
                        <input name='businessMsisdn' type='text' placeholder='0786523190' onChange={handleChangeBusinessInput}/>
                    </div>
                </div>
                <div className='form-right'>
                    <h5>INFORMATION DU REPRESENTANT</h5>
                    <div className='input-container'>
                        <label htmlFor='number'>Noms:</label>
                        <input name='names' type='text' placeholder="Jonhy Abasik" onChange={handleChangeBSellerInput}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Email:</label>
                        <input name='address' type='text' placeholder="john@gmail.com" onChange={handleChangeBSellerInput}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='type'>Type d'identite:</label>
                        <select name='idType' onChange={handleChangeBSellerInput}>
                            <option value=''>--Choisir ton type d'ID--</option>
                            <option value='PASSEPORT'>Passeport</option>
                            <option value='DRIVING_LICENSE'>Permis de conduire</option>
                            <option value="NATIONAL_ID">Carte d'identite</option>
                            <option value='OTHERS'>Autres</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Numero d'identite:</label>
                        <input name='idNumber' type='text' placeholder="AV32190/203" onChange={handleChangeBSellerInput}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='number'>Numero de telephone:</label>
                        <input name='msisdn' type='text' placeholder="0786500090" onChange={handleChangeBSellerInput}/>
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