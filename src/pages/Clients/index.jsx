import React, {useState} from 'react';
import axios from 'axios';

import useFetch from '../../Hooks/useFetch';
import { baseURL } from '../../constants/baseURL';

import './styles.css';
import { cardItemsClients } from '../../constants/cards'
import Cards from '../../components/Cards/Cards'
import Table from '../../components/Table/Table'
import searchIcon from '../../assets/icons/search.svg'

function Clients () {
    const [search, setSearch] = useState();
    const [searchedData, setSearchData] = useState();
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [isSearchError, setIsSearchError] = useState(false);
    const {isLoading,apiData,serverError} = useFetch(`${baseURL}/customer/0/50`)

    const handleSearch = async () => {
        setIsSearchLoading(true)
        try {
            const response = await axios.get(`${baseURL}/customer/${search}`)
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

    const data = searchedData || apiData

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
                        <button onClick={handleSearch}>
                            <img src={searchIcon} alt='search-icon' />
                        </button>
                    </div>
                </div>
                {(isLoading || isSearchLoading) && <div className='loading'>Telechargement...</div>}
                {(serverError || isSearchError) && <div className='error'>{serverError || isSearchError}</div>}
                {data && 
                    <Table 
                        head={['ID','NOM','POST-NOM','TELEPHONE','OPERATEUR',"DATE D'ADHESION"]}
                        body={apiData.map(client=>([
                            client.customerUid.substring(10,0),
                            client.firstname,
                            client.lastname,
                            client.telephone,
                            client.operator,
                            new Date(client.joinedDate).toJSON().slice(0, 16)
                        ]))}
                        />
                    }
            </div>
        </div>
    )
}

export default Clients;