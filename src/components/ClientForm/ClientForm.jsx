import React,{useState} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'

import { getMarchants } from '../../Redux/apiCalls';
import { baseURL } from '../../constants/baseURL';
import './index.css'

const ClientForm = ({toggleForm}) => {
    const dispatch = useDispatch()
    const [error,setError] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
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
        address: "",
        email:""
    })
    const [paymentInputs,setPaymentInputs] = useState({
        serviceFees: "",
        collectionMode:"",
        paymentMode:"",
        receiptor: "",
        operator: "",
        operatorNumber: "",
        bank: "",
        bankAccount:""
    })

    const handleNextPage = (e) => {
        e.preventDefault()
      setCurrentPage(currentPage + 1);
    };
  
    const handlePrevPage = (e) => {
        e.preventDefault()
      setCurrentPage(currentPage - 1);
    };

    const handleChangeBusinessInput = (e) => {
        setBusinessInputs({...businessInputs,[e.target.name]: e.target.value})
    }

    const handleChangeSellerInput = (e) => {
        setSellerInputs({...sellerInputs,[e.target.name]: e.target.value})
    }

    const handleChangePaymentInput = (e) => {
        setPaymentInputs({...paymentInputs,[e.target.name]: e.target.value})
    }

    const hanldeSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${baseURL}/merchant/`,
            {...businessInputs,merchantRepresentativeDto:{...sellerInputs},paymentInfo:{...paymentInputs}})
            getMarchants(dispatch)
            toggleForm()
        } catch (error) {
            console.log(error)
            setError(error.message)
            setTimeout(() => {
                setError(null)
              }, 5000)
        }
    }


  return (
    <div className='form-container'>
        <form>
            <h3>REMPLISSEZ LE FORMULAIRE CI DESSOUS</h3>
            <div>
                {currentPage === 1 && (
                    <div>
                        <h5>INFORMATION SUR L'ENTREPRISE</h5>
                        <div className="divide-form">
                            <div className='form-left'>
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
                            </div>
                            <div className='form-right'>
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
                        </div>
                    </div>
                )}
                {currentPage === 2 && (
                    <div>
                        <h5>INFORMATION DU REPRESENTANT</h5>
                        <div className="divide-form">
                            <div className='form-left'>
                                <div className='input-container'>
                                    <label htmlFor='number'>Noms:</label>
                                    <input name='names' type='text' placeholder="Jonhy Abasik" onChange={handleChangeSellerInput}/>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor='number'>Email:</label>
                                    <input name='email' type='text' placeholder="john@gmail.com" onChange={handleChangeSellerInput}/>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor='type'>Type d'identite:</label>
                                    <select name='idType' onChange={handleChangeSellerInput}>
                                        <option value=''>--Choisir ton type d'ID--</option>
                                        <option value='PASSEPORT'>Passeport</option>
                                        <option value='DRIVING_LICENSE'>Permis de conduire</option>
                                        <option value="NATIONAL_ID">Carte d'identite</option>
                                        <option value='OTHERS'>Autres</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-right'>
                                <div className='input-container'>
                                    <label htmlFor='number'>Numero d'identite:</label>
                                    <input name='idNumber' type='text' placeholder="AV32190/203" onChange={handleChangeSellerInput}/>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor='number'>Numero de telephone:</label>
                                    <input name='msisdn' type='text' placeholder="0786500090" onChange={handleChangeSellerInput}/>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor='surname'>Address:</label>
                                    <input name='address' type='text' placeholder='Gisozi/Kigali' onChange={handleChangeSellerInput}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 3 && (
                    <div>
                        <h5>MODALITE DE PAIMENT</h5>
                        <div className="divide-form">
                            <div className='form-left'>
                                <div className='input-container'>
                                    <label htmlFor='serviceFees'>Frais de service:</label>
                                    <input name='serviceFees' type='number' placeholder='20' min="20" max="100" required onChange={handleChangePaymentInput}/>
                                </div>
                                <div className='input-container' >
                                    <label>Mode de collection:</label>
                                    <select name="collectionMode" onChange={handleChangePaymentInput}>
                                        <option value=''>--choisir mode de collection--</option>
                                        <option value='TRANFERT'>Transfert</option>
                                        <option value='DEPOSIT'>Dépôt</option>
                                    </select>
                                </div>
                                <div className='input-container' >
                                    <label>Mode de paiement:</label>
                                    <select name="paymentMode" onChange={handleChangePaymentInput}>
                                        <option value=''>--choisir mode de paiement--</option>
                                        <option value='TRANFERT'>Transfert</option>
                                        <option value='DEPOSIT'>Dépôt</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-right'>
                                <div className='input-container'>
                                    <label htmlFor='type'>Recepteur:</label>
                                    <select name='receiptor' onChange={handleChangePaymentInput}>
                                        <option value=''>--choisir recepeteur--</option>
                                        <option value='OPERATEUR'>Operateur</option>
                                        <option value='BANK'>Bank</option>
                                    </select>
                                </div>
                                {paymentInputs.receiptor === 'OPERATEUR' &&
                                    <div>
                                    <div className='input-container' >
                                        <label>Operateur:</label>
                                        <select name="operator" onChange={handleChangePaymentInput}>
                                            <option value=''>--choisir Operateur--</option>
                                            <option value='MTN'>MTN</option>
                                            <option value='Airtel'>Airtel</option>
                                        </select>
                                    </div>
                                    <div className='input-container'>
                                        <label>Numero</label>
                                        <input type='number' name="operatorNumber" onChange={handleChangePaymentInput} />
                                    </div>
                                    </div>
                                    }
                                    {paymentInputs.receiptor === 'BANK' &&
                                    <div>
                                    <div className='input-container'>
                                        <label>Banque:</label>
                                        <select name="bank" onChange={handleChangePaymentInput}>
                                            <option value=''>--choisir la banque--</option>
                                            <option value='BK'>Bank of Kigali</option>
                                            <option value='GT'>GT Bank</option>
                                            <option value='Equity'>Equity Bank</option>
                                            <option value='EcoBank'>ECO-Bank</option>
                                        </select>
                                    </div>
                                    <div className='input-container'>
                                        <label>Compte Bancaire:</label>
                                        <input type='number' name="bankAccount" onChange={handleChangePaymentInput}/>
                                    </div>
                                    </div>
                                    }
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {error && <div className='error'>{error}</div>}
            <div className='form-bottom'>
                <div>
                    {(currentPage === 2 || currentPage === 3) && <button className='changePage' onClick={handlePrevPage}>Précédent</button>}
                    {(currentPage === 1 || currentPage === 2) && <button className='changePage' onClick={handleNextPage}>Suivant</button>}
                    <button onClick={toggleForm} className='cancel'>Fermer</button>
                </div>
                {currentPage === 3 && <input type='submit' value='Enregistrer' className='submit' onClick={hanldeSubmit} />}  
            </div>
        </form>
    </div>
  )
}

export default ClientForm