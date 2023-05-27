import React, {useState} from 'react';

import all_Sellers from '../../constants/sellers';

import './styles.css';
import Cards from '../../components/Cards/Cards';
import {cardItemsClients} from '../../constants/cards';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import ClientForm from '../../components/ClientForm/ClientForm';

function Orders () {
    const [search, setSearch] = useState('');
    const [toggleForm,setToggleForm] = useState(false);


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


    const handleToggleForm = () => {
        setToggleForm(!toggleForm)
    }

    return(
        <div className='dashboard-content'>
            <Cards cardItems={cardItemsClients} /> 
            <div className='dashboard-content-container'>
                {toggleForm && 
                <div className='form-container'>
                    <ClientForm toggleForm={handleToggleForm} />
                </div>
                }
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
                <table>
                    {sellers.length !== 0 ?
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>ENTREPRISE</th>
                                <th>REPRESENTANT</th>
                                <th>TYPE</th>
                                <th>STATUS</th>
                                <th>INFO</th>
                            </tr>
                            {sellers.map((seller, index) => (
                                <tr key={index}>
                                    <td><span>{seller.id}</span></td>
                                    <td><span>{seller.compagny}</span></td>
                                    <td><span>{seller.represent}</span></td>
                                    <td><span>{seller.type}</span></td>
                                    <td>
                                        <div>
                                            {seller.status === 'active' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                                : <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                           }
                                            <span>{seller.status}</span>
                                        </div>
                                    </td>
                                    <td><button>Info</button></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>
            </div>
        </div>
    )
}

export default Orders;