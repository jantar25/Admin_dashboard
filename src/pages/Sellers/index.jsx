import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'

import { getMarchants,searchMarchants } from '../../Redux/apiCalls';
import Table from '../../components/Table/Table';

import './styles.css';
import Cards from '../../components/Cards/Cards';
import {cardItemsClients} from '../../constants/cards';
import ClientForm from '../../components/ClientForm/ClientForm';
import searchIcon from '../../assets/icons/search.svg'


function Orders () {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');
    const [toggleForm,setToggleForm] = useState(false);

    const {marchants,isFetching} = useSelector(state => state.marchants)

    const handleToggleForm = () => {
        setToggleForm(!toggleForm)
    }

    const handleSearch = async () => {
        if (search) {
            searchMarchants(dispatch,search)
        } else {
            getMarchants(dispatch)
        }
    };

    if(toggleForm){
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
                        head={['ID','No','CODE','ENTREPRISE','REPRESENTANT','TYPE','STATUS',"TAXE","DATE D'ADHESION","PLUS D'INFOS"]}
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
                        />
                        : <div className='not-found'>Pas de Marchants</div>
                    }
            </div>
        </div>
    )
}

export default Orders;