import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'

import { getMarchants,searchMarchants } from '../../Redux/apiCalls';
import Table from '../../components/Table/Table';

import './styles.css';
import Cards from '../../components/Cards/Cards';
import {cardItemsClients} from '../../constants/cards';
import ClientForm from '../../components/ClientForm/ClientForm';
import SellerMenu from '../../components/SellerMenu/SellerMenu';
import Wallet from '../../components/Wallet/Wallet';
import ServiceFees from '../../components/ServiceFees/ServiceFees';
import searchIcon from '../../assets/icons/search.svg'


function Orders () {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');
    const [singleSeller, setSingleSeller] = useState();
    const [toggleForm,setToggleForm] = useState(false);
    const [toggleSeller,setToggleSeller] = useState(false)
    const [toggleWallet,setToggleWallet] = useState(false);
    const [toggleServiceFees,setToggleServiceFees] = useState(false)

    const {marchants,isFetching} = useSelector(state => state.marchants)
    console.log(marchants)
    const handleToggleSellerMenu = () => {
        setToggleSeller(!toggleSeller) 
    }

    const handleToggleWallet = () => {
        setToggleWallet(!toggleWallet)
    }

    const handleToggleServiceFees = () => {
        setToggleServiceFees(!toggleServiceFees)
    }

    const handleToggleForm = () => {
        setToggleForm(!toggleForm)
    }

    const getSeller = (seller) => {
        setSingleSeller(seller)
    }

    const handleSearch = async () => {
        if (search) {
            searchMarchants(dispatch,search)
        } else {
            getMarchants(dispatch)
        }
    };

    if(toggleForm || toggleSeller || toggleWallet || toggleServiceFees){
        document.body.classList.add('overflow-hidden')
      } else  {
          document.body.classList.remove('overflow-hidden')
      }

      useEffect(() => {
        getMarchants(dispatch)
      }, [dispatch])

    return(
        <div className='dashboard-content'>
            <Cards cardItems={cardItemsClients} />
            {toggleForm &&
                <div className='modal-container'>
                    <div className='modal-cover'>
                        <div className='form-container'>
                            <ClientForm toggleForm={handleToggleForm} />
                        </div>
                    </div>
                </div>
                }
                {toggleSeller && 
                    <div className='modal-container'>
                        <div className='modal-cover'>
                            <SellerMenu 
                                seller={singleSeller} 
                                closeSeller={handleToggleSellerMenu} 
                                closeWallet={handleToggleWallet}
                                closeServiceFees={handleToggleServiceFees}
                                />
                        </div>
                    </div>
                }
                {toggleWallet && 
                    <div className='modal-container'>
                        <div className='modal-cover'>
                            <Wallet seller={singleSeller} closeWallet={handleToggleWallet} />
                        </div>
                    </div>
                }
                {toggleServiceFees && 
                    <div className='modal-container'>
                        <div className='modal-cover'>
                            <ServiceFees seller={singleSeller} closeServiceFees={handleToggleServiceFees} />
                        </div>
                    </div>
                }
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <button className='dashbord-header-btn' 
                      onClick={handleToggleForm}>
                        Ajouter Marchand
                    </button>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e =>setSearch(e.target.value)} />
                        <div className='search-icon' onClick={handleSearch}>
                            <img src={searchIcon} alt='search-icon' />
                        </div>
                    </div>
                </div>
                {(isFetching) && <div className='loading'>Telechargement...</div>}
                {marchants.length > 0 ? 
                    <Table 
                        head={['ID','No','CODE','ENTREPRISE','REPRESENTANT','TYPE','STATUS',"TAXE","DATE D'ADHESION","MENU"]}
                        body={marchants.map((seller,index)=>([
                            seller.merchantUid,
                            index+1,
                            seller.merchantCode,
                            seller.merchantName,
                            seller.representativeName,
                            seller.businessType,
                            seller.status,
                            seller.tinNumber,
                            new Date(seller.joinedDate).toJSON().slice(0, 10)
                        ]))}
                        getSeller={getSeller}
                        closeSeller={handleToggleSellerMenu}
                        />
                        : <div className='not-found'>Pas de Marchants</div>
                    }
            </div>
        </div>
    )
}

export default Orders;