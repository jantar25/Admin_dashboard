import React from 'react'

import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import Menu from '../../assets/icons/list.svg'
import './table.css'

const Table = ({head,body,getSeller,closeSeller}) => {

    const handleToggleSeller = (seller) => {
        getSeller(seller)
        closeSeller()
    }

  return (
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                    {head.map((h,index) => head.indexOf(h) !== 0? <th key={index}>{h}</th> : null)}
                </tr>
            </thead>
            {body.length !== 0 ?
            <tbody>{body.map((seller, index) => (
                <tr key={index}>
                    {seller.map((item,index) => 
                        seller.indexOf(item) !== 0?
                        <td data-label={head[index]} key={index}>{item === 'active' || item === 'inactive'?
                            <div className='status-container'>
                                {item === 'active' ?
                                    <img
                                        src={DoneIcon}
                                        alt='paid-icon'
                                        className='dashboard-content-icon' />
                                    : <img
                                        src={CancelIcon}
                                        alt='canceled-icon'
                                        className='dashboard-content-icon' />}
                                <span>{item}</span>
                            </div>
                        : <span>{item}</span>}
                        </td> : null
                    )}
                    {head.includes("MENU") && 
                    <td>
                        <img
                            src={Menu}
                            alt='Menu-icon' 
                            className='menu-list' 
                            onClick={() => handleToggleSeller(seller[0])}/>
                    </td> }
                </tr>
                ))}
            </tbody>
            : null}
        </table>
    </div>
  )
}

export default Table