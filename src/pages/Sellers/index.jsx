import React, {useState} from 'react';

import all_orders from '../../constants/orders';

import './styles.css';
import Cards from '../../components/Cards/Cards';
import cardItems from '../../constants/cards';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import ClientForm from '../../components/ClientForm/ClientForm';

function Orders () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [toggleForm,setToggleForm] = useState(false);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
            let search_results = orders.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
    };


    const handleToggleForm = () => {
        setToggleForm(!toggleForm)
    }

    return(
        <div className='dashboard-content'>
            <Cards cardItems={cardItems} /> 
            <div className='dashboard-content-container'>
                {toggleForm && 
                <div className='form-container'>
                    <ClientForm toggleForm={handleToggleForm} />
                </div>
                }
                <div className='dashboard-content-header'>
                    <button className='dashbord-header-btn' 
                      onClick={handleToggleForm}>
                        Ajouter Marchands
                    </button>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    {orders.length !== 0 ?
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>STATUS</th>
                                <th>COSTUMER</th>
                                <th>PRODUCT</th>
                                <th>REVENUE</th>
                            </tr>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td><span>{order.id}</span></td>
                                    <td><span>{order.date}</span></td>
                                    <td>
                                        <div>
                                            {order.status === 'Paid' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Canceled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Refunded' ?
                                                <img
                                                    src={RefundedIcon}
                                                    alt='refunded-icon'
                                                    className='dashboard-content-icon' />
                                            : null}
                                            <span>{order.status}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <img 
                                                src={order.avatar}
                                                className='dashboard-content-avatar'
                                                alt={order.first_name + ' ' +order.last_name} />
                                            <span>{order.first_name} {order.last_name}</span>
                                        </div>
                                    </td>
                                    <td><span>{order.product}</span></td>
                                    <td><span>${order.price}</span></td>
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