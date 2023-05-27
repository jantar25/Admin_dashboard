import React from 'react'

import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import './table.css'

const Table = ({head,body}) => {
    
  return (
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                    {head.map((h,index) =><th key={index}>{h}</th>)}
                </tr>
            </thead>
            {body.length !== 0 ?
            <tbody>{body.map((seller, index) => (
                <tr key={index}>
                    {seller.map((item,index) => (
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
                        </td>
                    ))}
                    {head.includes("PLUS D'INFO") && <td><button>Info</button></td> }           
                </tr>))}
            </tbody>
            : null}
        </table>
    </div>
  )
}

export default Table