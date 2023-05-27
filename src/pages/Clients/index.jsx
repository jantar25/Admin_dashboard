import React, {useState} from 'react';

import all_clients from '../../constants/clients';

import './styles.css';
import { cardItemsClients } from '../../constants/cards'
import Cards from '../../components/Cards/Cards'

function Clients () {
    const [search, setSearch] = useState();

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
                <div className='table-container'>
                    <table>
                        {clients.length !== 0 ?
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>NOM</th>
                                    <th>POST-NOM</th>
                                    <th>TELEPHONE</th>
                                    <th>OPERATEUR</th>
                                    <th>DATE D'ADHESION</th>
                                </tr>
                                {clients.map((client, index) => (
                                    <tr key={index}>
                                        <td><span>{client.id}</span></td>
                                        <td><span>{client.first_name}</span></td>
                                        <td><span>{client.last_name}</span></td>
                                        <td><span>+25{client.telephone}</span></td>
                                        <td><span>{client.operator}</span></td>
                                        <td><span>{client.date}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        : null}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Clients;