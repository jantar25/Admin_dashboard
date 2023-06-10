import React, {useState} from 'react';

import all_Sellers from '../../constants/sellers';
import Table from '../../components/Table/Table';

import './styles.css';
import Cards from '../../components/Cards/Cards';
import {cardItemsClients} from '../../constants/cards';
import ClientForm from '../../components/ClientForm/ClientForm';
import SellerMenu from '../../components/SellerMenu/SellerMenu';

function Orders () {
    const [search, setSearch] = useState('');
    const [singleSeller, setSingleSeller] = useState();
    const [toggleForm,setToggleForm] = useState(false);
    const [toggleSeller,setToggleSeller] = useState(false)

    const closeSeller = () => {
        setToggleSeller(!toggleSeller) 
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

    if(toggleForm || toggleSeller){
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
                            <SellerMenu seller={singleSeller} closeSeller={closeSeller} />
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
                    closeSeller={closeSeller}
                    />
            </div>
        </div>
    )
}

export default Orders;