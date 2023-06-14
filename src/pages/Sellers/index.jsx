import React, {useState} from 'react';

import all_Sellers from '../../constants/sellers';
import Table from '../../components/Table/Table';
import useFetch from '../../Hooks/useFetch';
import { baseURL } from '../../constants/baseURL';

import './styles.css';
import Cards from '../../components/Cards/Cards';
import {cardItemsClients} from '../../constants/cards';
import ClientForm from '../../components/ClientForm/ClientForm';
import SellerMenu from '../../components/SellerMenu/SellerMenu';
import Wallet from '../../components/Wallet/Wallet';
import ServiceFees from '../../components/ServiceFees/ServiceFees';

function Orders () {
    const [search, setSearch] = useState('');
    const [singleSeller, setSingleSeller] = useState();
    const [toggleForm,setToggleForm] = useState(false);
    const [toggleSeller,setToggleSeller] = useState(false)
    const [toggleWallet,setToggleWallet] = useState(false);
    const [toggleServiceFees,setToggleServiceFees] = useState(false)

    const {isLoading,apiData,serverError} = useFetch(`${baseURL}/merchant/0/50`)
    console.log({isLoading,apiData,serverError})

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

    const handleSearch = () => {
        if(search === undefined) {
            return all_Sellers
          }
            return all_Sellers.filter((item) =>
            item.represent.toLowerCase().startsWith(search.toLowerCase()) ||
            item.compagny.toLowerCase().startsWith(search.toLowerCase())
        );
    };

    const sellers = handleSearch()

    if(toggleForm || toggleSeller || toggleWallet || toggleServiceFees){
        document.body.classList.add('overflow-hidden')
      } else  {
          document.body.classList.remove('overflow-hidden')
      }

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
                    </div>
                </div>
                <Table 
                    head={['ID','ENTREPRISE','REPRESENTANT','TYPE','STATUS',"MENU"]}
                    body={sellers.map(seller=>([
                        seller.id,
                        seller.compagny,
                        seller.represent,
                        seller.type,
                        seller.status
                    ]))}
                    getSeller={getSeller}
                    closeSeller={handleToggleSellerMenu}
                    />
            </div>
        </div>
    )
}

export default Orders;