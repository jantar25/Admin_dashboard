import React, {useState} from 'react';

import all_clients from '../../constants/clients';
import useFetch from '../../Hooks/useFetch';
import { baseURL } from '../../constants/baseURL';

import './styles.css';
import { cardItemsClients } from '../../constants/cards'
import Cards from '../../components/Cards/Cards'
import Table from '../../components/Table/Table';

function Clients () {
    const [search, setSearch] = useState();
    const {isLoading,apiData,serverError} = useFetch(`${baseURL}/customer/0/50`)
    console.log({isLoading,apiData,serverError})

    const handleSearch = () => {
        if(search === undefined) {
            return all_clients
          }
            return all_clients.filter((item) =>
            item.first_name.toLowerCase().startsWith(search.toLowerCase()) ||
            item.last_name.toLowerCase().startsWith(search.toLowerCase())
        );
    };

    const clients = handleSearch()

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
                    </div>
                </div>
                {isLoading && <div className='loading'>Telechargement...</div>}
                {serverError && <div className='error'>{serverError.message}</div>}
                {apiData && 
                <Table 
                    head={['ID','NOM','POST-NOM','TELEPHONE','OPERATEUR',"DATE D'ADHESION"]}
                    body={apiData.map(client=>([
                        client.customerUid,
                        client.firstname,
                        client.lastname,
                        client.telephone,
                        client.operator,
                        client.joinedDate
                    ]))}
                    />
                }
            </div>
        </div>
    )
}

export default Clients;