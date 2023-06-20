import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'

import { getClients,searchClients } from '../../Redux/apiCalls';
import './styles.css';
import { cardItemsClients } from '../../constants/cards'
import Cards from '../../components/Cards/Cards'
import Table from '../../components/Table/Table'
import searchIcon from '../../assets/icons/search.svg'

function Clients () {
    const dispatch = useDispatch()
    const [search, setSearch] = useState();
    const {clients,isFetching} = useSelector(state => state.clients)

    const handleSearch = async () => {
        if (search) {
            searchClients(dispatch,search)
        } else {
            getClients(dispatch)
        }
    };

    useEffect(() => {
        getClients(dispatch)
      }, [dispatch])

    return(
        <div className='dashboard-content'>
            <Cards cardItems={cardItemsClients} /> 
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={(e)=>setSearch(e.target.value)} />
                        <div className='search-icon' onClick={handleSearch}>
                            <img src={searchIcon} alt='search-icon' />
                        </div>
                    </div>
                </div>
                {isFetching && <div className='loading'>Telechargement...</div>}
                {clients.length > 0? 
                    <Table 
                        head={['ID','NOM','POST-NOM','TELEPHONE','OPERATEUR',"DATE D'ADHESION"]}
                        body={clients.map(client=>([
                            client.customerUid,
                            client.firstname,
                            client.lastname,
                            client.telephone,
                            client.operator,
                            new Date(client.joinedDate).toJSON().slice(0, 16)
                        ]))}
                        />
                        : <div className='not-found'>Pas de clients</div>
                    }
            </div>
        </div>
    )
}

export default Clients;