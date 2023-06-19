import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'

import { getMarchants } from '../../Redux/apiCalls';
import Table from '../../components/Table/Table';
import { baseURL } from '../../constants/baseURL';

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
    const [searchedData, setSearchData] = useState();
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [isSearchError, setIsSearchError] = useState(false);

    const {marchants,isFetching,error} = useSelector(state => state.marchants)

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
        setIsSearchLoading(true)
        try {
            const response = await axios.get(`${baseURL}/merchant/find/${search}`)
            const data = response?.data
            setSearchData(data)
            setIsSearchLoading(false)
            setSearch('')
        } catch (error) {
            console.log(error)
            setIsSearchLoading(false)
            setIsSearchError(error.message)
            setTimeout(() => {
                setIsSearchError(null)
              }, 5000)
        }
    };

    const data = searchedData || marchants

    if(toggleForm || toggleSeller || toggleWallet || toggleServiceFees){
        document.body.classList.add('overflow-hidden')
      } else  {
          document.body.classList.remove('overflow-hidden')
      }

      useEffect(() => {
        getMarchants(dispatch)
        console.log('useeffect')
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
                {(isFetching || isSearchLoading) && <div className='loading'>Telechargement...</div>}
                {(error || isSearchError) && <div className='error'>{error || isSearchError}</div>}
                {data && 
                    <Table 
                        head={['ID','ENTREPRISE','REPRESENTANT','TYPE','STATUS',"TAXE","MENU"]}
                        body={data.map(seller=>([
                            seller.merchantUid,
                            seller.merchantName,
                            seller.representativeName,
                            seller.businessType,
                            seller.status,
                            seller.tinNumber
                        ]))}
                        getSeller={getSeller}
                        closeSeller={handleToggleSellerMenu}
                        />
                    }
            </div>
        </div>
    )
}

export default Orders;